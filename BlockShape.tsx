import pandas as pd
import json
import os
import re
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig

# --- CONFIGURATION ---

# REPLACE with the actual Hugging Face Model ID you want to use.
# Since "gemma3" isn't out yet, I am using Gemma 2 (9B) as the example.
# If you have a specific path to a local .pth/.safetensors model, put that path here.
MODEL_ID = "google/gemma-2-9b-it" 

INPUT_FILE = "quality_notification.csv"
OUTPUT_FILE = "processed_multidimensional_results.csv"
ROWS_TO_PROCESS = 5
MAX_NEW_TOKENS = 2048 # Length of the output JSON

# --- MODEL LOADING ---
print(f"Loading model: {MODEL_ID}...")

# Quantization config (Optional: helps fit large models on smaller GPUs)
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.float16
)

try:
    tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
    model = AutoModelForCausalLM.from_pretrained(
        MODEL_ID,
        quantization_config=bnb_config, # Remove this line if you want full precision
        device_map="auto",              # Automatically uses available GPUs
        torch_dtype=torch.float16
    )
    print("Model loaded successfully on GPU.")
except Exception as e:
    print(f"Error loading model: {e}")
    exit()

# --- THE MASTER PROMPT ---
MASTER_SYSTEM_PROMPT = """
You are a Multi-Dimensional Semantic Analysis Engine. Your goal is to evaluate the input text against 17 independent dimensions simultaneously.

### LOGIC & DEFINITIONS
You must detect if the following categories exist based on their Triggers and Exclusions.

#### GROUP A: CONTEXTUAL SCOPE
1. financial_info:
   - Logic: Monetary values, pricing, invoices, cost codes.
   - Triggers: $, USD, invoice, profit/loss, price, cost.
2. schedule_mgmt_info:
   - Logic: Planning, dates, org hierarchy, approvals.
   - Triggers: Schedules, dates, signatures, sign-offs, org charts.
3. nomenclature_info:
   - Logic: Identifiers without specs.
   - Triggers: Part numbers, serial numbers, generic names (e.g., "Bracket").
4. general_description:
   - Logic: High-level summaries.
   - Triggers: Summaries without parameters or technical depth.
5. marketing_info:
   - Logic: Sales/Promotion.
   - Triggers: Value propositions, sales language.
6. public_domain_info:
   - Logic: Publicly available info.
   - Triggers: Patents, open standards, conference papers.
7. applicability_info:
   - Logic: Utility context.
   - Triggers: "Used for design", "production", "operation".

#### GROUP B: TECHNICAL PARAMETERS
8. material_specifications:
   - Logic: Intrinsic properties of matter.
   - Triggers: Hardness (HRC), Yield Strength, Chemical Comp.
   - EXCLUSION: Processing steps (heating).
9. manufacturing_parameters:
   - Logic: Process inputs/settings.
   - Triggers: Temps, Times, Voltage, Feed Rates.
   - EXCLUSION: Resulting material properties.
10. dimensional_specifications:
    - Logic: Physical geometry.
    - Triggers: Linear dimensions, Tolerances (±), GD&T.
11. detailed_design_specs:
    - Logic: System interfaces.
    - Triggers: Electrical ratings, Pinouts, Software versions.
12. performance_parameters:
    - Logic: Active Output (Requirement).
    - Triggers: Flow rates, RPM, Thrust (Required range).
    - RULE: Describes what system *does*.
13. loads_forces_torques:
    - Logic: Passive Constraints.
    - Triggers: Burst pressure, G-force limits, Structural loads.
    - RULE: Describes what system *withstands*.
14. test_data_results:
    - Logic: Observed Results (History).
    - Triggers: "Measured at", "Actual value", "Pass/Fail".
    - RULE: Discrete points (e.g., "52 psi") vs Ranges.
15. failure_analysis_details:
    - Logic: Root Cause.
    - Triggers: Crack measurements, chemical analysis, fracture mechanics.
16. standards_citations:
    - Logic: Traceability.
    - Triggers: Specific standards (ASTM, AMS) WITH section numbers.
17. corrective_actions:
    - Logic: Remediation.
    - Triggers: Rework params, repair schemes, deviations.

### DISAMBIGUATION RULES (CRITICAL)
1. **Action vs Property:** If text describes heating, it is Manufacturing. If text describes hardness, it is Material.
2. **Requirement vs Result:** If text states a range (e.g., "50-60 psi"), it is Performance. If text states a discrete point (e.g., "52 psi"), it is Test Data.
3. **Force Check:** Is force doing work? -> Performance. Is force stressing part? -> Loads. Is force applied by tool? -> Manufacturing.

### OUTPUT FORMAT
Return a single valid JSON object. Do not include markdown formatting or code blocks.
Schema:
{
  "financial_info": { "exists": boolean, "evidence": "string" },
  "schedule_mgmt_info": { "exists": boolean, "evidence": "string" },
  "nomenclature_info": { "exists": boolean, "evidence": "string" },
  "general_description": { "exists": boolean, "evidence": "string" },
  "marketing_info": { "exists": boolean, "evidence": "string" },
  "public_domain_info": { "exists": boolean, "evidence": "string" },
  "applicability_info": { "exists": boolean, "evidence": "string" },
  "material_specifications": { "exists": boolean, "evidence": "string" },
  "manufacturing_parameters": { "exists": boolean, "evidence": "string" },
  "dimensional_specifications": { "exists": boolean, "evidence": "string" },
  "detailed_design_specs": { "exists": boolean, "evidence": "string" },
  "performance_parameters": { "exists": boolean, "evidence": "string" },
  "loads_forces_torques": { "exists": boolean, "evidence": "string" },
  "test_data_results": { "exists": boolean, "evidence": "string" },
  "failure_analysis_details": { "exists": boolean, "evidence": "string" },
  "standards_citations": { "exists": boolean, "evidence": "string" },
  "corrective_actions": { "exists": boolean, "evidence": "string" }
}
"""

def extract_json_from_response(text):
    """
    Helper to extract the JSON object from the LLM's response
    (handling cases where the model adds markdown or conversational text).
    """
    try:
        # Try to parse the whole text first
        return json.loads(text)
    except json.JSONDecodeError:
        pass

    # Look for ```json blocks or just the first { and last }
    try:
        # Regex to find JSON block
        match = re.search(r"\{.*\}", text, re.DOTALL)
        if match:
            json_str = match.group(0)
            return json.loads(json_str)
    except Exception:
        pass
    
    return None

def process_text_on_gpu(text):
    """Runs the inference using the loaded Hugging Face model."""
    
    # Construct the conversation
    messages = [
        {"role": "user", "content": MASTER_SYSTEM_PROMPT + f"\n\nAnalyze this text:\n{text}"}
    ]
    
    # Apply chat template (handles <start_of_turn> etc specific to model)
    # If your model supports system roles natively, you can separate them.
    # Most models work best merging system prompt into the first user turn as done above.
    input_ids = tokenizer.apply_chat_template(
        messages, 
        return_tensors="pt", 
        add_generation_prompt=True
    ).to(model.device)

    terminators = [
        tokenizer.eos_token_id,
        tokenizer.convert_tokens_to_ids("<end_of_turn>")
    ]

    # Generate
    with torch.no_grad():
        outputs = model.generate(
            input_ids, 
            max_new_tokens=MAX_NEW_TOKENS,
            eos_token_id=terminators,
            do_sample=False, # Deterministic (Temperature 0 equivalent)
            temperature=None,
            top_p=None
        )

    # Decode
    response = tokenizer.decode(outputs[0][input_ids.shape[-1]:], skip_special_tokens=True)
    
    # Extract and Parse JSON
    data = extract_json_from_response(response)
    
    if not data:
        print(f"Warning: Could not parse JSON. Raw response: {response[:100]}...")
        # Return empty structure on failure
        return {k: {"exists": False, "evidence": "Error parsing JSON"} for k in [
            "financial_info", "schedule_mgmt_info", "nomenclature_info", 
            "general_description", "marketing_info", "public_domain_info", 
            "applicability_info", "material_specifications", "manufacturing_parameters", 
            "dimensional_specifications", "detailed_design_specs", "performance_parameters", 
            "loads_forces_torques", "test_data_results", "failure_analysis_details", 
            "standards_citations", "corrective_actions"
        ]}
        
    return data

# --- FAKE DATA GENERATION ---
def create_fake_csv():
    csv_data = """PROBLEM_CODE_TEXT,DESCRIPTION,MATERIAL,MATERIAL_DESCRIPTION,LONG_TEXT
Documentation/Paperwork,MISSING CERT PACKAGE,WHL-8844,WHEEL ASSEMBLY,"03/09/2024 09:12:24 GMT Patrick Jackson (C28091905) 03.09.2024 09:01:10 GMT John Smith (008008) Non-conforming Part Number(detail) including configuration = 157-301-888,,WHEEL ASSEMBLY MAIN GEAR. SUPPLIER WAS SUPPOSED TO INCLUDE CERTIFICATION PACKAGE PER PO REQUIREMENTS. PACKAGE NOT FOUND IN SHIPMENT. CONTACTED SUPPLIER AND THEY CONFIRMED THEY WILL SEND VIA EMAIL BY END OF DAY. Part Sn(s):,,WH-5521, WH-5522, WH-5523 Eng. Drawing:,,334-PLT-001 Rev C NOTE: PARTS ARE IN RECEIVING HOLD AREA UNTIL PAPERWORK ARRIVES. INSPECTOR CONFIRMED QUANTITY AND PART NUMBERS MATCH PO. 03/10/2024 08:15:33 GMT Patrick Jackson (C28091905) RECEIVED EMAIL WITH CERTIFICATION PACKAGE. MRB/QA REVIEWED AND APPROVED FOR RELEASE TO STOCK."
Process Issue,TRAVELER INCOMPLETE,BLK-7733,"BLOCK, MOUNTING","04/15/2024 14:22:18 GMT Sarah Williams (C29182304) 04.15.2024 14:10:05 GMT Mike Torres (009123) Part Number = 445-889-223,,MOUNTING BLOCK ASSY. MANUFACTURING TRAVELER WAS MISSING SUPERVISOR SIGNATURE ON PAGE 3 OF 5. OPERATIONS MANAGER STATES THAT SUPERVISOR WAS ON VACATION LAST WEEK WHEN PARTS WERE COMPLETED. Part Sn(s):,,BLK-9921 Eng. Drawing:,,445-889-223-001 ACTUAL: SUPERVISOR SIGNATURE MISSING FROM FINAL INSPECTION SECTION. NOTE: ALL INSPECTION STAMPS ARE PRESENT AND DATED CORRECTLY. PART APPEARS TO HAVE BEEN PROPERLY INSPECTED. REF: TRAVELER SHOWS COMPLETION DATE OF 04/08/2024. 04/16/2024 09:30:12 GMT Sarah Williams (C29182304) SUPERVISOR RETURNED FROM VACATION AND REVIEWED TRAVELER. SIGNED OFF WITH NOTE EXPLAINING LATE SIGNATURE. MRB/QA CONCURS WITH DISPOSITION."
Administrative,PO REVISION NOT COMMUNICATED,STR-6655,STRUCTURAL BEAM,"05/20/2024 10:45:33 GMT David Kim (C30293405) 05.20.2024 10:30:22 GMT Lisa Anderson (010234) Non-conforming Part Number = 778-223-445,,BEAM STRUCTURAL FWD. SUPPLIER MANUFACTURED TO ORIGINAL PO REV A BUT CUSTOMER HAD ISSUED REV B LAST MONTH. PURCHASING DEPARTMENT DID NOT SEND UPDATED PO TO SUPPLIER. SUPPLIER STATES THEY NEVER RECEIVED REV B. Part Sn(s):,,STR-8821, STR-8822 Eng. Drawing:,,778-223-445 Rev D NOTE: PARTS WERE MANUFACTURED PER REV A REQUIREMENTS. REV B ONLY CHANGED DELIVERY DATE AND PACKAGING INSTRUCTIONS. NO DESIGN CHANGES BETWEEN REVISIONS. 05/21/2024 11:20:15 GMT David Kim (C30293405) ENGINEERING CONFIRMED NO TECHNICAL CHANGES IN PO REV B. PARTS ACCEPTABLE FOR USE. PURCHASING WILL UPDATE INTERNAL PROCEDURES TO PREVENT SIMILAR ISSUES."
"""
    if not os.path.exists(INPUT_FILE):
        with open(INPUT_FILE, "w") as f:
            f.write(csv_data)
        print("Created fake data file.")

# --- MAIN LOGIC ---
def main():
    create_fake_csv()
    
    try:
        df = pd.read_csv(INPUT_FILE)
    except FileNotFoundError:
        print("File not found.")
        return

    # Check for existing output to append vs create new
    file_exists = os.path.isfile(OUTPUT_FILE)
    start_index = 0
    if file_exists:
        existing_df = pd.read_csv(OUTPUT_FILE)
        start_index = len(existing_df)
        print(f"Resuming from row {start_index}...")

    chunk = df.iloc[start_index : start_index + ROWS_TO_PROCESS]
    if chunk.empty:
        print("No new rows.")
        return

    for index, row in chunk.iterrows():
        print(f"Processing Row {index} (ID: {row.get('PROBLEM_CODE_TEXT', 'Unknown')})...")
        
        # Prepare Input Text
        text_payload = (
            f"Material: {row.get('MATERIAL', '')}. "
            f"Description: {row.get('DESCRIPTION', '')}. "
            f"Log: {row.get('LONG_TEXT', '')}"
        )

        # Run Analysis on GPU
        analysis = process_text_on_gpu(text_payload)
        
        # Flatten Results
        flat_row = row.to_dict()
        
        for key, val in analysis.items():
            if isinstance(val, dict):
                flat_row[f"{key}_FLAG"] = val.get('exists', False)
                flat_row[f"{key}_EVIDENCE"] = val.get('evidence', "")
        
        # Save Incrementally
        results_df = pd.DataFrame([flat_row])
        write_header = not os.path.isfile(OUTPUT_FILE)
        results_df.to_csv(OUTPUT_FILE, mode='a', header=write_header, index=False)
        print(f" -> Saved Row {index}")

    print("Processing Complete.")

if __name__ == "__main__":
    main()

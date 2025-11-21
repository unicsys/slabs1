import ollama
import json
import pandas as pd
import os
import io

# --- CONFIGURATION ---
MODEL_NAME = "gemma3:12b-it-qat"  # Ensure this model is pulled in Ollama
INPUT_FILE = "quality_notification.csv"
OUTPUT_FILE = "processed_quality_notification.csv"
ROWS_TO_PROCESS = 5  # Batch size

# --- THE REFINED PROMPT LOGIC ---
# This dictionary maps your specific "Logic/Triggers/Exclusions" into the prompt context.
ANALYSIS_GROUPS = {
    "Contextual_Scope": {
        "role": "Business Analyst",
        "instructions": "Determine if the text contains administrative or business context.",
        "categories": {
            "financial_info": "Logic: Monetary/Pricing. Triggers: Costs, invoices, profit/loss, currency.",
            "schedule_mgmt_info": "Logic: Planning/Org. Triggers: Dates, org charts, signatures, workflows, approvals.",
            "nomenclature_info": "Logic: Identification. Triggers: Part numbers, serial numbers (without specs), generic names.",
            "general_description": "Logic: High-level summary. Triggers: Summaries without measurable parameters.",
            "marketing_info": "Logic: Promotion. Triggers: Sales language, value props.",
            "public_domain_info": "Logic: Open Source. Triggers: Public patents, open standards, conference papers.",
            "applicability_info": "Logic: Utility. Triggers: Usage for design, development, production."
        }
    },
    "Material_And_Process": {
        "role": "Materials Engineer",
        "instructions": "Extract material and manufacturing specifics. Rule: Action vs Property (Heating=Mfg, Hardness=Material).",
        "categories": {
            "material_specifications": "Logic: Intrinsic Properties. Triggers: Hardness, Yield Strength, Chemical Comp, Material Grade. Excludes: Processing steps.",
            "manufacturing_parameters": "Logic: Process Inputs. Triggers: Temps (Oven), Times (Soak), Voltage, Feed Rates. Excludes: Resulting properties."
        }
    },
    "Geometry_And_Design": {
        "role": "Design Engineer",
        "instructions": "Extract physical shape and interface requirements.",
        "categories": {
            "dimensional_specifications": "Logic: Physical Geometry. Triggers: Linear dimensions, Tolerances, GD&T. Excludes: Electrical/Software.",
            "detailed_design_specs": "Logic: System Interfaces. Triggers: Electrical ratings, Pinouts, Software versions."
        }
    },
    "Physics_And_Performance": {
        "role": "Physics Analyst",
        "instructions": "Extract forces and output goals. Rule: Force doing work = Performance. Force stressing part = Loads.",
        "categories": {
            "performance_parameters": "Logic: Active Output (The Goal). Triggers: Flow rates, RPM, Thrust, Lift. Rule: Ranges/Requirements.",
            "loads_forces_torques": "Logic: Passive Constraints (The Endurance). Triggers: Burst pressure, G-force, Static torque. Rule: What it withstands."
        }
    },
    "Verification_And_Resolution": {
        "role": "Quality Engineer",
        "instructions": "Extract testing, failure analysis, and resolution data. Rule: Specific Point Data = Test Data.",
        "categories": {
            "test_data_results": "Logic: Observed Results. Triggers: 'Measured at', 'Actual value', Pass/Fail. Rule: Historical events.",
            "failure_analysis_details": "Logic: Root Cause. Triggers: Crack measurements, chemical analysis, fracture mechanics.",
            "standards_citations": "Logic: Traceability. Triggers: Specific standards (ASTM, AMS) WITH section numbers.",
            "corrective_actions": "Logic: Remediation. Triggers: Rework params, deviations, repair schemes."
        }
    }
}

SYSTEM_PROMPT_TEMPLATE = """
You are an expert {role}. Your task is to analyze the input text against specific definitions.

GLOBAL DISAMBIGUATION RULES:
1. Action vs Property: If text describes heating/tools, it is Manufacturing. If it describes inherent hardness/strength, it is Material.
2. Requirement vs Result: If text states a range (e.g., 50-60 psi), it is a Parameter. If it states a discrete point (e.g., 52 psi), it is Test Data.

Analyze the text for the following categories:
{schema_desc}

Return JSON format ONLY:
{{
  "category_name": {{ "exists": boolean, "evidence": "exact quote or empty string" }},
  ...
}}
"""

def run_agents_on_text(text):
    """
    Runs the text through the defined agent groups (Logic Dimensions).
    """
    merged_result = {}
    
    for group_name, config in ANALYSIS_GROUPS.items():
        # Construct the specific schema description for this group
        schema_desc = ""
        for key, desc in config['categories'].items():
            schema_desc += f"- {key}: {desc}\n"
            
        prompt = SYSTEM_PROMPT_TEMPLATE.format(
            role=config['role'],
            schema_desc=schema_desc
        )
        
        try:
            response = ollama.chat(
                model=MODEL_NAME,
                messages=[
                    {"role": "system", "content": prompt}, 
                    {"role": "user", "content": text}
                ],
                format="json",
                options={"temperature": 0} # Keep it deterministic
            )
            
            # Parse JSON
            data = json.loads(response["message"]["content"])
            merged_result.update(data)
            
        except Exception as e:
            print(f"Error in group {group_name}: {e}")
            # Fill with False on error
            for k in config['categories']:
                merged_result[k] = {"exists": False, "evidence": "Error during processing"}
            
    return merged_result

# --- DATA PREPARATION (Creating your fake CSV) ---
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

# --- MAIN PROCESSING LOOP ---

def main():
    create_fake_csv()
    
    try:
        df = pd.read_csv(INPUT_FILE)
    except FileNotFoundError:
        print("Input file not found.")
        return

    file_exists = os.path.isfile(OUTPUT_FILE)
    start_index = 0
    
    if file_exists:
        existing_df = pd.read_csv(OUTPUT_FILE)
        start_index = len(existing_df)
        print(f"Resuming from row {start_index}...")
    
    chunk_to_process = df.iloc[start_index : start_index + ROWS_TO_PROCESS]
    
    if chunk_to_process.empty:
        print("No new rows to process.")
        return

    for index, row in chunk_to_process.iterrows():
        print(f"Processing Row {index} (ID: {row.get('PROBLEM_CODE_TEXT', 'Unknown')})...")
        
        # Combine text for context
        full_text = (
            f"Material: {row.get('MATERIAL', '')}. "
            f"Desc: {row.get('DESCRIPTION', '')}. "
            f"Details: {row.get('LONG_TEXT', '')}"
        )
        
        # Run the 17-Dimension Analysis
        analysis_results = run_agents_on_text(full_text)
        
        # Build the result row
        flat_row = row.to_dict() # Keep original data
        
        # Flatten the analysis results
        for key, val in analysis_results.items():
            if isinstance(val, dict):
                # Check if 'exists' key is present; handle potential missing keys safely
                flag = val.get('exists', False)
                evidence = val.get('evidence', "")
                
                # Ensure we handle string "true"/"false" from LLM if it messes up types
                if isinstance(flag, str):
                    flag = True if flag.lower() == "true" else False
                    
                flat_row[f"{key}_FLAG"] = flag
                flat_row[f"{key}_EVIDENCE"] = evidence

        # Save immediately
        results_df = pd.DataFrame([flat_row])
        write_header = not os.path.isfile(OUTPUT_FILE)
        results_df.to_csv(OUTPUT_FILE, mode='a', header=write_header, index=False)
        
        print(f" -> Saved Row {index}")

    print("\nBatch processing complete.")

if __name__ == "__main__":
    main()


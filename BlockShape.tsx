!pip install -q sentence-transformers faiss-cpu pandas
-----
import pandas as pd
import faiss
from sentence_transformers import SentenceTransformer

# --- CONFIGURATION ---
CSV_FILE_PATH = "quality_notes.csv"      # <--- REPLACE with your csv filename
TEXT_COLUMN_NAME = "notes"               # <--- REPLACE with the column header for the text

# 1. Load Data
print("Loading CSV...")
df = pd.read_csv(CSV_FILE_PATH)
# Remove empty rows to avoid errors
df = df.dropna(subset=[TEXT_COLUMN_NAME])
documents = df[TEXT_COLUMN_NAME].tolist()

# 2. Load Embedding Model (Force CPU to save GPU for Gemma)
print("Loading Embedder...")
embedder = SentenceTransformer('all-MiniLM-L6-v2', device='cpu')

# 3. Create Vectors
print("Creating embeddings (this might take a minute)...")
embeddings = embedder.encode(documents, convert_to_numpy=True, show_progress_bar=True)

# 4. Build Index
index = faiss.IndexFlatL2(embeddings.shape[1])
index.add(embeddings)

print(f"✅ Success! Indexed {len(documents)} records.")


-----

def ask_csv(question, k=3):
    """
    k: Number of relevant CSV rows to retrieve
    """
    # 1. Retrieve relevant docs
    query_vector = embedder.encode([question])
    distances, indices = index.search(query_vector, k)
    
    # Get the actual text from the top results
    context_data = [documents[i] for i in indices[0]]
    
    # 2. Build the prompt
    # We join the retrieved rows with separators
    context_block = "\n\n--- ROW ENTRY ---\n".join(context_data)
    
    prompt = f"""You are a Quality Assurance analyst. Use the context below to answer the user's question.
If the answer is not in the context, say "I don't see that in the notes."

CONTEXT FROM CSV:
{context_block}

USER QUESTION:
{question}

ANSWER:
"""

    # 3. Generate with Gemma (Assuming 'model' and 'tokenizer' are loaded)
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
    
    # Generate answer
    outputs = model.generate(
        **inputs, 
        max_new_tokens=300,       # Adjust length as needed
        do_sample=False           # False = more deterministic/factual answers
    )
    
    # Decode and print
    answer = tokenizer.decode(outputs[0][inputs.input_ids.shape[1]:], skip_special_tokens=True)
    print(f"\nQ: {question}\n")
    print(f"A: {answer}\n")
    print("-" * 50)

-----


  ask_csv("What represent the most common defects in the chassis assembly?")

-----


  ask_csv("Summarize the issues reported on 2024-05-12")


-------

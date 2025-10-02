import requests
import pandas as pd
from urllib.parse import quote_plus

# --- CONFIGURATION ---
MOBI_HOST = "https://localhost:8443" 
API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbW9iaS5jb20vIiwic3ViIjoiYWRtaW4iLCJleHAiOjE3NTk1MDIwOTAsInNjb3BlIjoic2VsZiAvKiJ9.9ccjEi7pbr99qq0o7ozPUII9tIufayC55VlQ-87IWQE"


# --- SCRIPT ---

requests.packages.urllib3.disable_warnings()
headers = {'Cookie': f'mobi_web_token={API_TOKEN}'}
print("Authentication headers prepared.")

# --- Step 1: Fetch the list of datasets ---
try:
    datasets_url = f"{MOBI_HOST}/mobirest/datasets"
    params = {"offset": 0, "limit": 100, "sort": "http://purl.org/dc/terms/title"}
    response = requests.get(datasets_url, headers=headers, params=params, verify=False)
    response.raise_for_status()
    
    dataset_records = response.json()
    
    print("\n" + "="*50)
    print("  Discovered Datasets on the Mobi Server")
    print("="*50)
    
    if not dataset_records:
        print("No datasets were found on the server.")
    else:
        # Loop through the data and print the exact title of each dataset found.
        for ds_list in dataset_records:
            if ds_list:
                ds = ds_list[0]
                title = ds.get('http://purl.org/dc/terms/title', [{'@value': '!!! UNTITLED DATASET !!!'}])[0]['@value']
                iri = ds.get('@id', 'No IRI found')
                print(f"  - Title: '{title}'")
                print(f"    IRI:   {iri}\n")
    print("="*50)
    print("\nPlease find the exact title of your dataset in the list above and update the 'TARGET_DATASET_NAME' in the main script.")


except requests.exceptions.RequestException as e:
    print(f"❌ Could not fetch dataset list: {e}")


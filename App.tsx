import React, { useState } from 'react';
import styled from 'styled-components';
import { DiagramCanvas } from './components/DiagramCanvas';
import { Toolbar, ToolType } from './components/Toolbar';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const CanvasContainer = styled.div`
  flex: 1;
  background: #f5f5f5;
`;

const App: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolType>('select');

  return (
    <AppContainer>
      <Toolbar selectedTool={selectedTool} onToolSelect={setSelectedTool} />
      <CanvasContainer>
        <DiagramCanvas selectedTool={selectedTool} />
      </CanvasContainer>
    </AppContainer>
  );
};


export default App; 

import requests
import pandas as pd

# --- CONFIGURATION ---
MOBI_HOST = "https://localhost:8443" 

# IMPORTANT: Paste the token you copied from your browser's Developer Tools here.
# It should be the long string that starts with "eyJ..."
API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbW9iaS5jb20vIiwic3ViIjoiYWRtaW4iLCJleHAiOjE3NTgyMTI1MzcsInNjb3BlIjoic2VsZiAvKiJ9.moOWu_2VVaEOT_SEt-pZ6JPuTR6X4GTl9bbbNIkTZI0"

# --- SCRIPT ---

# This line disables warnings for self-signed SSL certificates.
requests.packages.urllib3.disable_warnings()

# Step 1: Prepare the headers using the Cookie method for authentication.
headers = {
    'Cookie': f'mobi_web_token={API_TOKEN}'
}
print("Authentication headers prepared.")

# Step 2: Define the API endpoint for fetching users.
users_url = f"{MOBI_HOST}/mobirest/users"
print(f"Attempting to fetch user list from: {users_url}")

try:
    # Step 3: Make the authenticated API request.
    # The 'headers' dictionary contains our cookie, which authenticates us.
    response = requests.get(users_url, headers=headers, verify=False, timeout=10)
    
    # This line is important: it will automatically check if the server responded with an error
    # (like 401 Unauthorized if your token is expired or invalid).
    response.raise_for_status() 
    
    # Convert the successful response into a Python list of dictionaries.
    users_data = response.json()
    
    print(f"\n✅ SUCCESS! Successfully retrieved {len(users_data)} user(s).")
    
    # Step 4: Process and display the data in a readable format.
    if users_data:
        processed_users = []
        for user in users_data:
            # Extracting the values from the JSON-LD structure
            user_info = {
                'username': user.get('http://mobi.com/ontologies/user/management#username', [{'@value': ''}])[0]['@value'],
                'firstName': user.get('http://xmlns.com/foaf/0.1/firstName', [{'@value': ''}])[0]['@value'],
                'lastName': user.get('http://xmlns.com/foaf/0.1/lastName', [{'@value': ''}])[0]['@value'],
                'iri': user.get('@id')
            }
            processed_users.append(user_info)

        # Using pandas for a clean, tabular display in your notebook.
        df = pd.DataFrame(processed_users)
        display(df)
        
    else:
        print("No users were found.")

except requests.exceptions.HTTPError as e:
    print(f"\n❌ FAILED. The server responded with an error.")
    print(f"   Status Code: {e.response.status_code}")
    print(f"   Response Body: {e.response.text}")
    print("\n   This likely means your API_TOKEN is invalid, expired, or doesn't have permission.")
    print("   Please get a fresh token from your browser and try again.")
except requests.exceptions.RequestException as e:
    print(f"\n❌ FAILED. A connection error occurred: {e}")

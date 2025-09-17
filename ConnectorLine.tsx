import React from 'react';
import { Group, Line, Text } from 'react-konva';
import { Connector } from '../types/diagram';

interface ConnectorLineProps {
  connector: Connector;
  isSelected: boolean;
  onClick: () => void;
}

export const ConnectorLine: React.FC<ConnectorLineProps> = ({
  connector,
  isSelected,
  onClick,
}) => {
  const points = connector.points.flatMap(point => [point.x, point.y]);
  const midPoint = {
    x: (connector.points[Math.floor(connector.points.length / 2)].x +
      connector.points[Math.floor(connector.points.length / 2) - 1].x) / 2,
    y: (connector.points[Math.floor(connector.points.length / 2)].y +
      connector.points[Math.floor(connector.points.length / 2) - 1].y) / 2,
  };

  return (
    <Group onClick={onClick}>
      <Line
        points={points}
        stroke={isSelected ? '#0096ff' : connector.style.stroke}
        strokeWidth={isSelected ? connector.style.strokeWidth + 1 : connector.style.strokeWidth}
        tension={0.5}
        lineCap="round"
        lineJoin="round"
      />
      {connector.text && (
        <Text
          x={midPoint.x - 50}
          y={midPoint.y - 10}
          text={connector.text}
          width={100}
          align="center"
          fontSize={12}
          fill={connector.style.stroke}
        />
      )}
    </Group>
  );

}; 
};

import requests
import pandas as pd

# --- CONFIGURATION ---
# Your host and token for the local machine
MOBI_HOST = "https://localhost:8443" 
API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbW9iaS5jb20vIiwic3ViIjoiYWRtaW4iLCJleHAiOjE3NTgyMTQ2NTAsInNjb3BlIjoic2VsZiAvKiJ9.Johl3HocZdCjH7kRVDsGfX2yY_uS4dTQldRNDkDUmis"

# --- PANDAS DISPLAY OPTION ---
pd.set_option('display.max_rows', None)

# --- SCRIPT ---
requests.packages.urllib3.disable_warnings()

# Prepare headers with the correct Cookie format for authentication
headers = {
    'Cookie': f'mobi_web_token={API_TOKEN}'
}
print("Authentication headers prepared.")

# --- THE FIX IS HERE ---
# The URL path for a local server typically does not include the extra '/mobi' prefix.
users_url = f"{MOBI_HOST}/mobirest/users" 
print(f"Attempting to fetch user list from: {users_url}") # This will now show the correct URL

try:
    # Make the authenticated API request
    response = requests.get(users_url, headers=headers, verify=False, timeout=15)
    response.raise_for_status()
    
    users_data = response.json()
    
    print(f"\n✅ SUCCESS! Successfully retrieved {len(users_data)} user(s).")
    
    # Process and display the data
    if users_data:
        processed_users = []
        for user in users_data:
            user_info = {
                'username': user.get('http://mobi.com/ontologies/user/management#username', [{'@value': ''}])[0]['@value'],
                'firstName': user.get('http://xmlns.com/foaf/0.1/firstName', [{'@value': ''}])[0]['@value'],
                'lastName': user.get('http://xmlns.com/foaf/0.t1/lastName', [{'@value': ''}])[0]['@value'],
                'iri': user.get('@id')
            }
            processed_users.append(user_info)

        df = pd.DataFrame(processed_users)
        
        print("\nDisplaying the complete list of all users:")
        display(df)
        
        file_name = "mobi_user_list_local.csv"
        try:
            df.to_csv(file_name, index=False)
            print(f"\n✅ User list successfully exported to '{file_name}'.")
        except Exception as e:
            print(f"\n❌ FAILED to export to CSV. Error: {e}")
            
    else:
        print("No users were found.")

except requests.exceptions.HTTPError as e:
    print(f"\n❌ FAILED. The server responded with an error.")
    print(f"   Status Code: {e.response.status_code}")
    print(f"   Response Body: {e.response.text}")
    print("   Please check that your API_TOKEN is still valid.")

except requests.exceptions.RequestException as e:
    # This is the error you were getting. If it happens again, it means the URL is still wrong.
    print(f"\n❌ FAILED. A connection or decoding error occurred: {e}")
    print("   This often happens if the URL is incorrect, leading to a '404 Not Found' page.")

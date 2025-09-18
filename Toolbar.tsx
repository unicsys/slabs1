import React from 'react';
import styled from 'styled-components';

export type ToolType = 'select' | 'rectangle' | 'circle' | 'diamond' | 'connector';

interface ToolbarProps {
  selectedTool: ToolType;
  onToolSelect: (tool: ToolType) => void;
}

const ToolbarContainer = styled.div`
  width: 60px;
  background: #ffffff;
  border-right: 1px solid #e0e0e0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ToolButton = styled.button<{ isSelected: boolean }>`
  width: 44px;
  height: 44px;
  border: 1px solid ${props => props.isSelected ? '#0096ff' : '#e0e0e0'};
  border-radius: 4px;
  background: ${props => props.isSelected ? '#e6f4ff' : 'white'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.isSelected ? '#e6f4ff' : '#f5f5f5'};
    border-color: ${props => props.isSelected ? '#0096ff' : '#d0d0d0'};
  }

  &:active {
    background: ${props => props.isSelected ? '#e6f4ff' : '#e0e0e0'};
  }
`;

export const Toolbar: React.FC<ToolbarProps> = ({ selectedTool, onToolSelect }) => {
  return (
    <ToolbarContainer>
      <ToolButton 
        title="Select"
        isSelected={selectedTool === 'select'}
        onClick={() => onToolSelect('select')}
      >
        ↖
      </ToolButton>
      <ToolButton 
        title="Rectangle"
        isSelected={selectedTool === 'rectangle'}
        onClick={() => onToolSelect('rectangle')}
      >
        □
      </ToolButton>
      <ToolButton 
        title="Circle"
        isSelected={selectedTool === 'circle'}
        onClick={() => onToolSelect('circle')}
      >
        ○
      </ToolButton>
      <ToolButton 
        title="Diamond"
        isSelected={selectedTool === 'diamond'}
        onClick={() => onToolSelect('diamond')}
      >
        ◇
      </ToolButton>
      <ToolButton 
        title="Connector"
        isSelected={selectedTool === 'connector'}
        onClick={() => onToolSelect('connector')}
      >
        ↗
      </ToolButton>
    </ToolbarContainer>
  );

}; 
};

import requests
import pandas as pd
import plotly.express as px
from collections import defaultdict
from datetime import datetime

# --- CONFIGURATION ---
MOBI_HOST = "https://localhost:8443" 
API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbW9iaS5jb20vIiwic3ViIjoiYWRtaW4iLCJleHAiOjE3NTgyMTQ2NTAsInNjb3BlIjoic2VsZiAvKiJ9.Johl3HocZdCjH7kRVDsGfX2yY_uS4dTQldRNDkDUmis"

# --- SCRIPT ---

requests.packages.urllib3.disable_warnings()
headers = {'Cookie': f'mobi_web_token={API_TOKEN}'}
print("Authentication headers prepared.")

# --- Step 1: Fetch ALL activities (same as before) ---
all_activities = []
offset = 0
limit = 500

print("\nFetching user activity log...")
# (Fetching logic is the same, so it's omitted for brevity in this explanation, but it's in the final code block)
while True:
    activities_url = f"{MOBI_HOST}/mobirest/provenance-data"
    params = {'limit': limit, 'offset': offset}
    try:
        response = requests.get(activities_url, headers=headers, params=params, verify=False, timeout=30)
        response.raise_for_status()
        page_data = response.json().get('activities', [])
        if not page_data: break
        all_activities.extend(page_data)
        offset += limit
    except requests.exceptions.RequestException as e:
        print(f"❌ Failed while fetching provenance data: {e}")
        break
print(f"✅ Total activities fetched: {len(all_activities)}")

# --- Step 2: Process data ---
daily_activity_counts = defaultdict(int)

if all_activities:
    for activity in all_activities:
        timestamp_list = activity.get('http://www.w3.org/ns/prov#endedAtTime', [])
        if timestamp_list:
            activity_date = datetime.fromisoformat(timestamp_list[0]['@value']).strftime('%Y-%m-%d')
            daily_activity_counts[activity_date] += 1

    # --- Step 3: Create and Display the Improved Chart ---

    # == CHART 2: TOTAL ACTIVITY VOLUME (IMPROVED) ==
    plot_data_volume = [{'Date': date, 'TotalActivities': count} for date, count in daily_activity_counts.items()]
    df_volume = pd.DataFrame(plot_data_volume)
    
    # IMPORTANT FIX #1: Convert date to a string to make the axis categorical.
    # This treats each date as a distinct category, making the bars thick.
    df_volume['Date'] = pd.to_datetime(df_volume['Date']) # Ensure it's a datetime object first
    df_volume = df_volume.sort_values(by='Date') # Sort chronologically
    df_volume['Date'] = df_volume['Date'].astype(str) # Convert to string for plotting

    print("\n\n" + "="*50)
    print("  Chart 2: Total Number of Activities Per Day (Improved)")
    print("="*50)
    
    fig_volume = px.bar(
        df_volume, 
        x='Date', 
        y='TotalActivities', 
        title='Total Daily Activity Volume on Mobi',
        log_y=True, # Keep the log scale for visibility
        template='plotly_white', # Use a clean white background for better contrast
        color_discrete_sequence=['#1f77b4'] # Use a stronger, more vibrant blue
    )

    # IMPORTANT FIX #2: Update the trace to add an outline and set opacity.
    # This makes the bars "pop" from the background.
    fig_volume.update_traces(
        marker_line_color='rgb(8,48,107)', # A dark blue outline
        marker_line_width=1.5, 
        opacity=0.8
    )
    
    fig_volume.update_layout(xaxis_rangeslider_visible=True)
    
    fig_volume.show()

else:
    print("\nNo activity data was found to generate a chart.")

import React from 'react';
import { Group, Rect, Circle, Text, RegularPolygon } from 'react-konva';
import { Block, Point } from '../types/diagram';

interface BlockShapeProps {
  block: Block;
  isSelected: boolean;
  onDragMove: (id: string, position: Point) => void;
  onClick: () => void;
}

export const BlockShape: React.FC<BlockShapeProps> = ({
  block,
  isSelected,
  onDragMove,
  onClick,
}) => {
  const shapeProps = {
    x: 0,
    y: 0,
    width: block.size.width,
    height: block.size.height,
    fill: block.style.fill,
    stroke: isSelected ? '#0096ff' : block.style.stroke,
    strokeWidth: isSelected ? 3 : block.style.strokeWidth,
  };

  const renderShape = () => {
    switch (block.type) {
      case 'rectangle':
        return <Rect {...shapeProps} />;
      case 'circle':
        return (
          <Circle
            {...shapeProps}
            radius={Math.min(block.size.width, block.size.height) / 2}
          />
        );
      case 'diamond':
        return (
          <RegularPolygon
            {...shapeProps}
            sides={4}
            radius={Math.min(block.size.width, block.size.height) / 2}
            rotation={45}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Group
      x={block.position.x}
      y={block.position.y}
      draggable
      onDragMove={(e) => {
        onDragMove(block.id, { x: e.target.x(), y: e.target.y() });
      }}
      onClick={onClick}
    >
      {renderShape()}
      <Text
        text={block.text}
        width={block.size.width}
        height={block.size.height}
        align="center"
        verticalAlign="middle"
        fontSize={14}
      />
    </Group>
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

# --- Step 2: Process data for ALL THREE charts ---
daily_active_users = defaultdict(set)
daily_activity_counts = defaultdict(int)
activity_breakdown_data = []

if all_activities:
    for activity in all_activities:
        agent_list = activity.get('http://www.w3.org/ns/prov#wasAssociatedWith', [])
        timestamp_list = activity.get('http://www.w3.org/ns/prov#endedAtTime', [])
        
        if agent_list and timestamp_list:
            user_iri = agent_list[0]['@id']
            activity_date = datetime.fromisoformat(timestamp_list[0]['@value']).strftime('%Y-%m-%d')
            
            # Data for Chart 1: Unique Users
            daily_active_users[activity_date].add(user_iri)
            
            # Data for Chart 2: Total Activity Volume
            daily_activity_counts[activity_date] += 1
            
            # Data for Chart 3: Activity Breakdown
            # We clean up the long IRI to get a nice label like "CreateActivity"
            activity_types = activity.get('@type', [])
            for type_iri in activity_types:
                if 'mobi.com/ontologies/prov#' in type_iri:
                    clean_type = type_iri.split('#')[-1]
                    activity_breakdown_data.append({'Date': activity_date, 'ActivityType': clean_type})

    # --- Step 3: Create and Display the Charts ---

    # == CHART 1: DAILY ACTIVE USERS (your original chart) ==
    plot_data_users = [{'Date': date, 'ActiveUsers': len(users)} for date, users in daily_active_users.items()]
    df_users = pd.DataFrame(plot_data_users).sort_values(by='Date')
    fig_users = px.line(df_users, x='Date', y='ActiveUsers', title='Daily Active Users on Mobi', markers=True)
    print("\n\n" + "="*50)
    print("  Chart 1: Unique Users with Any Activity Per Day")
    print("="*50)
    fig_users.show()

    # == CHART 2: TOTAL ACTIVITY VOLUME (the "bulk") ==
    plot_data_volume = [{'Date': date, 'TotalActivities': count} for date, count in daily_activity_counts.items()]
    df_volume = pd.DataFrame(plot_data_volume).sort_values(by='Date')
    fig_volume = px.bar(df_volume, x='Date', y='TotalActivities', title='Total Activity Volume on Mobi (All Types)')
    print("\n\n" + "="*50)
    print("  Chart 2: Total Number of Activities Per Day")
    print("="*50)
    fig_volume.show()

    # == CHART 3: ACTIVITY BREAKDOWN (the most insightful chart) ==
    df_breakdown = pd.DataFrame(activity_breakdown_data)
    # Group by Date and ActivityType to get the counts for the stacked bar chart
    df_stacked = df_breakdown.groupby(['Date', 'ActivityType']).size().reset_index(name='Count')
    fig_stacked = px.bar(
        df_stacked, 
        x='Date', 
        y='Count', 
        color='ActivityType', 
        title='Breakdown of Daily Activities by Type',
        labels={"Count": "Number of Activities", "ActivityType": "Activity Type"}
    )
    print("\n\n" + "="*50)
    print("  Chart 3: Breakdown of Activities by Type Per Day")
    print("="*50)
    fig_stacked.show()

else:
    print("\nNo activity data was found to generate a chart.")

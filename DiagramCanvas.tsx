import React, { useState, useCallback, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';
import { Block, Connector, DiagramState, Point } from '../types/diagram';
import { BlockShape } from './BlockShape';
import { ConnectorLine } from './ConnectorLine';
import { v4 as uuidv4 } from 'uuid';
import { ToolType } from '../components/Toolbar';

interface DiagramCanvasProps {
  selectedTool: ToolType;
}

export const DiagramCanvas: React.FC<DiagramCanvasProps> = ({ selectedTool }) => {
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
  const [diagramState, setDiagramState] = useState<DiagramState>({
    blocks: [],
    connectors: [],
    selectedElement: null,
  });
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null);

  // Handle window resize
  useEffect(() => {
    const updateSize = () => {
      const container = document.querySelector('.konvajs-content')?.parentElement;
      if (container) {
        setStageSize({
          width: container.clientWidth,
          height: container.clientHeight,
        });
      }
    };

    window.addEventListener('resize', updateSize);
    // Initial size update
    setTimeout(updateSize, 0);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleStageClick = useCallback((e: any) => {
    // Get the click position relative to the stage
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    
    if (selectedTool === 'select') {
      if (e.target === stage) {
        setDiagramState(prev => ({ ...prev, selectedElement: null }));
      }
    } else if (['rectangle', 'circle', 'diamond'].includes(selectedTool)) {
      const newBlock: Block = {
        id: uuidv4(),
        type: selectedTool as Block['type'],
        position: {
          x: pointerPosition.x,
          y: pointerPosition.y,
        },
        size: { width: 100, height: 60 },
        text: 'New Block',
        style: {
          fill: '#ffffff',
          stroke: '#000000',
          strokeWidth: 2,
        },
      };

      setDiagramState(prev => ({
        ...prev,
        blocks: [...prev.blocks, newBlock],
        selectedElement: newBlock.id,
      }));
    }
  }, [selectedTool]);

  const handleBlockClick = useCallback((blockId: string) => {
    if (selectedTool === 'connector') {
      if (!connectingFrom) {
        setConnectingFrom(blockId);
      } else if (connectingFrom !== blockId) {
        const newConnector: Connector = {
          id: uuidv4(),
          from: {
            blockId: connectingFrom,
            point: { x: 0, y: 0 },
          },
          to: {
            blockId: blockId,
            point: { x: 0, y: 0 },
          },
          points: [],
          text: '',
          style: {
            stroke: '#000000',
            strokeWidth: 2,
          },
        };

        setDiagramState(prev => ({
          ...prev,
          connectors: [...prev.connectors, newConnector],
          selectedElement: newConnector.id,
        }));
        setConnectingFrom(null);
      }
    } else if (selectedTool === 'select') {
      setDiagramState(prev => ({
        ...prev,
        selectedElement: blockId,
      }));
    }
  }, [selectedTool, connectingFrom]);

  const handleBlockDragMove = useCallback((id: string, position: Point) => {
    setDiagramState(prev => ({
      ...prev,
      blocks: prev.blocks.map(block =>
        block.id === id ? { ...block, position } : block
      ),
    }));
  }, []);

  return (
    <Stage
      width={stageSize.width}
      height={stageSize.height}
      onClick={handleStageClick}
      style={{ cursor: selectedTool === 'select' ? 'default' : 'crosshair' }}
    >
      <Layer>
        {diagramState.blocks.map(block => (
          <BlockShape
            key={block.id}
            block={block}
            isSelected={diagramState.selectedElement === block.id}
            onDragMove={handleBlockDragMove}
            onClick={() => handleBlockClick(block.id)}
          />
        ))}
        {diagramState.connectors.map(connector => {
          const fromBlock = diagramState.blocks.find(b => b.id === connector.from.blockId);
          const toBlock = diagramState.blocks.find(b => b.id === connector.to.blockId);
          
          if (!fromBlock || !toBlock) return null;

          const points = [
            { x: fromBlock.position.x + fromBlock.size.width / 2, y: fromBlock.position.y + fromBlock.size.height / 2 },
            { x: toBlock.position.x + toBlock.size.width / 2, y: toBlock.position.y + toBlock.size.height / 2 },
          ];

          return (
            <ConnectorLine
              key={connector.id}
              connector={{ ...connector, points }}
              isSelected={diagramState.selectedElement === connector.id}
              onClick={() => setDiagramState(prev => ({ ...prev, selectedElement: connector.id }))}
            />
          );
        })}
      </Layer>
    </Stage>
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

# --- Step 2: Process data ---
# We will create a single, rich DataFrame first, which makes all aggregations easier.
processed_data = []
if all_activities:
    for activity in all_activities:
        agent_list = activity.get('http://www.w3.org/ns/prov#wasAssociatedWith', [])
        timestamp_list = activity.get('http://www.w3.org/ns/prov#endedAtTime', [])
        
        if agent_list and timestamp_list:
            user_iri = agent_list[0]['@id']
            activity_time = datetime.fromisoformat(timestamp_list[0]['@value'])
            
            # Extract the clean activity type
            activity_types = activity.get('@type', [])
            clean_type = "Unknown"
            for type_iri in activity_types:
                if 'mobi.com/ontologies/prov#' in type_iri:
                    clean_type = type_iri.split('#')[-1]
                    break # Use the first one we find
            
            processed_data.append({
                'Timestamp': activity_time,
                'User': user_iri,
                'ActivityType': clean_type
            })

    # Create the master DataFrame
    df = pd.DataFrame(processed_data)
    df['Date'] = pd.to_datetime(df['Timestamp'].dt.date)

    # --- Step 3: Create and Display the Charts ---

    # == CHART 1: DAILY ACTIVE USERS (Line Chart with Range Slider) ==
    df_users = df.groupby('Date')['User'].nunique().reset_index()
    df_users.rename(columns={'User': 'ActiveUsers'}, inplace=True)
    
    fig_users = px.line(df_users, x='Date', y='ActiveUsers', title='Daily Active Users on Mobi', markers=True)
    fig_users.update_layout(xaxis_rangeslider_visible=True) # <-- ADDED RANGE SLIDER
    print("\n\n" + "="*50)
    print("  Chart 1: Unique Users with Any Activity Per Day")
    print("="*50)
    fig_users.show()

    # == CHART 2: DAILY ACTIVITY VOLUME (Bar Chart with Log Scale & Range Slider) ==
    df_volume = df.groupby('Date').size().reset_index(name='TotalActivities')
    
    fig_volume = px.bar(
        df_volume, 
        x='Date', 
        y='TotalActivities', 
        title='Total Daily Activity Volume (Log Scale)',
        log_y=True  # <-- ADDED LOG SCALE
    )
    fig_volume.update_layout(xaxis_rangeslider_visible=True) # <-- ADDED RANGE SLIDER
    print("\n\n" + "="*50)
    print("  Chart 2: Total Number of Activities Per Day (Logarithmic Scale)")
    print("="*50)
    fig_volume.show()

    # == CHART 3: MONTHLY ACTIVITY VOLUME (Aggregated Bar Chart) ==
    df['Month'] = df['Date'].dt.to_period('M').astype(str) # Create a 'Month' column
    df_monthly_volume = df.groupby('Month').size().reset_index(name='TotalActivities')

    fig_monthly_volume = px.bar(
        df_monthly_volume,
        x='Month',
        y='TotalActivities',
        title='Total Monthly Activity Volume on Mobi'
    )
    print("\n\n" + "="*50)
    print("  Chart 3: Total Number of Activities Per Month (Aggregated)")
    print("="*50)
    fig_monthly_volume.show()

    # == CHART 4: MONTHLY ACTIVITY BREAKDOWN (Aggregated Stacked Bar Chart) ==
    df_monthly_stacked = df.groupby(['Month', 'ActivityType']).size().reset_index(name='Count')

    fig_monthly_stacked = px.bar(
        df_monthly_stacked, 
        x='Month', 
        y='Count', 
        color='ActivityType', 
        title='Breakdown of Monthly Activities by Type',
        labels={"Count": "Number of Activities", "ActivityType": "Activity Type"}
    )
    print("\n\n" + "="*50)
    print("  Chart 4: Breakdown of Activities by Type Per Month (Aggregated)")
    print("="*50)
    fig_monthly_stacked.show()

else:
    print("\nNo activity data was found to generate a chart.")

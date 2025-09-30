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
from urllib.parse import quote_plus

# --- CONFIGURATION ---
MOBI_HOST = "https://localhost:8443" 
API_TOKEN = "PASTE_YOUR_API_TOKEN_HERE"

# --- SCRIPT ---

requests.packages.urllib3.disable_warnings()
headers = {'Cookie': f'mobi_web_token={API_TOKEN}'}
print("Authentication headers prepared.")

# --- Step 1: Find the IRI of the Dataset you want to query ---
# A knowledge graph with instance data in Mobi is stored in a DatasetRecord.
# We need its unique IRI to target it with our query.

try:
    datasets_url = f"{MOBI_HOST}/mobirest/datasets"
    params = {"offset": 0, "limit": 100, "sort": "http://purl.org/dc/terms/title"}
    response = requests.get(datasets_url, headers=headers, params=params, verify=False)
    response.raise_for_status()
    
    dataset_records = response.json()
    print("\n--- Available Datasets ---")
    if not dataset_records:
        print("No datasets found. Please create a dataset in Mobi first.")
        exit()
    
    for idx, ds in enumerate(dataset_records):
        title = ds.get('http://purl.org/dc/terms/title', [{'@value': 'N/A'}])[0]['@value']
        iri = ds['@id']
        print(f"  {idx}. Title: '{title}', IRI: {iri}")
    print("--------------------------")

except requests.exceptions.RequestException as e:
    print(f"❌ Could not fetch dataset list: {e}")
    exit()

# --- Step 2: Set your Target Dataset and SPARQL Query ---

# IMPORTANT: Copy the IRI of the correct Dataset from the list above and paste it here.
TARGET_DATASET_IRI = "PASTE_THE_CORRECT_DATASET_IRI_HERE" 

# Your SPARQL query, exactly as you wrote it.
sparql_query = """
PREFIX ockms: <https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT ?instance
WHERE {
    ?instance rdf:type ockms:CircuitCardAssemblyIdentifier .
}
"""

# --- Step 3: Execute the SPARQL query against the specified dataset ---
if TARGET_DATASET_IRI == "PASTE_THE_CORRECT_DATASET_IRI_HERE":
    print("\n⚠️ Please edit the script and set the TARGET_DATASET_IRI variable before running again.")
else:
    try:
        store_type = "dataset"
        # The IRI must be URL-encoded to be safely used in a URL path
        encoded_dataset_iri = quote_plus(TARGET_DATASET_IRI)
        
        sparql_endpoint_url = f"{MOBI_HOST}/mobirest/sparql/{store_type}/{encoded_dataset_iri}"
        
        # Prepare headers to ask for a JSON response
        query_headers = headers.copy()
        query_headers['Content-Type'] = 'application/sparql-query'
        query_headers['Accept'] = 'application/json'

        print(f"\nExecuting SPARQL query against: {sparql_endpoint_url}")
        
        # Send the query in the body of a POST request
        response = requests.post(sparql_endpoint_url, headers=query_headers, data=sparql_query, verify=False, timeout=30)
        response.raise_for_status()
        
        results_json = response.json()
        
        # --- Step 4: Process and Display the Results ---
        bindings = results_json.get("results", {}).get("bindings", [])
        
        print(f"\n✅ SUCCESS! Query executed and found {len(bindings)} results.")
        
        if bindings:
            # Extract the values from the SPARQL JSON result format
            instance_list = [binding['instance']['value'] for binding in bindings]
            
            # Create a pandas DataFrame for a clean display
            df = pd.DataFrame(instance_list, columns=['instance'])
            display(df)
        else:
            print("The query ran successfully but returned no instances of 'CircuitCardAssemblyIdentifier'.")

    except requests.exceptions.HTTPError as e:
        print(f"\n❌ FAILED. The server responded with an error.")
        print(f"   Status Code: {e.response.status_code}")
        print(f"   Response Body: {e.response.text}")
        print("\n   Check that the TARGET_DATASET_IRI is correct and your API_TOKEN is valid.")
    except Exception as e:
        print(f"\n❌ An unexpected error occurred: {e}")

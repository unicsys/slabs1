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

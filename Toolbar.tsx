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
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
Option 1 - Most Concise:

No shared understanding of data across sources
Multiple data formats impossible to integrate (tables, XML)
Couldn't map or abstract data—no structure
Team didn't understand what ontology is or how to build it
Business users locked out—too technical

Option 2 - Balanced:

No common mental model for data across sources
Data integration blocked by format diversity (tables, XML)
No clear way to create mappings and abstractions
Ontology was confusing: what it is, how to build, how to apply
Business users excluded—process too abstract

Option 3 - Business Focused:

Teams speaking different languages about the same data
Can't integrate diverse formats (tables, XML, sensors)
No framework for data abstraction and mapping
"Ontology" was intimidating and unclear
Business experts couldn't participate


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


Success Story: Raptor Clone Digital Twin
From Confusion to Clarity with REO Canvas
🎯
Project Context
P&W EDX building digital twin for Turbine Exhaust Case—integrating maintenance, inspection, sensor, and operation data from multiple bases for thermal barrier coating loss prediction
🚨The Business Challenges
✕
No common way of thinking about information across data sources
✕
Difficult to onboard data from multiple sources with different formats (tables, XML)
✕
Hard to create abstractions and mappings—no clear structure
✕
Team confused about ontology: what it is, how to build it, how to apply it
✕
Business users couldn't contribute—process too technical and abstract
💡The Solution: REO Canvas
Simplified Ontology Development Framework
Business-friendly canvas with 5 clear categories aligned with BFO: Material Things, Qualities/Functions/Roles, Information Things (Descriptive, Prescriptive, Identifiers), Processes, and Time Periods. Teams map column headers like "JCN" directly into these categories—making ontology development visual and collaborative.
Visual & Intuitive Business User Friendly Structured Categorization Direct Column Mapping BFO Aligned
📈Measurable Business Impact
40%
Faster Ontology Development
5×
More Business User Participation
70-80%
Faster Verification Process
100%
Team Understanding in Minutes
🎉
The Transformation
People who were confused about ontology now clearly see how concepts are categorized and connected. Canvas concepts move directly into formal ontology—bridging business understanding and technical implementation.




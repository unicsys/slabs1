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




Hi [Manager's name],
I wanted to share something significant happening in the industry. Major players like Snowflake, Salesforce, Tableau, Mistral AI, dbt Labs, and BlackRock have just launched the Open Semantic Interchange (OSI) initiative, and they're explicitly stating what we've been working on:
"The lack of a common semantic standard is a foundational challenge for AI" and "the biggest barrier customers face when it comes to ROI from AI isn't a competitor — it's data fragmentation."
AI’s biggest bottleneck isn’t algorithms or compute, but inconsistent semantic definitions across systems.
They're highlighting how inconsistent semantic definitions break AI systems. For example, when a sales system defines "active customer" as someone who purchased in 90 days, but marketing defines it as anyone who engaged in 30 days, AI models trained on both produce unreliable results. Companies are spending weeks and millions manually reconciling these inconsistencies before AI projects can even begin.
Snowflake reported that nearly half of their new customers chose them for AI capabilities, but these investments keep failing because of inconsistent data semantics (with over 6,100 customers using its AI offerings weekly). The industry is now realizing they need to cooperate on semantic standards rather than working in silos.
This validates the importance of our work on ontologies and knowledge graphs as foundational infrastructure for reliable AI.
[Your name]




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


----------------

  Dear [HR Representative’s Name],

I hope you are doing well. I am in the process of filing my taxes before the October 15 deadline, and I urgently need your assistance with an issue related to my W2.

The W2 I received from RTX has two pages and lists two states—Connecticut (CT) and California (CA). However, I did not work in Connecticut at any time. This is causing complications with my filing, as it looks like the same W2 is showing entries for both states.

I encountered the same problem back in April when I first attempted to file, and I am concerned it has not been corrected. Since I already paid some tax when applying for the extension, it would really help if this could be resolved as soon as possible so I can complete my filing accurately and on time.

Thank you very much for your time and urgent support on this matter.

Best regards,
Shatad Purohit

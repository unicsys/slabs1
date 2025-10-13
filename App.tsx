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


The Business Problem
Building Analytics is Slow Because We Validate Data Every Single Time
🗄️
The Same Data Sources Used Across ALL Analytics
MaintDB.ENGINE_DEFECTS SAP.SUPPLIER_DATA InspectionDB.RECORDS SensorDB.TELEMETRY WorkOrderDB.MAINTENANCE
↓ ALL of these analytics need validation ↓
⚠️
Defect Analytics
📦
Supply Chain Analytics
🔄
Digital Twin
🤖
Machine Learning
📊
Statistical Models
📈
Predictive Analytics
📦
Supply Chain Analysis
Need: Analyze supplier performance & delivery times
Find data sources (SAP, procurement DB, logistics)
Ask SMEs: "What does SUPP_ID mean? Is this delivery date or ship date?"
Wait for meetings, validate each field
⏱️ Weeks of validation work
↻
⚠️
Defect Analysis
Need: Predict defect patterns from maintenance data
Find data sources (MaintDB, inspection logs, defect reports)
Ask SMEs: "What's JCN? What's WCE? What's DEFECT_DTG?"
Chase down the few people who know, wait for their time
⏱️ Same validation repeated again
↻
🚨
The Core Issue
Data analytics need data—but validating and understanding that data consumes weeks of analyst time
Analysts spend endless meetings trying to find the few people who know the data—and those SMEs don't have time. Result: Analytics don't get built.
📊What Analysts Need
→
Data from multiple sources to build analytics
→
Validation: Is this the RIGHT data?
→
Understanding: What does this column mean?
→
Finding SMEs who actually know the data
→
Weeks of meetings to get answers
⚠️The Business Consequences
✕
SAME databases validated repeatedly for DIFFERENT analytics types
✕
Weeks spent in repeated meetings chasing SMEs
✕
Analytics projects don't get built—too slow, too expensive
✕
Opportunities MISSED—we ignore data because meaning is unclear
✕
Advanced analytics impossible without data understanding
✕
Despite data being available, we can't use it effectively
💔
The Painful Reality
We have the data. We have opportunities. But without knowing what the data means, we can't build analytics—so opportunities get ignored and value is lost.


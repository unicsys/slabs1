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


Request: Local LLM for Column-Header → Concept-Map Helper (chatbot)
1) Business purpose (one-paragraph)

We want a local, offline chatbot that reads a list of database column headers (e.g., ITEM_PN, ITEM_SN, ACCEPT_DATE, ENG_ID) and turns them into a simple concept map: groups the headers into plain-English categories (thing, identifier, process, time, etc.) and proposes relationships between them (e.g., “Material Artifact has identifier ITEM_SN”). This helps analysts quickly sketch a data model before any engineering work.

Think of the “ontology canvas” as a structured concept map with a few columns for “things,” “identifiers,” “data about things,” and “events.” The bot only generates labels and simple “A relates-to B” statements—no code and no schema is written to production systems.

2) Data in scope

Inputs:

Column header names (strings) and basic types (int, double, text, date).

Optional, short human descriptions for a header (if available).

No sensitive data:

No records/values, no PII, no export-controlled tech data, no source code, no credentials.

We will provide only header names/types, which are essentially metadata.

3) Outputs produced

A concise JSON the UI renders as a concept map:

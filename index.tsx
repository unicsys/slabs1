import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>

); 

}
}

Discovery Summary – Axon & Informatica EDC

As part of my role with the MBDT PCC corporate team, I had the opportunity to work closely with Ken from the DT team, who provided invaluable insights into Informatica Axon and Enterprise Data Catalog (EDC). His guidance helped me gain both a foundational and practical understanding of these platforms, which is essential for exploring ontology integration and strengthening data governance.

Key Learnings from Ken’s Support

Axon

How data and databases are ingested and represented.

Creation and enrichment of metadata (links, descriptions, URLs, diagrams).

Business glossary concepts: how attributes and dashboards are built, and how search works.

Practical examples of glossary creation and governance workflows.

EDC (Enterprise Data Catalog)

How scanning works: ingestion of technical metadata, lineage capture, and relationship discovery.

Creating and managing terms, attaching URLs/diagrams, and importing templates.

Bulk metadata upload and export processes.

How EDC and Axon integrate through glossary-term associations and metadata linking.

Value of the Discovery

Ken’s walkthroughs and resources clarified:

How attributes, columns, and glossary terms are managed across Axon and EDC.

Where ontologies can add value: making data findable for non-experts, reducing reliance on tribal knowledge, and enabling consistency in terminology.

The path forward: integrating ontology frameworks with Axon/EDC to enable semantic search, automated governance, and improved support for advanced use cases like digital twins.

Outcome

This discovery effort gave me a clear understanding of the scope and mechanics of Axon and EDC, highlighted opportunities for ontology-driven enrichment, and provided a practical foundation for defining the next steps in our semantic data governance strategy. Ken’s expertise and continued sharing of resources were instrumental in shaping this understanding.

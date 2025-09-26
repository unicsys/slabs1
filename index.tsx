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

As part of my role in the MBDT PCC corporate team, I worked closely with Ken (DT team), who provided critical insights into the capabilities of Informatica Axon and the Enterprise Data Catalog (EDC). His guidance was instrumental in understanding how these platforms function, how data flows into them, and how metadata can be structured and governed effectively.

Key Learnings from Ken’s Guidance

Axon

How data and databases are ingested and represented.

Creating and enriching metadata through links, descriptions, URLs, and diagrams.

Building glossaries and attributes, and using dashboards for visibility.

Practical demonstrations of search and navigation capabilities.

Enterprise Data Catalog (EDC)

How EDC scans data sources and captures metadata, lineage, and relationships.

Creating terms, attaching URLs/diagrams, importing templates, and performing bulk uploads.

Exporting metadata from both Axon and EDC for reuse and integration.

Impact on Discovery

This discovery effort clarified where ontologies can add significant value:

Making data findable for non-expert users through standardized semantics.

Reducing dependency on tribal knowledge by aligning terminology across sources.

Enabling AI/ML teams to leverage structured metadata for advanced use cases such as digital twins.

Identifying integration opportunities between ontology frameworks, Axon, and EDC to enhance governance workflows.

Outcome

The sessions with Ken provided a comprehensive understanding of Axon and EDC, highlighted the scope of potential integration with ontologies, and outlined a path forward for creating a scalable, semantically enriched data governance framework at RTX.

import React from 'react';
import { Group, Line, Text } from 'react-konva';
import { Connector } from '../types/diagram';

interface ConnectorLineProps {
  connector: Connector;
  isSelected: boolean;
  onClick: () => void;
}

export const ConnectorLine: React.FC<ConnectorLineProps> = ({
  connector,
  isSelected,
  onClick,
}) => {
  const points = connector.points.flatMap(point => [point.x, point.y]);
  const midPoint = {
    x: (connector.points[Math.floor(connector.points.length / 2)].x +
      connector.points[Math.floor(connector.points.length / 2) - 1].x) / 2,
    y: (connector.points[Math.floor(connector.points.length / 2)].y +
      connector.points[Math.floor(connector.points.length / 2) - 1].y) / 2,
  };

  return (
    <Group onClick={onClick}>
      <Line
        points={points}
        stroke={isSelected ? '#0096ff' : connector.style.stroke}
        strokeWidth={isSelected ? connector.style.strokeWidth + 1 : connector.style.strokeWidth}
        tension={0.5}
        lineCap="round"
        lineJoin="round"
      />
      {connector.text && (
        <Text
          x={midPoint.x - 50}
          y={midPoint.y - 10}
          text={connector.text}
          width={100}
          align="center"
          fontSize={12}
          fill={connector.style.stroke}
        />
      )}
    </Group>
  );

}; 
};

PREFIX ockms: <https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT ?instance
WHERE {
    ?instance rdf:type ockms:CircuitCardAssemblyIdentifier .
}
  }


# From Questions to Intelligence: Our 5-Phase Ontology Development Approach

## The Challenge We're Solving

Your organization has data everywhere—maintenance records, sensor readings, part inventories, inspection reports. But when someone asks "What parts were on engine E1234 when that defect was discovered?", piecing together the answer requires hunting through multiple systems, making assumptions, and hoping you found everything.

The problem isn't lack of data. It's lack of **connected meaning**. Our 5-phase lifecycle transforms isolated data into an intelligent knowledge graph that answers these questions automatically.

## Two Paths to the Same Goal

We use both **top-down** and **bottom-up** approaches, often simultaneously:

**Top-Down (Question-Driven):** Start with real business questions that decision-makers need answered—like "What part serial numbers were installed on the engine at a given time?" Then design an ontology that can answer them.

**Bottom-Up (Data-Driven):** Start with existing databases, schemas, and columns—your legacy systems aren't going away. Map this existing data structure into the ontology framework.

The magic happens when these approaches meet in the middle, creating an ontology that's both theoretically sound and practically grounded in your real data.

## The Five Phases

### Phase 1: Discover — Understanding What Matters

**What happens:** We figure out what we're actually trying to accomplish.

**Key activities:**
- Conduct stakeholder interviews with maintenance managers, engineers, analysts
- Define domain scope (Are we modeling engines? Aircraft? The entire depot?)
- **Develop decision support questions** — the real questions people need answered
- Create initial domain vocabulary
- Profile existing data sources

**Primary deliverable:** A set of Decision Support Questions that become your north star

**Example questions:**
- "What part serial numbers were installed on the engine at a given time?"
- "When did parts get removed or swapped?"
- "What coating loss data was available at a given time?"

**Why this matters:** If you can't articulate the questions you need answered, you can't design a system to answer them. This phase ensures we're solving real problems, not building theoretical models.

---

### Phase 2: Model — Designing the Structure

**What happens:** We design the conceptual structure that will answer those questions.

**Key activities:**
- Build concept hierarchy (Engine → Engine Component → Turbine Blade)
- Map entities to data sources (Where does this information live today?)
- Define properties and relationships between concepts
- Align with the Ontology Canvas framework
- Design semantic data transformation pipelines

**Primary deliverable:** Conceptual model showing how Material Things, Qualities, Information, Processes, and Time Periods relate

**Top-down in action:** Your Decision Support Questions drive which concepts and relationships are essential

**Bottom-up in action:** Your existing database schemas reveal what data structures already exist and how they can be transformed

**Example:** To answer "What parts were on the engine at a given time?", we need:
- Material Things: Engine, Turbine Blade
- Information Things: Part Serial Number, Engine Identifier
- Processes: Installation Event, Removal Event  
- Time Periods: Installation DateTime, Removal DateTime
- Relationships: Engine *has component* Turbine Blade; Serial Number *designates* Turbine Blade

---

### Phase 3: Build & Transform — Making It Real

**What happens:** The conceptual model becomes a machine-readable ontology and data starts flowing.

**Key activities:**
- Develop formal OWL/RDF ontology (the computer-readable version)
- Implement semantic ETL pipelines (Extract-Transform-Load)
- Transform raw database data into RDF format
- Resolve entity duplications (Is "Engine E-1234" the same as "ENG1234"?)
- Infer relationships not explicitly stated in source data
- Create validation rules (SHACL) to ensure data quality

**Primary deliverable:** Working ontology with initial data loaded

**What this looks like:** 
- Your ENG_PART_LOAD table with columns ITEM_SN, ENG_ID, INIT_DTG gets transformed into semantic triples:
  - `Engine_E1234 hasComponent TurbineBlade_TB5678`
  - `SerialNumber_TB5678 designates TurbineBlade_TB5678`
  - `InstallationEvent_2024 hasPart TurbineBlade_TB5678`
  - `InstallationEvent_2024 occursAt DateTime_20240115`

---

### Phase 4: Deploy & Integrate — Putting It to Work

**What happens:** The knowledge graph goes live and starts serving users and systems.

**Key activities:**
- Set up knowledge graph platform (graph database)
- Execute semantic ETL at scale (all data, not just samples)
- Implement automated CI/CD for data updates
- Create query templates for common questions
- Integrate with existing business systems
- Train users and document how to query the system

**Primary deliverable:** Operational knowledge graph with query capabilities

**What users experience:** Instead of writing complex SQL joins across five tables, they ask: "What parts were on engine E1234 between January and March 2024?" The system understands the semantic meaning and returns accurate results.

---

### Phase 5: Evolve & Govern — Keeping It Alive

**What happens:** The knowledge graph grows and adapts as your business changes.

**Key activities:**
- Monitor ETL pipeline performance
- Process change requests (new questions, new data sources)
- Version control ontology updates
- Maintain data quality through continuous validation
- Identify and integrate new data sources
- Govern who can modify what and when

**Primary deliverable:** Governance processes and documentation ensuring long-term sustainability

**Why this matters:** Business needs change. New equipment gets added. New questions emerge. This phase ensures the knowledge graph evolves with your organization rather than becoming obsolete.

---

## It All Starts With Discovery

The entire lifecycle begins with **Phase 1: Discover** — understanding your domain and defining the purpose and scope of the knowledge graph.

The most critical activity in this phase is **developing Decision Support Questions**. These aren't abstract exercises—they're the real questions that, if answered quickly and accurately, would save time, reduce costs, or improve decisions.

We capture these in a structured template where stakeholders document:
- Who needs the answer?
- What objective does it serve?
- What exactly is being asked?

Everything else—the ontology design, the data mappings, the technology choices—flows from getting these questions right.

Discovery also includes stakeholder interviews, defining domain scope, creating initial vocabulary, and profiling data sources. But **Decision Support Questions are the north star** that guides all other discovery activities.

## The Payoff

When complete, this lifecycle delivers:
- **Speed:** Answers to complex questions in seconds instead of days
- **Accuracy:** Semantic understanding prevents misinterpretation
- **Scalability:** New questions and data sources integrate systematically
- **Intelligence:** AI and analytics work with real meaning, not just pattern matching

Your data doesn't just exist—it tells a coherent, connected story that everyone and everything in your organization can understand the same way.

---

## 🚀 Ready to Get Started?

**Phase 1: Discover** begins with capturing Decision Support Questions.

You don't need to understand ontologies or technical details. Just document the questions you need answered in your daily work—the ones that currently take hours of manual effort.

### Use the Attached Excel Template

**Decision_Support_Questions_Template.xlsx**

Three simple tabs:
- **Instructions** - Field guide and tips
- **Example Project** - See completed questions
- **Your Project** - Duplicate, rename, start capturing

### What to Fill Out

**Required fields:**
- Who needs this answered?
- Why does it matter?
- What's the question? (Be specific!)
- Priority level

**Optional fields** (skip for now):
- Current process
- Key concepts
- Data sources

### Takes 30 Minutes

Open the template → Review examples → Document your top questions → Submit

**Your questions define the scope and purpose of the knowledge graph.** The ontology design, data integration, and system capabilities all flow from understanding what you actually need to know.

### Need Help?

**Contact:** [Your Name]  
**Email:** [your.email@company.com]  

I can help you articulate questions, clarify scope, or walk through the template together.

---

**📎 Attached:** Decision_Support_Questions_Template.xlsx



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

Here’s a clean, legal-team-friendly draft you can paste into the LLM request form. I kept jargon out and explained the “ontology canvas” in plain language.

---

# Request: Local LLM for Column-Header → Concept-Map Helper (chatbot)

## 1) Business purpose (one-paragraph)

We want a **local, offline chatbot** that reads a **list of database column headers** (e.g., `ITEM_PN`, `ITEM_SN`, `ACCEPT_DATE`, `ENG_ID`) and turns them into a **simple concept map**: groups the headers into plain-English categories (thing, identifier, process, time, etc.) and proposes **relationships** between them (e.g., “*Material Artifact* **has identifier** *ITEM_SN*”). This helps analysts quickly sketch a data model before any engineering work.

> Think of the “ontology canvas” as a **structured concept map** with a few columns for “things,” “identifiers,” “data about things,” and “events.” The bot only generates labels and simple “A relates-to B” statements—no code and no schema is written to production systems.

## 2) Data in scope

* **Inputs:**

  * Column header **names** (strings) and basic **types** (`int`, `double`, `text`, `date`).
  * Optional, short human descriptions for a header (if available).
* **No sensitive data:**

  * **No records/values**, **no PII**, **no export-controlled tech data**, **no source code**, **no credentials**.
  * We will provide only header names/types, which are essentially **metadata**.

## 3) Outputs produced

* A concise **JSON** the UI renders as a concept map:

  ```json
  {
    "concepts": [
      {"name": "Material Artifact", "category": "Thing"},
      {"name": "ITEM_SN", "category": "Identifier"}
    ],
    "relations": [
      {"subject": "Material Artifact", "predicate": "designated by", "object": "ITEM_SN", "confidence": 0.86}
    ],
    "notes": ["ACCEPT_DATE categorized as Time/Date field"]
  }
  ```
* Optional **plain-English summary** explaining why each header was classified the way it was.

## 4) Processing description (how the bot works)

1. User pastes or uploads a **list of headers**.
2. Bot asks brief **clarifying questions** only about meaning of ambiguous headers (optional).
3. Bot **categorizes** each header into one of a few human-readable buckets (Thing, Identifier, Qualities, Prescriptive Data, Process, Time).
4. Bot proposes **relations** between categories (e.g., “Identifier **designates** Thing”).
5. Bot returns **JSON + short rationale**; the UI shows a **read-only concept map**.
6. User can **accept/edit** results; nothing is written to any external system.

## 5) Deployment & safeguards

* **Local/offline inference**; **no internet access** for the model runtime.
* **No training** on our data; inference-only.
* **Logging:** disabled or redacted; if needed for audit, store **only timestamps, job ids, and counts**—never header contents.
* **Access control:** tool gated behind SSO; only approved users.
* **Model weights** stored on approved company hardware; disk encryption enabled.
* **Data retention:** inputs/outputs can be deleted at session end by default.
* **Red-team prompts** included to block users from pasting prohibited content (PII/ITAR/etc.).

## 6) Model choice (from the three options)

All three are “small” instruction-tuned models that work well on a local machine. Our task is **classification + light reasoning + JSON formatting** in a **chat** flow. Recommendation:

* **Primary:** **Gemma 3 12B IT**

  * Best overall **reasoning headroom** among these choices, helpful for consistent categorization and relation suggestions.
  * Good instruction following and longer responses when explaining rationales.
* **Backup / efficiency:** **Mistral 7B Instruct v0.3**

  * Very **fast and lightweight**; good instruction following; strong JSON adherence with proper prompting.
  * Ideal if we need **lower latency** on modest hardware.
* **Tertiary / A/B check:** **Phi-4**

  * Compact with good few-shot reasoning; useful as a **tie-breaker** in an evaluation.
  * Keep as a **third model** for comparison runs.

**Plan:** start with **Gemma 3 12B IT** for quality → If latency is too high on our box, switch to **Mistral 7B Instruct v0.3**. Keep **Phi-4** for a short bake-off on a fixed test set.

## 7) Prompts & guardrails (examples)

* **System prompt (summary):**
  “You transform column header names + primitive types into a concept map with categories {Thing, Identifier, Quality, Descriptive Data, Prescriptive Data, Process, Time}. Output **valid JSON** exactly following the provided schema. Never include actual data values. If uncertain, propose multiple options with confidence scores.”

* **JSON schema enforcement:** add few-shot examples and a `“return ONLY JSON”` instruction; temperature 0.1–0.3, max tokens sized for ~1–2 pages of JSON.

## 8) Example (harmless, generic)

**Input headers:** `ITEM_PN (text), ITEM_SN (text), ACCEPT_DATE (date), MANUF_NAME (text)`
**Output (excerpt):**

```json
{
  "concepts": [
    {"name": "Material Artifact", "category": "Thing"},
    {"name": "ITEM_PN", "category": "Identifier"},
    {"name": "ITEM_SN", "category": "Identifier"},
    {"name": "ACCEPT_DATE", "category": "Time"},
    {"name": "MANUF_NAME", "category": "Descriptive Data"}
  ],
  "relations": [
    {"subject": "Material Artifact","predicate": "designated by","object": "ITEM_PN","confidence": 0.91},
    {"subject": "Material Artifact","predicate": "designated by","object": "ITEM_SN","confidence": 0.94}
  ]
}
```

## 9) Risks & mitigations

* **Hallucinated relations** → require confidence scores; user review before export.
* **Schema drift** → strict JSON schema validation in the app.
* **Sensitive data pasted by user** → input filter blocks PII/tech data; banner warning; audit.
* **Model updates** → pinned model versions; change control.

## 10) Success criteria

* ≥95% **valid-JSON** rate;
* ≥85% **correct category** assignment on a 100-header gold set;
* Analyst time to first usable concept map **< 2 minutes**.

## 11) Ask / approval

* Approve local, offline use of **Gemma 3 12B IT** (primary) with **Mistral 7B Instruct v0.3** as fallback and **Phi-4** for limited A/B evaluation.
* Approve processing of **column header names and primitive types only** (no values, no PII, no tech data).
* Allow restricted pilot (5–10 users) behind SSO; 60-day review.

---

If you want, I can also give you a one-page PDF version of this with a simple diagram showing “Headers → Categories → Relations → JSON.”

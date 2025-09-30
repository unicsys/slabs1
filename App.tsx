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

Column-by-Column Ontology Mapping with Relationships
1. FndByIPT (Found by IPT)

Information Things: IPT Identifier (Identifier section)
Context Class: IPT Team (Organizational Unit - can go in Material Things as organizational entity)
Relationship: IPT Identifier (FLSYSNAV) → designates → IPT Team AND IPT Team → discovered → Defect

2. FndByWC (Found by Workcenter)

Information Things: Workcenter Finder Identifier (Identifier section)
Context Class: Workcenter (Material Things)
Relationship: Workcenter Finder Identifier (R17M-TEA) → designates → Workcenter AND Workcenter → discovered → Defect

3. PLI (Product Line Item)

Information Things: Product Line Identifier (Identifier section)
Context Class: Product Line (Material Things or Qualities/Roles)
Relationship: PLI (015) → identifies → Product Line

4. SysID

Information Things: System Identifier (Identifier section)
Context Class: System/Subsystem (Material Things)
Relationship: System Identifier (3E0) → designates → System/Subsystem

5. EquipmentType

Information Things: Equipment Type Code (Identifier section)
Context Class: Test Equipment (Material Things)
Relationship: Equipment Type Code (CPL-920D) → classifies → Test Equipment

6. 1stLevelMaterial

Information Things: CCA Part Number (Identifier section)
Context Class: CCA Design (Material Things)
Relationship: CCA Part Number (752-6502-003) → identifies → CCA Design

7. 1stLevelSerial

Information Things: CCA Serial Number (Identifier section)
Context Class: CCA Instance (Material Things)
Relationship: CCA Serial Number (DCLP22) → designates → CCA Instance

8. 1RevisionLevel

Information Things: Revision Identifier (Identifier section)
Context Class: Design Revision (Qualities/Functions/Roles)
Relationship: Revision Identifier (B) → version_of → CCA Design

9. DefQty

Information Things: Defect Quantity (Descriptive Data section)
Context Class: Defect (Qualities)
Relationship: Defect Quantity (10) → measures → Defect

10. DefCode

Information Things: Defect Code (Identifier section)
Context Class: Defect Type (Qualities)
Relationship: Defect Code (C7) → classifies → Defect Type

11. DefCodeDescription

Information Things: Defect Description (Descriptive Data section)
Context Class: Defect Type (Qualities)
Relationship: Defect Description ("Dead component") → describes → Defect Type

12. RefDesigDescription

Information Things: Reference Designator (Identifier section)
Context Class: Component Location (Qualities/Roles)
Relationship: Reference Designator (R143) → locates → Component AND Component → mounted_on → CCA Instance

13. FailedComponent

Information Things: Component Part Number (Identifier section)
Context Class: Electronic Component (Material Things)
Relationship: Component Part Number (705-2437-414) → identifies → Electronic Component

14. Primary/SecondaryMatchedSet

Information Things: Component Role Code (Identifier section)
Context Class: Component Role (Qualities/Functions/Roles)
Relationship: Component Role Code (P) → assigns → Component Role AND Electronic Component → has_role → Component Role

15. Insp/TestFoundDefect

Information Things: Detection Method Code (Identifier section)
Context Class: Detection Process (Processes)
Relationship: Detection Method Code (T) → characterizes → Detection Process

16. LevelOfInspection/Test

Information Things: Inspection Level Code (Identifier section)
Context Class: Inspection Level (Qualities/Roles)
Relationship: Inspection Level Code (H) → defines → Inspection Level AND Detection Process → has_level → Inspection Level

17. PStp (Process Step)

Information Things: Process Step Code (Identifier section)
Context Class: Manufacturing Process Step (Processes)
Relationship: Process Step Code (P2) → identifies → Manufacturing Process Step

18. PStepCdDescription

Information Things: Process Step Description (Descriptive Data section)
Context Class: Manufacturing Process Step (Processes)
Relationship: Process Step Description ("Prelim - ATE") → describes → Manufacturing Process Step

19. CreatedOn

Information Things: Creation Date (Descriptive Data section)
Context Class: Defect Creation Event (Processes) + Time Period (Time Periods)
Relationship: Creation Date (7/1/2025) → timestamp_of → Defect Creation Event AND Defect Creation Event → occurred_during → Time Period

20. CreaBy (Created By)

Information Things: Creator Identifier (Identifier section)
Context Class: Person/System (Material Things or Organizational Unit)
Relationship: Creator Identifier (E40035968) → designates → Person/System AND Person/System → performed → Defect Creation Event

21. Plnt (Plant)

Information Things: Plant Code (Identifier section)
Context Class: Manufacturing Plant (Material Things)
Relationship: Plant Code (1002) → identifies → Manufacturing Plant

22. Material

Information Things: Material Number (Identifier section)
Context Class: CCA Design (Material Things)
Relationship: Material Number (752-6502-003) → identifies → CCA Design (redundant with 1stLevelMaterial)

23. SerialNumber

Information Things: Serial Number (Identifier section)
Context Class: CCA Instance (Material Things)
Relationship: Serial Number (DCLP22) → designates → CCA Instance (redundant with 1stLevelSerial)

24. Vendor

Information Things: Vendor Code (Identifier section)
Context Class: Vendor Organization (Material Things)
Relationship: Vendor Code → identifies → Vendor Organization

25. VndDateCode

Information Things: Vendor Date Code (Identifier section)
Context Class: Vendor Batch (Material Things) + Production Period (Time Periods)
Relationship: Vendor Date Code → identifies → Vendor Batch AND Vendor Batch → produced_during → Production Period

26. InspLot#

Information Things: Inspection Lot Number (Identifier section)
Context Class: Inspection Lot (Material Things) + Inspection Process (Processes)
Relationship: Inspection Lot Number (20021658632) → designates → Inspection Lot AND Inspection Lot → inspected_through → Inspection Process

27. D

Information Things: Additional Descriptor (Descriptive Data section)
Context Class: Defect (Qualities)
Relationship: Additional Descriptor → describes → Defect

28. FailOccur (Failure Occurrence)

Information Things: Occurrence Count (Descriptive Data section)
Context Class: Defect Event (Processes)
Relationship: Occurrence Count (6) → counts → Defect Event

29. OrderTy (Order Type)

Information Things: Order Type Code (Identifier section)
Context Class: Work Order Type (Qualities/Roles)
Relationship: Order Type Code (ZS91) → classifies → Work Order Type

30. CodeGrp (Code Group)

Information Things: Component Type Code (Identifier section)
Context Class: Component Type (Qualities/Roles)
Relationship: Component Type Code (R) → categorizes → Component Type (R=Resistor, K=Relay, etc.)

31. CausdByIPT (Caused by IPT)

Information Things: Causing IPT Identifier (Identifier section)
Context Class: IPT Team (Material Things)
Relationship: Causing IPT Identifier (NONMFG) → designates → IPT Team AND IPT Team → caused → Defect

32. CausByWC (Caused by Workcenter)

Information Things: Causing Workcenter Identifier (Identifier section)
Context Class: Workcenter (Material Things)
Relationship: Causing Workcenter Identifier (NONM-VND) → designates → Workcenter AND Workcenter → caused → Defect

33. CreatTime

Information Things: Creation Timestamp (Descriptive Data section)
Context Class: Defect Creation Event (Processes)
Relationship: Creation Timestamp (9:51:31) → precise_time_of → Defect Creation Event

34. GrpProc (Group Process)

Information Things: Process Group Code (Identifier section)
Context Class: Process Group (Processes)
Relationship: Process Group Code (PERF) → identifies → Process Group

35. NC Size

Information Things: Non-Conformance Size (Descriptive Data section)
Context Class: Defect Severity (Qualities)
Relationship: NC Size → measures → Defect Severity

36. ChangedOn

Information Things: Change Date (Descriptive Data section)
Context Class: Modification Event (Processes) + Time Period (Time Periods)
Relationship: Change Date (8/7/2025) → timestamp_of → Modification Event

37. ChangedBy

Information Things: Modifier Identifier (Identifier section)
Context Class: Person/System (Material Things)
Relationship: Modifier Identifier (CJWISHNI) → designates → Person/System AND Person/System → performed → Modification Event

38. ChngTime

Information Things: Change Timestamp (Descriptive Data section)
Context Class: Modification Event (Processes)
Relationship: Change Timestamp (23:09:56) → precise_time_of → Modification Event

39. lO (Internal Order)

Information Things: Internal Order Number (Identifier section)
Context Class: Work Order (Material Things)
Relationship: Internal Order Number (03) → identifies → Work Order

40. CauseWCD (Cause Workcenter Description)

Information Things: Cause Description (Descriptive Data section)
Context Class: Root Cause (Qualities)
Relationship: Cause Description ("Vendor") → describes → Root Cause

41. OP/Acty (Operation/Activity)

Information Things: Operation Code (Identifier section)
Context Class: Manufacturing Operation (Processes)
Relationship: Operation Code (0510) → identifies → Manufacturing Operation

42. SeqNum

Information Things: Sequence Number (Identifier section)
Context Class: Process Sequence (Processes)
Relationship: Sequence Number (7) → orders → Process Sequence

43. DefectDescription/Instruction

Information Things: Repair Instructions (Prescriptive Data section)
Context Class: Repair Process (Processes)
Relationship: Repair Instructions ("REPLACE R29, 128...") → prescribes → Repair Process

44. Oper

Information Things: Operator Identifier (Identifier section)
Context Class: Operator (Material Things/Person)
Relationship: Operator Identifier → designates → Operator (when data present)

45. RWOP (Rework Operation)

Information Things: Rework Operation Code (Identifier section)
Context Class: Rework Process (Processes)
Relationship: Rework Operation Code (506855) → identifies → Rework Process

46. CkRW (Check Rework)

Information Things: Rework Verifier ID (Identifier section)
Context Class: Inspector (Material Things/Person)
Relationship: Rework Verifier ID (CLCHAI) → designates → Inspector AND Inspector → verified → Rework Process

47. TestProcedure

Information Things: Test Procedure Number (Identifier section)
Context Class: Test Specification (Prescriptive Data moves to context)
Relationship: Test Procedure Number (683-1483-001) → references → Test Specification

48. TestPrch (Test Procedure Chapter)

Information Things: Chapter Code (Identifier section)
Context Class: Test Section (Processes)
Relationship: Chapter Code (G) → identifies → Test Section AND Test Section → part_of → Test Specification

49. TestParagraph

Information Things: Paragraph Reference (Identifier section)
Context Class: Test Step (Processes)
Relationship: Paragraph Reference → identifies → Test Step AND Test Step → part_of → Test Section

50. CompFixedProblem

Information Things: Resolution Status (Descriptive Data section)
Context Class: Resolution (Qualities)
Relationship: Resolution Status (Y/N) → indicates → Resolution AND Resolution → resolves → Defect

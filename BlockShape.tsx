# BFO-Aligned Quality Management Ontology
## Using Ontology Canvas Framework

---

## 1. MATERIAL THINGS (Continuants - Material Entities)

### Physical Objects & Organizations

#### **Person** (BFO: Material Entity > Object > Human Being)
Properties from source data:
- `TaskChangedBy`, `TaskCreatedBy`, `CompletedBy`
- `HeaderChangedBy`, `HeaderCreatedBy`
- `ItemChangedBy`, `ItemCreatedBy`

#### **Organization** (NEW - BFO: Material Entity > Object > Organization)
Should include:
- **Manufacturer** → Material entity (organization that manufactures)
- **Vendor** → Material entity (organization that supplies)
- **SalesOrganization**, `PurchOrganization` → Organizational units

#### **Material Product** (NEW - BFO: Material Entity > Object > Artifact)
Properties:
- `Material`, `MaterialDescription`
- `CustomerMaterial`
- `Batch`, `MultipleBatch`, `Zbatch`
- `SerialNumber`, `MultipleSn`, `MultipleExternalSn`
- `Assembly`
- `ItemQuantity`, `ItemUnitOfMeasure`

#### **Equipment/Component** (NEW - BFO: Material Entity > Object > Artifact)
Properties:
- `ReferenceDesignator`
- `Objectparts`

---

## 2. INFORMATION THINGS (Continuants - Generically Dependent Continuants)

### Information Artifacts & Records

#### **QualityNotificationRecord** (BFO: Generically Dependent Continuant > Information Artifact)
*Replaces: QualityNotification*

Core identification:
- `Notification` (identifier)
- `NotificationType`
- `Description`, `HeaderDescription`

Temporal metadata:
- `NotificationDate`, `NotificationTime`, `NotifTimeZone`
- `Version`, `Version2`
- `SnapshotDt`

Status & tracking:
- `Status`
- `Priority`, `PriorityType`

Textual content:
- `HeaderLongText`
- `NotificationCauseLongText`
- `NotificationItemLongText`
- `NotificationTaskLongText`

#### **QualityNotificationItem** (BFO: Generically Dependent Continuant > Information Artifact)
*Replaces: QualityNotificationItems*

Properties:
- `Item`, `ItemNumber`
- `ItemText`
- `ItemDefectiveQtyExternal`, `ItemDefectiveQtyInternal`
- `ItemMaterialDoc`, `ItemPurchasingDoc`
- `ItemCreatedAt`, `ItemChangedOn`, `ItemTimeOfChange`
- `ItemDelete`

#### **TaskRecord** (BFO: Generically Dependent Continuant > Information Artifact)
*Replaces: QualityNotificationItemTasks*

Properties:
- `Task`, `TaskNumber`
- `TaskText`
- `TaskStatus`
- `TaskCode`, `TaskCodeText`, `TaskCodeGroupText`
- `TaskCreatedAt`, `TaskCreatedOn`, `TaskChangedOn`
- `TaskCompletionTime`, `TaskTimeOfChange`, `TaskTimeZone`
- `TaskProcessor`
- `TaskVersion`
- `TaskDelete`

#### **DocumentReference** (NEW - BFO: Generically Dependent Continuant > Information Artifact)
Business documents referenced:
- `SalesOrder`, `SalesItem`
- `ProductionOrder`
- `PurchasingDocument`, `PoNumber`
- `Delivery`, `DeliveryItem`
- `MaterialDocument`, `MaterialDocYear`
- `ReferenceNumber`, `RefNotification`
- `InspectionLot`
- `WbsElement` (Work Breakdown Structure)

#### **SpecificationDocument** (NEW - BFO: Generically Dependent Continuant > Information Artifact)
Properties:
- `Specification`
- `InspCharacteristic`
- `PurchasingInfoRec`

#### **CatalogCode** (NEW - BFO: Generically Dependent Continuant > Information Artifact)
Classification codes:
- `CatalogCoding`, `CatalogTypeTasks`
- `Coding`, `CodingCode`, `CodingCodeText`, `CodingCodeGroupText`
- `CodeGroupTasks`

---

## 3. PROCESSES (Occurrents - Processes)

### Activities & Events

#### **QualityInspectionProcess** (NEW - BFO: Occurrent > Process)
The actual inspection activity that generates findings.

Related properties:
- Temporal bounds: `PlannedStartDate`, `PlannedFinish`
- Execution: `PlanNoOperations`
- Outcome leads to → DefectIdentificationEvent

#### **DefectIdentificationEvent** (NEW - BFO: Occurrent > Process)
*Replaces the concept: Defect (reinterpreted as process)*

The event/process of identifying a defect:
- `SystematicDefect` (boolean indicating type)
- `NumberOfDefects`
- Temporal: Occurs during inspection process

#### **ManufacturingProcess** (NEW - BFO: Occurrent > Process)
Properties linking to:
- `ProductionOrder`
- `WorkCenter`, `PlantForWorkCent`

#### **ChangeEvent** (NEW - BFO: Occurrent > Process)
Metadata about modifications:
- `TimeofChange`
- `HeaderChangedOn`, `ItemChangedOn`, `TaskChangedOn`

#### **CreationEvent** (NEW - BFO: Occurrent > Process)
- `HeaderCreatedAt`, `HeaderCreatedOn`
- `ItemCreatedAt`, `TaskCreatedAt`, `TaskCreatedOn`

#### **CompletionEvent** (NEW - BFO: Occurrent > Process)
- `CompletionDate`, `CompletionTime`
- `CompletionByDate` (planned)
- `TaskCompletionTime`

#### **DeliveryProcess** (NEW - BFO: Occurrent > Process)
- `DateofRetdelivery`
- `ReturnDeliveryQty`

---

## 4. TIME PERIODS (Occurrents - Temporal Regions)

#### **TemporalRegion** (BFO: Occurrent > Temporal Region)

Properties representing specific time periods:
- `NotificationDate` + `NotificationTime` → temporal instant
- `ResubmissionDate` → temporal instant
- `PurchaseOrderDate` → temporal instant
- `PlannedStartDate` → temporal instant
- `PlannedFinish` → temporal instant
- `CompletionDate` + `CompletionTime` → temporal instant
- `DateofRetdelivery` → temporal instant

Time zones:
- `NotifTimeZone`, `TaskTimeZone`

---

## 5. FUNCTIONS, ROLES, & QUALITIES

### Roles (BFO: Realizable Entity > Role)

#### **AuthorRole** (BFO: Realizable Entity > Role)
*Replaces: Author class*
- A role borne by a Person
- Realized in: creating notification records
- `Author` property → becomes relationship: Person bears AuthorRole

#### **ResponsibleRole** (NEW - BFO: Realizable Entity > Role)
- `Responsible` → Person bearing this role

#### **ProcessorRole** (NEW - BFO: Realizable Entity > Role)
- `TaskProcessor` → Person bearing this role

#### **SupervisorRole** (NEW - BFO: Realizable Entity > Role)
- `ProdnSupervisor` → Person bearing this role

#### **ControllerRole** (NEW - BFO: Realizable Entity > Role)
- `MrpController` → Person bearing this role

### Qualities (BFO: Specifically Dependent Continuant > Quality)

#### **DefectQuality** (BFO: Quality)
*The actual quality/characteristic of being defective*

Inheres in: Material Product

Properties (measurements of this quality):
- `DefectiveQtyInternal`, `DefectiveQtyExternal`
- `ItemDefectiveQtyInternal`, `ItemDefectiveQtyExternal`
- `ComplaintQuantity`
- `RefQuantity`

Sub-types:
- `DefectClass` → classification of defect quality
- `DefectCode` → code identifying defect type
- `Defectvaluation` → assessment value

#### **ProblemQuality** (BFO: Quality)
*Replaces: Problem class*

Represents problematic characteristics:
- `Problem`, `Problems`
- `ProblemCodeText`, `ProblemCodeGroupText`

#### **LocationQuality** (BFO: Quality OR Site)
*Could be interpreted as spatial region or quality*

Location-related:
- `LocationCode`, `LocationCodeGroup`
- `LocationCodeText`, `LocationCodeGroupText`

#### **CauseQuality** (BFO: Quality)
*Replaces: Cause class*

Root cause characteristics:
- `Cause`, `CauseText`

### Functions (BFO: Realizable Entity > Function)

#### **OperationalFunction** (NEW - BFO: Function)
- `Activity`
- `OperationShortText`

---

## 6. SITES & SPATIAL REGIONS (Continuants - Immaterial Entities)

#### **Site** (BFO: Immaterial Entity > Site)

Organizational/spatial locations:
- `Plant` (Plant for Material, Plant for Work Center)
- `StorageLocation`
- `WorkCenter`
- `SalesOffice`
- `DistributionChannel`
- `Division`
- `SalesGroup`

#### **ProfitCenter** (NEW - could be Site or Organization Unit)
- `ProfitCenter`
- `SalesOrderProfitCenter`
- `ProductionOrderProfitCenter`

---

## 7. RELATIONSHIPS (Object Properties) - BFO-Aligned

### Material Entity Relationships

- **Person `bears` Role** (AuthorRole, ResponsibleRole, ProcessorRole, etc.)
- **Material Product `has_quality` DefectQuality**
- **Material Product `manufactured_by` Organization** (Manufacturer)
- **Material Product `located_at` Site**

### Process Relationships

- **QualityInspectionProcess `has_participant` Person**
- **QualityInspectionProcess `has_participant` Material Product**
- **QualityInspectionProcess `occurs_at` Site**
- **DefectIdentificationEvent `part_of` QualityInspectionProcess**
- **DefectIdentificationEvent `identifies` DefectQuality**
- **Process `occupies_temporal_region` TemporalRegion**

### Information Artifact Relationships

- **QualityNotificationRecord `about` DefectQuality**
- **QualityNotificationRecord `about` Material Product**
- **QualityNotificationRecord `documents` QualityInspectionProcess**
- **QualityNotificationRecord `has_part` QualityNotificationItem**
- **QualityNotificationRecord `has_part` TaskRecord**
- **QualityNotificationRecord `created_by` Person** (bearing AuthorRole)
- **TaskRecord `assigned_to` Person** (bearing ProcessorRole)

### Quality Relationships

- **DefectQuality `inheres_in` Material Product**
- **ProblemQuality `inheres_in` Material Product OR Process**
- **CauseQuality `quality_of` Process**

---

## SUMMARY TABLE: Original to BFO Mapping

| Original Class | BFO Category | New Class/Interpretation |
|:---------------|:-------------|:------------------------|
| QualityNotification | Information Thing | QualityNotificationRecord |
| QualityNotificationItems | Information Thing | QualityNotificationItem |
| QualityNotificationItemTasks | Information Thing | TaskRecord |
| QualityNotificationHeader | Information Thing | *Merged into QualityNotificationRecord* |
| Defect | Process + Quality | DefectIdentificationEvent (process) + DefectQuality (quality) |
| Person | Material Thing | Person (Material Entity) |
| Author | Role | AuthorRole (borne by Person) |
| Problem | Quality | ProblemQuality |
| Location | Site | Site OR LocationQuality |
| Manufacturer | Material Thing | Organization |
| Cause | Quality | CauseQuality |

---

## IMPLEMENTATION NOTES

### Key BFO Principles Applied:

1. **Continuant vs Occurrent**: Separated persistent entities (materials, information) from processes/events

2. **Instance vs Universal**: Current properties become data properties of instances

3. **Dependence Relations**:
   - Qualities depend on (inhere in) their bearers
   - Roles are borne by material entities
   - Information artifacts are about material entities or processes

4. **Proper Parthood**: 
   - Notification items are parts of notifications
   - Tasks are parts of notifications

5. **Temporal Relations**: 
   - Processes occupy temporal regions
   - Creation/change events linked to temporal instants

### Next Steps:

1. Define formal OWL/RDF classes using BFO URIs
2. Create object property axioms with proper domains/ranges
3. Convert data properties to measurements of qualities where appropriate
4. Implement temporal reasoning using Allen's interval algebra
5. Add participation relations between processes and material entities

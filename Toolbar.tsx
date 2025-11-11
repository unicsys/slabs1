Of course. Your SPARQL query is designed to do exactly that: create classes and map table columns to become properties of those classes.

Here is the complete mapping in a clear table format. The "Generated Ontology Property" is the name given to the property in the new ontology, which is typically derived by removing spaces from the source column name.

### Mappings from Table Columns to Ontology Properties

This table shows which column from the source table (`Sap Qmlt Long Text Wb`) becomes a property for each specific class in the ontology.

---

#### **Class: `QualityNotification`**

| Source Column (`Sap Qmlt Long Text Wb`) | Generated Ontology Property |
| :--- | :--- |
| Purch Organization | `PurchOrganization` |
| Reference Designator | `ReferenceDesignator` |
| Reference Number | `ReferenceNumber` |
| Ref Notification | `RefNotification` |
| Ref Quantity | `RefQuantity` |
| Responsible | `Responsible` |
| Resubmission Date | `ResubmissionDate` |
| Return Delivery Qty | `ReturnDeliveryQty` |
| Sales Group | `SalesGroup` |
| Sales Item | `SalesItem` |
| Sales Office | `SalesOffice` |
| Sales Order | `SalesOrder` |
| Sales Order Profit Center | `SalesOrderProfitCenter` |
| Sales Organization | `SalesOrganization` |
| Snapshot Dt | `SnapshotDt` |
| Status | `Status` |
| Storage Location | `StorageLocation` |
| Time of Change | `TimeofChange` |
| Unit | `Unit` |
| Unit Of Measure | `UnitOfMeasure` |
| Vendor | `Vendor` |
| Version | `Version` |
| Version 2 | `Version2` |
| Wbs Element | `WbsElement` |
| Work Center | `WorkCenter` |
| Zbatch | `Zbatch` |
| Activity | `Activity` |
| Catalog Coding | `CatalogCoding` |
| Catalog Type Tasks | `CatalogTypeTasks` |
| Cause | `Cause` |
| Cause Text | `CauseText` |
| Code Group Tasks | `CodeGroupTasks` |
| Coding | `Coding` |
| Coding Code | `CodingCode` |
| Coding Code Group Text | `CodingCodeGroupText` |
| Coding Code Text | `CodingCodeText` |
| Complaint Quantity | `ComplaintQuantity` |
| Completion By Date | `CompletionByDate` |
| Completion Date | `CompletionDate` |
| Completion Time | `CompletionTime` |
| Customer Material | `CustomerMaterial` |
| Date of Retdelivery | `DateofRetdelivery` |
| Delivery | `Delivery` |
| Delivery Item | `DeliveryItem` |
| Description | `Description` |
| Distribution Channel | `DistributionChannel` |
| Division | `Division` |
| Insp Characteristic | `InspCharacteristic` |
| Inspection Lot | `InspectionLot` |
| Mrp Controller | `MrpController` |
| Multiple Batch | `MultipleBatch` |
| Multiple External Sn | `MultipleExternalSn` |
| Multiple Sn | `MultipleSn` |
| Notification | `Notification` |
| Notification Cause Long Text | `NotificationCauseLongText` |
| Notification Date | `NotificationDate` |
| Notification Item Long Text | `NotificationItemLongText` |
| Notification Task Long Text | `NotificationTaskLongText` |
| Notification Time | `NotificationTime` |
| Notification Type | `NotificationType` |
| Notif Time Zone | `NotifTimeZone` |
| Number Of Defects | `NumberOfDefects` |
| Objectparts | `Objectparts` |
| Operation Short Text | `OperationShortText` |
| Planned Finish | `PlannedFinish` |
| Planned Start Date | `PlannedStartDate` |
| Plan No Operations | `PlanNoOperations` |
| Plant For Work Cent | `PlantForWorkCent` |
| Po Number | `PoNumber` |
| Priority | `Priority` |
| Priority Type | `PriorityType` |
| Prodn Supervisor | `ProdnSupervisor` |
| Production Order | `ProductionOrder` |
| Production Order Profit Center| `ProductionOrderProfitCenter`|
| Profit Center | `ProfitCenter` |
| Purchase Order Date | `PurchaseOrderDate` |
| Purchasing Document | `PurchasingDocument` |
| Purchasing Group | `PurchasingGroup` |
| Purchasing Info Rec | `PurchasingInfoRec` |

---

#### **Class: `QualityNotificationItems`**

| Source Column (`Sap Qmlt Long Text Wb`) | Generated Ontology Property |
| :--- | :--- |
| Serial Number | `SerialNumber` |
| Specification | `Specification` |
| Assembly | `Assembly` |
| Batch | `Batch` |
| Item | `Item` |
| Item Changed On | `ItemChangedOn` |
| Item Created At | `ItemCreatedAt` |
| Item Defective Qty External | `ItemDefectiveQtyExternal` |
| Item Defective Qty Internal | `ItemDefectiveQtyInternal` |
| Item Delete | `ItemDelete` |
| Item Material Doc | `ItemMaterialDoc` |
| Item Number | `ItemNumber` |
| Item Purchasing Doc | `ItemPurchasingDoc` |
| Item Quantity | `ItemQuantity` |
| Item Text | `ItemText` |
| Item Time Of Change | `ItemTimeOfChange` |
| Item Unit Of Measure | `ItemUnitOfMeasure` |
| Material | `Material` |
| Material Description | `MaterialDescription` |
| Material Document | `MaterialDocument` |
| Material Doc Year | `MaterialDocYear` |
| Plant For Material | `PlantForMaterial` |

---

#### **Class: `QualityNotificationItemTasks`**

| Source Column (`Sap Qmlt Long Text Wb`) | Generated Ontology Property |
| :--- | :--- |
| Task | `Task` |
| Task Changed On | `TaskChangedOn` |
| Task Code | `TaskCode` |
| Task Code Group Text | `TaskCodeGroupText` |
| Task Code Text | `TaskCodeText` |
| Task Completion Time | `TaskCompletionTime` |
| Task Created At | `TaskCreatedAt` |
| Task Created On | `TaskCreatedOn` |
| Task Delete | `TaskDelete` |
| Task Number | `TaskNumber` |
| Task Processor | `TaskProcessor` |
| Task Status | `TaskStatus` |
| Task Text | `TaskText` |
| Task Time Of Change | `TaskTimeOfChange` |
| Task Time Zone | `TaskTimeZone` |
| Task Version | `TaskVersion` |

---

#### **Class: `QualityNotificationHeader`**

| Source Column (`Sap Qmlt Long Text Wb`) | Generated Ontology Property |
| :--- | :--- |
| Header Changed On | `HeaderChangedOn` |
| Header Created At | `HeaderCreatedAt` |
| Header Created On | `HeaderCreatedOn` |
| Header Delete | `HeaderDelete` |
| Header Description | `HeaderDescription` |
| Header Long Text | `HeaderLongText` |

---

#### **Class: `Defect`**

| Source Column (`Sap Qmlt Long Text Wb`) | Generated Ontology Property |
| :--- | :--- |
| Systematic Defect | `SystematicDefect` |
| Defect Class | `DefectClass` |
| Defect Code | `DefectCode` |
| Defective Qty External | `DefectiveQtyExternal` |
| Defective Qty Internal | `DefectiveQtyInternal` |
| Defectvaluation | `Defectvaluation` |

---

#### **Class: `Person`**

| Source Column (`Sap Qmlt Long Text Wb`) | Generated Ontology Property |
| :--- | :--- |
| Task Changed By | `TaskChangedBy` |
| Task Created By | `TaskCreatedBy` |
| Completed By | `CompletedBy` |
| Header Changed By | `HeaderChangedBy` |
| Header Created By | `HeaderCreatedBy` |
| Item Changed By | `ItemChangedBy` |
| Item Created By | `ItemCreatedBy` |

---

#### **Class: `Author`** (Subclass of `Person`)

| Source Column (`Sap Qmlt Long Text Wb`) | Generated Ontology Property |
| :--- | :--- |
| Author | `Author` |

---

#### **Class: `Problem`**

| Source Column (`Sap Qmlt Long Text Wb`) | Generated Ontology Property |
| :--- | :--- |
| Problem | `Problem` |
| Problem Code Group Text | `ProblemCodeGroupText` |
| Problem Code Text | `ProblemCodeText` |
| Problems | `Problems` |

---

#### **Class: `Location`**

| Source Column (`Sap Qmlt Long Text Wb`) | Generated Ontology Property |
| :--- | :--- |
| Location Code | `LocationCode` |
| Location Code Group | `LocationCodeGroup` |
| Location Code Group Text | `LocationCodeGroupText` |
| Location Code Text | `LocationCodeText` |

---

#### **Class: `Manufacturer`**

| Source Column (`Sap Qmlt Long Text Wb`) | Generated Ontology Property |
| :--- | :--- |
| Manufacturer | `Manufacturer` |

---

### Additional Manually Defined Properties (Object Properties)

Your query also creates several important **Object Properties** that are not mapped from columns but are defined to link these classes together. These are critical for building the relationships in your knowledge graph.

| Property | Domain (Connects From) | Range (Connects To) |
| :--- | :--- | :--- |
| `hasHeader` | `QualityNotification` | `QualityNotificationHeader` |
| `hasDefect` | `QualityNotificationItems` | `Defect` |
| `manufacturer` | `QualityNotificationItems` | `Manufacturer` |
| `hasProblem` | `QualityNotification` | `Problem` |
| `location` | `QualityNotification` | `Location` |
| `causedBy` | `QualityNotification` | `Cause` |
| `taskChangedBy` | `QualityNotificationItemTasks` | `Person` |
| `taskCreatedBy` | `QualityNotificationItemTasks` | `Person` |
| `authoredBy` | `QualityNotification` | `Author` |
| `completedBy` | `QualityNotification` | `Person` |
| `headerChangedBy`| `QualityNotificationHeader` | `Person` |
| `headerCreatedBy`| `QualityNotificationHeader` | `Person` |
| `itemChangedBy` | `QualityNotificationItems` | `Person` |
| `itemCreatedBy` | `QualityNotificationItems` | `Person` |

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


Based on the IOF structure you've shown, here's how QIF prescriptive classes should map:

## **QIF Prescriptive Classes Mapped to IOF Structure**

### **1. DesignSpecification**
*Product design intent and geometry*
```
DesignSpecification
├── Product
├── Part
├── Assembly
├── Component
├── DigitalModel
├── DigitalDrawing
├── PrintedDrawing
├── PhysicalModel
├── FeatureDefinition (base)
│   ├── CircleFeatureDefinition
│   ├── CylinderFeatureDefinition
│   ├── PlaneFeatureDefinition
│   ├── SphereFeatureDefinition
│   ├── ConeFeatureDefinition
│   └── [other feature geometry definitions]
└── FeatureNominal (base)
    ├── CircleFeatureNominal
    ├── CylinderFeatureNominal
    └── [other nominal geometries]
```

### **2. RequirementSpecification**
*Quality requirements and acceptance criteria*
```
RequirementSpecification
├── CharacteristicDefinition (base) - *what must be inspected*
│   ├── DiameterCharacteristicDefinition
│   ├── FlatnessCharacteristicDefinition
│   ├── CylindricityCharacteristicDefinition
│   ├── PositionCharacteristicDefinition
│   ├── ParallelismCharacteristicDefinition
│   └── [all GD&T characteristic definitions]
│
├── CharacteristicNominal (base) - *target values*
│   ├── DiameterCharacteristicNominal
│   ├── RadiusCharacteristicNominal
│   ├── LengthCharacteristicNominal
│   └── [all nominal value specifications]
│
├── CharacteristicTolerance - *acceptance ranges*
├── LinearTolerance
├── LinearToleranceDefinition
├── AngularTolerance
├── AngularToleranceDefinition
├── ToleranceDefinitions
│
├── DatumReferenceFrame - *measurement reference requirements*
├── DatumDefinition
├── DatumDefinitions
├── DatumTargetDefinitions
│
├── StandardsDefinitions
├── Standard
├── ThreadSpecification
├── LimitsAndFitsSpecification
└── MaterialModifier
```

### **3. PlanSpecification**
*Inspection and measurement plans*
```
PlanSpecification
├── Plan
├── PlanRoot
│   ├── OrderedPlanRoot
│   ├── UnorderedPlanRoot
│   ├── PartiallyOrderedPlanRoot
│   ├── OneOfPlanRoot
│   └── PickSomePlanRoot
│
├── PlanElement
├── ActionMethod (base)
│   ├── MeasureSpecifiedFeatures
│   ├── MeasureSpecifiedMeasurands
│   ├── MeasureEvaluateAll
│   ├── MeasureEvaluateSpecified
│   └── EvaluateSpecifiedCharacteristics
│
├── StatisticalStudyPlan (base)
│   ├── BiasStudyPlan
│   ├── CapabilityStudyPlan
│   ├── GageRandRStudyPlan
│   ├── LinearityStudyPlan
│   ├── StabilityStudyPlan
│   ├── FirstArticleStudyPlan
│   ├── ProductionStudyPlan
│   ├── ProcessDifferenceStudyPlan
│   └── SimpleStudyPlan
│
└── MeasureFeatureMethod (base)
    ├── CoordinateMeasureFeatureMethod
    ├── GageMeasureFeatureMethod
    ├── ManualMeasureFeatureMethod
    └── [other measurement methods]
```

### **4. DirectiveInformationContentEntity**
*Instructions and procedural directives*
```
DirectiveInformationContentEntity
├── WorkInstruction
├── DocumentFileInstruction
├── TextInstruction
├── ImageInstruction
├── VideoInstruction
└── MeasurementDirective
```

### **5. Algorithm**
*Computational and construction procedures*
```
Algorithm
├── AlgorithmDefinitions
├── Algorithm (QIF type)
│
├── ConstructionMethod (base) - *how features are derived*
│   ├── CircleConstructionMethod
│   │   ├── CircleBestFit
│   │   ├── CircleCast
│   │   ├── CircleIntersection
│   │   └── CircleProjection
│   ├── CylinderConstructionMethod
│   ├── PlaneConstructionMethod
│   └── [other construction methods]
│
├── SubstituteFeatureAlgorithm
└── SamplingMethod
```

### **6. Identifier**
*Unique identifiers and designators*
```
Identifier
├── QIFId
├── QPId
├── QPIdReference
├── CharacteristicDesignator
├── QIFReferenceType
├── QIFReferenceFullType
└── ElementReference
```

### **7. ObjectiveSpecification**
*Goals and objectives*
```
ObjectiveSpecification
├── ControlMethod
└── CorrectiveActionPlan
```

### **8. Agreement**
*Not directly represented in QIF, but could include:*
```
Agreement
└── [QIF doesn't have explicit agreement types]
```

### **9. Rules/Logic** *(Might need new IOF category)*
```
[Could be under PlanSpecification or DirectiveInformationContentEntity]
├── Rules
├── QIFRules
├── IfThenFeatureRule (base)
│   ├── IfThenCircleRule
│   ├── IfThenCylinderRule
│   ├── IfThenPlaneRule
│   └── [other conditional rules]
└── DMEDecision (Decision Making Element)
    ├── DMEDecisionClass
    ├── DMEDecisionId
    └── DMEDecisionMakeModel
```

---

## **Key Mapping Principles:**

1. **DesignSpecification** = Geometric design intent (what the part should look like)
2. **RequirementSpecification** = Quality requirements (what must be checked, tolerances)
3. **PlanSpecification** = How to inspect (measurement procedures, strategies)
4. **DirectiveInformationContentEntity** = Instructions for humans/machines
5. **Algorithm** = Computational methods (feature construction, sampling)
6. **Identifier** = Naming and reference system

Would you like me to:
1. Create OWL/Turtle code for one of these mappings?
2. Show how these prescriptive classes relate to descriptive classes (measurements)?
3. Detail a specific branch (e.g., all classes under RequirementSpecification for diameter)?

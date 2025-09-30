import React from 'react';
import { Group, Rect, Circle, Text, RegularPolygon } from 'react-konva';
import { Block, Point } from '../types/diagram';

interface BlockShapeProps {
  block: Block;
  isSelected: boolean;
  onDragMove: (id: string, position: Point) => void;
  onClick: () => void;
}

export const BlockShape: React.FC<BlockShapeProps> = ({
  block,
  isSelected,
  onDragMove,
  onClick,
}) => {
  const shapeProps = {
    x: 0,
    y: 0,
    width: block.size.width,
    height: block.size.height,
    fill: block.style.fill,
    stroke: isSelected ? '#0096ff' : block.style.stroke,
    strokeWidth: isSelected ? 3 : block.style.strokeWidth,
  };

  const renderShape = () => {
    switch (block.type) {
      case 'rectangle':
        return <Rect {...shapeProps} />;
      case 'circle':
        return (
          <Circle
            {...shapeProps}
            radius={Math.min(block.size.width, block.size.height) / 2}
          />
        );
      case 'diamond':
        return (
          <RegularPolygon
            {...shapeProps}
            sides={4}
            radius={Math.min(block.size.width, block.size.height) / 2}
            rotation={45}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Group
      x={block.position.x}
      y={block.position.y}
      draggable
      onDragMove={(e) => {
        onDragMove(block.id, { x: e.target.x(), y: e.target.y() });
      }}
      onClick={onClick}
    >
      {renderShape()}
      <Text
        text={block.text}
        width={block.size.width}
        height={block.size.height}
        align="center"
        verticalAlign="middle"
        fontSize={14}
      />
    </Group>
  );

}; 
};



<http://purl.org/dc/terms/title> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "title"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "Used for formal title of an artifact (but not individual elements such as classes or properties).";
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://purl.org/dc/terms/title>;
  <http://www.w3.org/2004/02/skos/core#definition> "name given to the resource"@en-us .

<http://www.w3.org/2000/01/rdf-schema#label> <http://www.w3.org/2000/01/rdf-schema#label>
    "label"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "The de facto use of rdfs:label is to exactly reflect (but not necessarily be exactly the same as) the local name of an element in an ontology (i.e., in OWL the 'local name' is the final segment of the IRI after the /)."@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <https://www.w3.org/2000/01/rdf-schema#>;
  <http://www.w3.org/2004/02/skos/core#definition> "instance of rdf:Property that may be used to provide a human-readable version of a resource's name"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "Example: If the IRI of a class was https://www.industrialontologies.org/ontology/core/Core/ManufacturedProduct, the rdfs:label might be 'manufactured product'"@en-us .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "usage note"@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "note that provides information about how a given notion or resource is used in the ontology's context"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#note> .

<http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://www.w3.org/2000/01/rdf-schema#label>
    "is defined by"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "This annotation is used to identify the machine readable resource that formally defines the subject resource. The object of an rdfs:isDefinedBy annotation must be a URL.";
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <https://www.w3.org/2000/01/rdf-schema#>;
  <http://www.w3.org/2004/02/skos/core#definition> "instance of rdf:Property that is used to indicate a resource defining the subject resource"@en-us .

<http://www.w3.org/2004/02/skos/core#definition> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "definition"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://www.w3.org/2004/02/skos/core>;
  <http://www.w3.org/2004/02/skos/core#definition> "statement or formal explanation of the meaning of a concept"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#note> .

<http://purl.org/dc/terms/description> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "description"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "This annotation is used to describe an artifact such as a vocabulary, ontology, or ontology module.";
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://purl.org/dc/terms/description>;
  <http://www.w3.org/2004/02/skos/core#definition> "account of the resource"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#note> .

<http://www.w3.org/2004/02/skos/core#note> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "note"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://www.w3.org/2004/02/skos/core>;
  <http://www.w3.org/2004/02/skos/core#definition> "general note, for any purpose"@en-us .

<http://purl.org/dc/terms/issued> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "issued"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "This annotation is used to describe an artifact such as a vocabulary, ontology, or ontology module.";
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://purl.org/dc/terms/issued>;
  <http://www.w3.org/2004/02/skos/core#definition> "date of formal issuance of the resource"@en-us .

<http://purl.org/dc/terms/modified> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "modified"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://purl.org/dc/terms/modified>;
  <http://www.w3.org/2004/02/skos/core#definition> "date on which the resource was changed"@en-us .

<http://www.w3.org/2000/01/rdf-schema#comment> <http://www.w3.org/2000/01/rdf-schema#label>
    "comment"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    """Use of this annotation is deprecated in IOF.

This annotation MUST NOT be used in IOF ontologies. IOF authors SHOULD use explanatoryNote, usageNote, or scopeNote when additional information about the resource is needed. skos:note may be used directly in a case where none of the other annotation properties enumerated apply."""@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <https://www.w3.org/2000/01/rdf-schema#>;
  <http://www.w3.org/2004/02/skos/core#definition> "instance of rdf:Property that may be used to provide a human-readable description of a resource"@en-us .

<http://www.w3.org/2004/02/skos/core#example> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "example"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    """Use of this annotation is optional, but recommended if it will help a user understand the intended interpretation(s).
- This annotation should use at most twice with/on a notion.
- Additional examples or more elaborate examples should be placed in the External Documentation (using rdfs:seeAlso)."""@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://www.w3.org/2004/02/skos/core>;
  <http://www.w3.org/2004/02/skos/core#definition> "example of the use of a concept"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#note> .

<http://purl.org/dc/elements/1.1/contributor> a <http://www.w3.org/2002/07/owl#AnnotationProperty> .

<http://purl.org/dc/elements/1.1/license> a <http://www.w3.org/2002/07/owl#AnnotationProperty> .

<http://purl.org/dc/terms/abstract> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "abstract"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "This annotation is used to describe an artifact such as a vocabulary, ontology, or ontology module."@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://purl.org/dc/terms/abstract>;
  <http://www.w3.org/2004/02/skos/core#definition> "summary of the resource"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.org/dc/terms/description> .

<http://purl.org/dc/terms/contributor> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "contributor"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://purl.org/dc/terms/contributor>;
  <http://www.w3.org/2004/02/skos/core#definition> "entity responsible for making contributions to the resource"@en-us .

<http://purl.org/dc/terms/creator> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "creator"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://purl.org/dc/terms/creator>;
  <http://www.w3.org/2004/02/skos/core#definition> "entity responsible for making the resource"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.org/dc/terms/contributor> .

<http://purl.org/dc/terms/license> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "license"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://purl.org/dc/terms/license>;
  <http://www.w3.org/2004/02/skos/core#definition> "legal document giving official permission to do something with the resource"@en-us .

<http://purl.org/dc/terms/publisher> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "publisher"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "Used to document the primary agent (organization or person) responsible for the resource. This will be \"Industrial Ontology Foundry\" for IOF artifacts.";
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://purl.org/dc/terms/publisher>;
  <http://www.w3.org/2004/02/skos/core#definition> "entity responsible for making the resource available"@en-us .

<http://purl.org/dc/terms/references> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "references"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://purl.org/dc/terms/references>;
  <http://www.w3.org/2004/02/skos/core#definition> "related resource that is referenced, cited, or otherwise pointed to by the described resource"@en-us .

<http://www.w3.org/2004/02/skos/core#changeNote> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "change note"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://www.w3.org/2004/02/skos/core>;
  <http://www.w3.org/2004/02/skos/core#definition> "note about a modification to a concept"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#note> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/acronym>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "acronym"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    """Use this annotation when there is a commonly accepted acronym.

HOWEVER: While acronyms and other abbreviations may be provided as annotations to elements in an IOF ontology, they must NOT BE USED as part of identifiers or labels, except where they have become the primary designator for a notion where the full 'name' is no longer commonly known or recognized. (e.g. LASER: Light Amplification by Stimulated Emission of Radiation; RADAR: RAdio Detection And Ranging; MODEM: Modulator-DEModulator; SCUBA: Self-Contained Underwater Breathing Apparatus; etc),"""@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "an abbreviation usually formed from the initial components of a longer name or phrase"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/abbreviation> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/copyright>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "copyright"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "This annotation is to be used for an entire ontology and not individual elements."@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "exclusive legal right, given to an originator or an assignee to print, publish, perform, film, or record literary, artistic, or musical material, and to authorize others to do the same"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.org/dc/terms/rights> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "maturity"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "Any value for maturity MUST be an instance of MaturityLevel. All IOF ontologies MUST include exactly one maturity annotation. IOF constructs may include a maturity annotation."@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "annotation property used to indicate the development status of a resource"@en-us .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>
  a <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/MaturityLevel>,
    <http://www.w3.org/2002/07/owl#NamedIndividual>;
  <http://www.w3.org/2000/01/rdf-schema#label> "provisional"@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "construct or ontology development state in which content is subject to change and may change considerably"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "IOF users should be aware that the resource is not dependable, but can be used for reference and for further work."@en-us .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Released>
  a <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/MaturityLevel>,
    <http://www.w3.org/2002/07/owl#NamedIndividual>;
  <http://www.w3.org/2000/01/rdf-schema#label> "released"@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "construct or ontology development state in which the resource is stable, usable, and has been made available to external users"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "Release notes will be provided for any changes concerning released content, and any revisions will be backward compatible with the prior version to the degree possible."@en-us .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/abbreviation>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "abbreviation"@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "synonym that is an alternate short label for the resource"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#altLabel> .

<http://purl.org/dc/terms/rights> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "rights"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://purl.org/dc/terms/rights>;
  <http://www.w3.org/2004/02/skos/core#definition> "information about rights held in and over the resource"@en-us .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/MaturityLevel>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "maturity level"@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "classifier used to specify the state of a resource in its development process"@en-us .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "explanatory note"@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "note that provides additional explanatory information about a given notion or resource"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#note> .

<http://purl.org/dc/elements/1.1/identifier> a <http://www.w3.org/2002/07/owl#AnnotationProperty> .

<http://purl.org/dc/terms/source> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "source"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://purl.org/dc/terms/source>;
  <http://www.w3.org/2004/02/skos/core#definition> "related resource from which the described resource is derived"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """The intent is to provide a user with a reference as to how the thing being annotated was derived or arrived at. 
 - The source can be a URL to a standard, common dictionary (e.g. Oxford), or similar reference. Or it can be a short description of where the entity being annotated was derived from.
 - The 'Source' annotation would most likely be used as an annotation on an annotation. For instance annotating a Natural Language definition annotation."""@en-us .

<http://www.w3.org/2000/01/rdf-schema#seeAlso> <http://www.w3.org/2000/01/rdf-schema#label>
    "see also"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    """The information provided via annotations in an ontology should be concise and to the point.
 - Additional or extended explanations, history, decisions, rationale, etc. can be placed in an ontology's External Documentation. 
 - The External Documentation need not be elaborate. If using Github to publish an ontology is could be part of the Read.Me element. Or it could be a single document.
 - The object of an rdfs:seeAlso annotation must be a URL (e.g. the reference document or GitHub site of the ontology)."""@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <https://www.w3.org/2000/01/rdf-schema#>;
  <http://www.w3.org/2004/02/skos/core#definition> "instance of rdf:Property that is used to indicate a resource that might provide additional information about the subject resource"@en-us .

<http://www.w3.org/2004/02/skos/core#altLabel> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "alternative label"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://www.w3.org/2004/02/skos/core>;
  <http://www.w3.org/2004/02/skos/core#definition> "alternative lexical label for a resource"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2000/01/rdf-schema#label> .

<http://www.w3.org/2004/02/skos/core#editorialNote> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "editorial note"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://www.w3.org/2004/02/skos/core>;
  <http://www.w3.org/2004/02/skos/core#definition> "note for an editor, translator, or maintainer of the vocabulary"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#note> .

<http://www.w3.org/2004/02/skos/core#prefLabel> a <http://www.w3.org/2002/07/owl#AnnotationProperty> .

<http://www.w3.org/2004/02/skos/core#scopeNote> a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "scope note"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "Use of this annotation is optional, but recommended if it will help a user understand the scope and/or context for usage of the concept."@en-us;
  <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://www.w3.org/2004/02/skos/core>;
  <http://www.w3.org/2004/02/skos/core#definition> "note that helps to clarify the meaning and/or the use of a concept"@en-us .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "adapted from"@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "source for the resource that was modified to create the subject resource"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.org/dc/terms/source> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "counter example";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    """Use of this annotation is optional, but recommended if it will help a user understand the intended interpretation(s).
- This annotation should use at most twice with/on a notion.
- Additional examples or more elaborate examples should be placed in the External Documentation (using rdfs:seeAlso).""";
  <http://www.w3.org/2004/02/skos/core#definition> "example that refutes or disproves a concept in some scenario and is intended to demonstrate how the concept might be misused";
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#note> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/directSource>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "direct source"@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "definitive source of the subject resource"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.org/dc/terms/source> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/elucidation>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "elucidation"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "This annotation is no longer used. The isPrimitive annotation is now set to true to indicate a primitive class when necessary and sufficient conditions can not be provided."@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#definition>;
  <http://www.w3.org/2004/02/skos/core#example> "'Agent' is a subclass of the BFO class 'material entity', which in turn is a subclass of the BFO class 'independent continuant', which in turn is a subclass of the BFO class 'continuant'. So the position of 'Agent' is 'material entity ← independent continuant ← continuant'."@en-us;
  <http://www.w3.org/2002/07/owl#deprecated> "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/excerptedFrom>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "excerpted from"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "This annotation is to be used when an element from a non-IOF ontology is used in an IOF ontology (and the source ontology is not imported in its entirety)."@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "source of a resource that was imported unmodified from an external ontology";
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.org/dc/terms/source> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "first-order logic axiom"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "First-order logic axioms MAY be provided if the term is primitive ('is primitive' is true ) or non-primitive. A construct MAY include more than one first-order logic axiom annotation."@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "logic axiom annotation written in first order logic"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/logicAxiom> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/logicAxiom>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "logic axiom"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "A first order logic axiom expression and a semi-formal natural language axiom expression should be added as Property values for each logic axiom annotation using 1 of each of the corresponding logic axiom annotation subproperties."@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "logical statements constraining the interpretation of the notion represented by the construct that do not provide necessary and sufficient conditions"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#note>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "This annotation property is an abstraction of the more specialized logic axiom annotations used in IOF. However, this annotation property can also be used to group together the logic axiom annotation values of different forms (such as FOL and natural language) that express the same meaning for a particular construct."@en-us .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "first order logic definition"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    """The First Order Logic Definition annotation is comprised of the (complete) necessary and sufficient conditions.
 - This annotation is Required for each non-primitive (aka non-axiomatic) class (i.e. unary relation) of a published IOF OWL ontology. This is the most authoritative and comprehensive definition of an IOF element. 
 - IOF Common Logic ontologies do not require this annotation, but if included it must be logically equivalent to the Common Logic definition.
 - A primitive (aka axiomatic) term will not have a First Order Logic definition in either an OWL or Common Logic IOF ontology.
 - There should be at most one First Order Logic definition.
 - The specific symbols to be used for existential and universal quantification along with those for conjunction, disjunction, negation, conditional (i.e. if-then), and equivalence will be those commonly used in the mathematical formulas and statement.
 - Conjunction - ∧; Disjunction - ∨; Negation - ¬; Existential Quantification - ∃; Universal Quantification - ∀; Conditional - →; Equivalence - ↔; Left/Right Parentheses - (,); Left/Right Brackets - {,}."""@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "logic definition that expresses the axioms of a class or an object property in first order logic";
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/logicDefinition>;
  <http://www.w3.org/2004/02/skos/core#example> """An example of a First Order Logic definition for 'Product' might be (again bearing in mind the natural language terms appearing should be regarded as symbols in the IOF signature):
 - Continuant(x) ∧ ¬(SpecificallyDependentContinuant(x) ∨ Person(x) ∨ Organization(x)) ∧ ∃r (ProductRole(r) ∧ hasRole(x, r))"""@en-us .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/logicDefinition>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "logic definition"@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "definition in the form of a logical expression"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#definition> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is primitive"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "'is primitive' must be present if the term does not have necessary and sufficient conditions and the value of the annotation must be set to true. When 'is primitive' is set to true, a value for a 'primitive rationale' annotation must also be provided."@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "boolean flag indicating that necessary and sufficient conditions are not provided"@en-us .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maintainer>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "maintainer"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "This annotation applies to an entire IOF ontology (i.e. the file) and not to individual elements."@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "entity responsible for maintaining the resource";
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.org/dc/terms/contributor> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "natural language definition"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    """This annotation is Required for each non-primitive or non-axiomatic class of an IOF (OWL or Common Logic) ontology. 
 - It is optional for primitive (aka axiomatic) classes since such the Elucidation annotation is required and will satisfy the role of a natural language definition.
 - It is optional, but recommended, for relations when the intent of a relation may be misunderstood.
 - There should be at most one.
 - This natural language definition should be subject matter expert friendly and consistent with any formal definition or elucidation.
 - Natural language definitions should use class and relation names with following caveats:
 a) Relations – For those relations whose label (i.e. local identifier) consist of multiple terms hyphenate the terms of the label: e.g. 'hasPlan' would be written as 'has-plan'
 b) Classes – For classes whose label has multiple distinct terms, e.g, ManufacturingOperationSpecification, separate the terms but bound them with apostrophe marks: 'Manufacturing Operation Specification'."""@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "definition written in plain text for human understanding"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#definition> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "primitive rationale"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "When 'is primitive' is set to true, a value for 'primitive rationale' must be provided. The rationale should indicate what is missing if additional work is required to define necessary and sufficient conditions."@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "reason why necessary and sufficient conditions could not be provided"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#note> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/replacedBy>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "replaced by"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "The value of an iof-av:replacedBy annotation must be the IRI which replaces the target construct."@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "reference to the IRI of the target of a deprecated construct"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2000/01/rdf-schema#seeAlso> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "semi-formal natural language axiom"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "Semi-formal natural language axioms MAY be provided if the term is primitive (is primitive is true). A construct MAY include more than one semi-formal natural language axiom annotation."@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "logic axiom expressed in natural language"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/logicAxiom> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "semi-formal natural language definition"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    """This annotation is required if an element in an IOF OWL ontology has a First Order Logic definition or in a IOF Common Logic (where the element is defined using Common Logic).
 - The intent of this annotation to provide a transition or bridge from the First Order Logic definition of a notion to the natural language definition. This definition is intended to help a user understand the intended interpretation of the notion.
 - As example using the First Order Logic definition of 'Product' above, a semi-formal translation of that might be: 
 - Product =def. Continuant that is not a Person and not an Organization and not a Specifically Dependent Continuant and there is a Product Role that the thing has or bears."""@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "logic definition that expresses a first order logic definition or common logic definition in natural language";
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/logicDefinition> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/subjectMatterExpertExplanation>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "subject matter expert explanation";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    """Usage of this annotation is optional but is recommended in cases where:
- the natural language definition or elucidation rely heavily on the terms defined in the ontology
- there exists an explanation of the term that is more familiar to SMEs that does not coincide with the definition present in the ontology""";
  <http://www.w3.org/2004/02/skos/core#definition> "definition of the term expressed in natural language that has the minimal usage of ontological terms and is intended to be a self-standing explanation";
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#definition> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/symbol>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "symbol"@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "abbreviation that is a design, mark, or charaters(s) used conventionally to represent something, such as currency, quantity, or variable in an expression"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/abbreviation>;
  <http://www.w3.org/2004/02/skos/core#example> """Chemical Symbols: H, O, Mg
Units of Measure: Km, Kg, G"""@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://spec.edmcouncil.org/fibo/ontology/FND/Utilities/AnnotationVocabulary/"^^<http://www.w3.org/2001/XMLSchema#anyURI> .

<https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
  a <http://www.w3.org/2002/07/owl#AnnotationProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "synonym"@en-us;
  <http://www.w3.org/2004/02/skos/core#definition> "alternative label (designation) used for the resource in some community"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2004/02/skos/core#altLabel> .

<http://purl.obolibrary.org/obo/BFO_0000054> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has realization"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has realization c =Def c realizes b"@en;
  <http://www.w3.org/2004/02/skos/core#example> "As for realizes"@en;
  <http://purl.org/dc/elements/1.1/identifier> "206-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has realization"@en;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "realized in"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000055>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000017>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000015> .

<http://purl.obolibrary.org/obo/BFO_0000055> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "realizes"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) b realizes c means: b is a process & c is a realizable entity that inheres in d & for all t, if b has participant d at t then c exists at t & the type instantiated by b is correlated with the type instantiated by c"@en;
  <http://www.w3.org/2004/02/skos/core#example> "A disposition to go bald is realized in a balding process; a role of student is realized in studying processes; the pumping function of a heart is realized in processes of pumping."@en;
  <http://purl.org/dc/elements/1.1/identifier> "059-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "realizes"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000017> .

<http://purl.obolibrary.org/obo/BFO_0000017> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "realizable entity"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) b is a realizable entity means: b is a specifically dependent continuant that inheres in some independent continuant which is not a spatial region and is of a type some instances of which are realized in processes of a correlated type"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The role of being a doctor, the role of this boundary to delineate where Utah and Colorado meet, the function of your reproductive organs, the disposition of your blood to coagulate, the disposition of this piece of metal to conduct electricity."@en;
  <http://purl.org/dc/elements/1.1/identifier> "058-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "realizable entity"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/2002/07/owl#disjointWith> <http://purl.obolibrary.org/obo/BFO_0000019> .

<http://purl.obolibrary.org/obo/BFO_0000015> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "process"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) p is a process means p is an occurrent that has some temporal proper part and for some time t, p has some material entity as participant at t"@en;
  <http://www.w3.org/2004/02/skos/core#example> "An act of selling, the life of an organism, a process of sleeping, a process of cell-division, a beating of the heart, a process of meiosis, the taxiing of an aircraft, the programming of a computer."@en;
  <http://purl.org/dc/elements/1.1/identifier> "083-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "process"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000003>,
    _:a9bbd3a5197f4d479f29d036f159f0af298, _:a9bbd3a5197f4d479f29d036f159f0af302, _:a9bbd3a5197f4d479f29d036f159f0af303 .

<http://purl.obolibrary.org/obo/BFO_0000020> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "specifically dependent continuant"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b is a specifically dependent continuant =Def b is a continuant & there is some independent continuant c which is not a spatial region & which is such that b s-depends on c"@en;
  <http://www.w3.org/2004/02/skos/core#example> "(with one bearer) The mass of this tomato, the pink colour of a medium rare piece of grilled filet mignon at its centre, the smell of this portion of mozzarella, the disposition of this fish to decay, the role of being a doctor, the function of this heart: to pump blood, the shape of this hole; (with multiple bearers:) John's love for Mary, the ownership relation between John and this statue, the relation of authority between John and his subordinates."@en;
  <http://purl.org/dc/elements/1.1/identifier> "050-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "specifically dependent continuant"@en;
  <http://www.w3.org/2004/02/skos/core#scopeNote> "On the multiple bearers case, see relational quality."@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000002> .

<http://purl.obolibrary.org/obo/BFO_0000019> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "quality"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) a quality is a specifically dependent continuant that, in contrast to roles and dispositions, does not require any further process in order to be realized"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The colour of a tomato, the ambient temperature of this portion of air, the length of the circumference of your waist, the shape of your nose, the shape of your nostril, the mass of this piece of gold."@en;
  <http://purl.org/dc/elements/1.1/identifier> "055-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "quality"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000020> .

<http://purl.obolibrary.org/obo/BFO_0000003> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "occurrent"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) An occurrent is an entity that unfolds itself in time or it is the start or end of such an entity or it is a temporal or spatiotemporal region"@en;
  <http://www.w3.org/2004/02/skos/core#example> "As for process, history, process boundary, spatiotemporal region, zero-dimensional temporal region, one-dimensional temporal region, temporal interval, temporal instant."@en;
  <http://purl.org/dc/elements/1.1/identifier> "077-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "occurrent"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000001> .

<http://purl.obolibrary.org/obo/BFO_0000056> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "participates in at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b participates in p at some time =Def for some time t (p has participant b at t)"@en;
  <http://purl.org/dc/elements/1.1/identifier> "250-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "participates in at some time"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af16;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000015> .

<http://purl.obolibrary.org/obo/BFO_0000057> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has participant at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "p has participant c at some time =Def for some time t (p is a process, c is a continuant, and c participates in p some way at t)"@en;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "the IOF has decided to include transitive participation as an additional axiom of 'has participant at some time' which is reflected in the property chain associated with this property. That is, if A has an 'occurent part' B which 'has participant at some time' C then A 'has participant at some time' C.";
  <http://purl.org/dc/elements/1.1/identifier> "248-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has participant at some time"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af24;
  <http://www.w3.org/2002/07/owl#propertyChainAxiom> _:a9bbd3a5197f4d479f29d036f159f0af32 .

<http://purl.obolibrary.org/obo/BFO_0000002> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "continuant"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A continuant is an entity that persists, endures, or continues to exist through time while maintaining its identity"@en;
  <http://www.w3.org/2004/02/skos/core#example> "A human being, a tennis ball, a cave, a region of space, someone's temperature."@en;
  <http://purl.org/dc/elements/1.1/identifier> "008-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "continuant"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000001>,
    _:a9bbd3a5197f4d479f29d036f159f0af286;
  <http://www.w3.org/2002/07/owl#disjointWith> <http://purl.obolibrary.org/obo/BFO_0000003> .

<http://purl.obolibrary.org/obo/BFO_0000031> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "generically dependent continuant"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) a generically dependent continuant is an entity that exists in virtue of the fact that there is at least one of what may be multiple copies; it is the content or the pattern that the multiple copies share"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The pdf file on your laptop, the pdf file that is a copy thereof on my laptop; the sequence of this protein molecule; the sequence that is a copy thereof in that protein molecule; the content that is shared by a string of dots and dashes written on a page and the transmitted Morse code signal; the content of a sentence; an engineering blueprint."@en;
  <http://purl.org/dc/elements/1.1/identifier> "074-BFO";
  <http://www.w3.org/2004/02/skos/core#altLabel> "g-dependent continuant"@en;
  <http://www.w3.org/2004/02/skos/core#prefLabel> "generically dependent continuant"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000002> .

<http://purl.obolibrary.org/obo/BFO_0000004> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "independent continuant"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b is an independent continuant =Def b is a continuant which is such that there is no c such that b s-depends on c and no c such that b g-depends on c"@en;
  <http://www.w3.org/2004/02/skos/core#example> "An atom, a molecule, an organism, a heart, a chair, the bottom right portion of a human torso, a leg; the interior of your mouth; a spatial region; an orchestra."@en;
  <http://purl.org/dc/elements/1.1/identifier> "017-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "independent continuant"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000002>,
    _:a9bbd3a5197f4d479f29d036f159f0af287 .

<http://purl.obolibrary.org/obo/BFO_0000006> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "spatial region"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A spatial region is a continuant entity that is a continuant part of the spatial projection of a portion of spacetime at a given time"@en;
  <http://www.w3.org/2004/02/skos/core#example> "As for zero-dimensional spatial region, one-dimensional spatial region, two-dimensional spatial region, three-dimensional spatial region."@en;
  <http://purl.org/dc/elements/1.1/identifier> "035-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "spatial region"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000141>,
    _:a9bbd3a5197f4d479f29d036f159f0af288 .

<http://purl.obolibrary.org/obo/BFO_0000141> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "immaterial entity"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "a is an immaterial entity =Def a is an independent continuant which is such that there is no time t when it has a material entity as continuant part at t"@en;
  <http://www.w3.org/2004/02/skos/core#example> "As for fiat point, fiat line, fiat surface, site."@en;
  <http://purl.org/dc/elements/1.1/identifier> "028-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "immaterial entity"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000004> .

<http://purl.obolibrary.org/obo/BFO_0000117> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has occurrent part"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) b has occurrent part c means: c is a part of b & b and c are occurrents"@en;
  <http://www.w3.org/2004/02/skos/core#example> "Mary's life has occurrent part Mary's 5th birthday."@en;
  <http://purl.org/dc/elements/1.1/identifier> "202-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has occurrent part"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000132>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000003>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000003> .

<http://purl.obolibrary.org/obo/BFO_0000132> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "occurrent part of"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) b occurrent part of c =Def c has occurrent part b"@en;
  <http://www.w3.org/2004/02/skos/core#example> "Mary's 5th birthday is an occurrent part of Mary's life; the first set of the tennis match is an occurrent part of the tennis match."@en;
  <http://purl.org/dc/elements/1.1/identifier> "003-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "occurrent part of"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000003>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000003> .

<http://purl.obolibrary.org/obo/BFO_0000058> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is concretized by at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "a g-dependent continuant c is concretized at some time by an s-dependent continuant or process b =Def for some time t, b concretizes c at t)"@en;
  <http://purl.org/dc/elements/1.1/identifier> "258-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "is concretized by at some time"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000059>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000031>;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af34 .

<http://purl.obolibrary.org/obo/BFO_0000059> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "concretizes at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "an s-dependent continuant b concretizes a g-dependent continuant c at some time =Def for some time t (c is the pattern or content which b shares at t with actual or potential copies)"@en;
  <http://purl.org/dc/elements/1.1/identifier> "256-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "concretizes at some time"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af37;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000031> .

<http://purl.obolibrary.org/obo/BFO_0000062> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "preceded by"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b preceded by c =Def b precedes c"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The temporal region occupied by the second half of the match is preceded by the temporal region occupied by the first half of the match."@en;
  <http://purl.org/dc/elements/1.1/identifier> "213-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "preceded by"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000063>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000003>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000003> .

<http://purl.obolibrary.org/obo/BFO_0000063> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "precedes"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) If o, o' are occurrents and t is the temporal extent of o and t' is the temporal extent of o' then o precedes o' means: either last instant of o is before first instant of o'  or last instant of o = first instant of o' and neither o nor o' are temporal instants"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The temporal region occupied by Mary's birth precedes the temporal region occupied by Mary's death. NOTE 1: Each temporal region is its own temporal extent. The temporal extent of a spatiotemporal region is the temporal region it temporally projects onto. The temporal extent of a process or process boundary that occupies temporal region t is t. NOTE 2: Precedes defines a strict partial order on occurrents."@en;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "while the scope of BFO: precedes is occurrent, for the purposes of formalization of Allen interval algebra we have added the FOL elaborations for 'time instant' 'time interval', 'process boundary' and 'process'. For the case of other occurrents the formalization already provided by BFO (https://github.com/BFO-ontology/BFO-2020/tree/master/21838-2/pdf) should be followed."@en-us;
  <http://purl.org/dc/elements/1.1/identifier> "270-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "precedes"@en;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: precedes(i,j) ∧ process(i) ∧ process(j) → ∃i1∃j1 (TemporalInterval(i1)∧TemporalInterval(j1)∧occupiesTemporalRegion(i,i1)∧occupiesTemporalRegion(j,j1) ∧ precedes(i1,j1))",
    "LA2: precedes(i,j) ∧ ProcessBoundary(i) ∧ ProcessBoundary(j) → ∃i1∃j1 (TemporalInstant(i1)∧TemporalInstant(j1) ∧ occupiesTemporalRegion(i,i1) ∧ occupiesTemporalRegion(j,j1) ∧ precedes(i1,j1))",
    "LA3: precedes(i,j) ∧TemporalInstant(i) ∧TemporalInterval(j) → ∃j1(hasFirstInstant(j,j1)∧ precedes(i,j1))",
    "LA4: precedes(i,j) ∧ TemporalInterval(i) ∧ TemporalInstant(j) → ∃i1(hasLastInstant(i,i1) ∧ precedes(i1,j))",
    "LA5: precedes (i,j) ∧TemporalInstant (i) ∧ TemporalInstant(j) → ∃k∃l(hasValueExpressionAtAllTimes(i,k) ∧ hasValueExpressionAtAllTimes(j,l) ∧ ∃v1∃v2(hasDateTimeInstantValue(k,v1) ∧ hasDateTimeInstantValue(l,v2) ∧ (v1 < v2)))",
    "LA6: precedes(i,j) ∧ TemporalInterval(i) ∧ TemporalInterval(j) → ∃i1∃j1(TemporalInstant(i1) ∧ TemporalInstant(j1) ∧ hasLastInstant(i,i1) ∧ hasFirstInstant(j,j1) ∧ (precedes(i1,j1) ∨ occursSimultaneouslyWith(i1,j1)))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "comes before (something) in time"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: If i and j are both ‘process’ and i 'precedes' j then the ‘temporal instant’ that i occupies 'precedes' ‘temporal instant’ that j occupies",
    "LA2: If i and j are both ‘process boundary’ and i 'precedes' j then the ‘temporal instant’ that i occupies 'precedes' ‘temporal instant’ that j occupies",
    "LA3: if i is ‘temporal instant’ and j is ‘temporal interval’ and i 'precedes' j then i 'precedes' the 'first instant of' j",
    "LA4: if i is ‘temporal interval’ and j is ‘temporal instant’ and i 'precedes' j then the 'last instant of' i 'precedes' j",
    "LA5: If i and j are both ‘temporal instant’ and i 'precedes' j then the 'temporal instant value expression' of i is less than the 'temporal instant value expression' of j",
    "LA6: If both i and j are 'temporal intervals' and i is 'precedes' j then the 'last instant of' i 'precedes' the 'first instant of' j or the 'last instant of' i 'occurs simultaneously with' the 'first instant of' j";
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000003>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000003> .

<http://purl.obolibrary.org/obo/BFO_0000001> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "entity"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) An entity is anything that exists or has existed or will exist"@en;
  <http://www.w3.org/2004/02/skos/core#example> "Julius Caesar, the Second World War, your body mass index, Verdi's Requiem."@en;
  <http://purl.org/dc/elements/1.1/identifier> "001-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "entity"@en .

<http://purl.obolibrary.org/obo/BFO_0000066> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "occurs in"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b occurs in c =Def b is a process or a process boundary and c is a material entity or immaterial entity & there exists a spatiotemporal region r and b occupies spatiotemporal region r & for all t, if b exists at t then c exists at t & there exist spatial regions s and s' where b spatially projects onto s at t & c occupies spatial region s' at t & s is a continuant part of s' at t"@en;
  <http://www.w3.org/2004/02/skos/core#example> "A process of digestion occurs in the interior of an organism, a process of loading artillery rounds into a tank cannon occurs in the interior of the tank."@en;
  <http://purl.org/dc/elements/1.1/identifier> "143-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "occurs in"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000183>;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af40;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af43 .

<http://purl.obolibrary.org/obo/BFO_0000183> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "environs"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b environs c =Def c occurs in b"@en;
  <http://www.w3.org/2004/02/skos/core#example> "Mouth environs process of mastication, city environs traffic."@en;
  <http://purl.org/dc/elements/1.1/identifier> "267-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "environs"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af108;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af111 .

<http://purl.obolibrary.org/obo/BFO_0000035> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "process boundary"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "p is a process boundary =Def p is a temporal part of a process & p has no proper temporal parts"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The boundary between the 2nd and 3rd year of your life."@en;
  <http://purl.org/dc/elements/1.1/identifier> "084-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "process boundary"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000003>,
    _:a9bbd3a5197f4d479f29d036f159f0af319, _:a9bbd3a5197f4d479f29d036f159f0af320, _:a9bbd3a5197f4d479f29d036f159f0af321,
    _:a9bbd3a5197f4d479f29d036f159f0af325 .

<http://purl.obolibrary.org/obo/BFO_0000029> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "site"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) b is a site means: b is a three-dimensional immaterial entity whose boundaries either (1) (partially or wholly) coincide with the boundaries of one or more material entities or (2) have locations determined in relation to some material entity"@en;
  <http://www.w3.org/2004/02/skos/core#example> "A hole in a portion of cheese, a rabbit hole, the Grand Canyon, the Piazza San Marco, the kangaroo-joey-containing hole of a kangaroo pouch, your left nostril (a fiat part - the opening - of your left nasal cavity), the lumen of your gut, the hold of a ship, the interior of the trunk of your car, hole in an engineered floor joist; An air traffic control region of type A is determined in terms of elevation above mean sea level of lower and upper boundaries."@en,
    "location of a container, floor area in a factory building, location of a machine (relative to the coordinate of a factory floor), location on a shelf in a warehouse"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "Even though site (physical location) always refers to a 3D space it is fine to define it practically just through 2D or 1D or 0D spatial region. For example when we want to talk about 2x2m area within a factory floor even though the space specified is 2D it is still ok to assert it as site as there is always the third dimension above the area that is implicit.";
  <http://purl.org/dc/elements/1.1/identifier> "034-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "site"@en;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "physical location"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000141>,
    _:a9bbd3a5197f4d479f29d036f159f0af310, _:a9bbd3a5197f4d479f29d036f159f0af314, _:a9bbd3a5197f4d479f29d036f159f0af318 .

<http://purl.obolibrary.org/obo/BFO_0000040> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "material entity"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A material entity is an independent continuant that at all times at which it exists has some portion of matter as continuant part"@en;
  <http://www.w3.org/2004/02/skos/core#example> "A human being, the undetached arm of a human being, an aggregate of human beings."@en;
  <http://purl.org/dc/elements/1.1/identifier> "019-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "material entity"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000004>,
    _:a9bbd3a5197f4d479f29d036f159f0af334, _:a9bbd3a5197f4d479f29d036f159f0af335;
  <http://www.w3.org/2002/07/owl#disjointWith> <http://purl.obolibrary.org/obo/BFO_0000141> .

<http://purl.obolibrary.org/obo/BFO_0000082> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "located in at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b located in c at all times =Def for all times t, b exists at t implies (b and c are independent continuants and not spatial regions, and the spatial region which b occupies at t is a (proper or improper) continuant part of the spatial region which c occupies at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000171>;
  <http://purl.org/dc/elements/1.1/identifier> "235-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "located in at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af46;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af50 .

<http://purl.obolibrary.org/obo/BFO_0000171> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "located in at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b located in c at some time =Def for some time t (b and c are independent continuants and not spatial regions, and the spatial region which b occupies at t is a (proper or improper) continuant part of the spatial region which c occupies at t)"@en;
  <http://purl.org/dc/elements/1.1/identifier> "234-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "located in at some time"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af100;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af104 .

<http://purl.obolibrary.org/obo/BFO_0000084> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "generically depends on at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "a g-dependent continuant b g-depends on an independent continuant c at some time =Def for some time t (there inheres in c an s-dependent continuant which concretizes b at t)"@en;
  <http://purl.org/dc/elements/1.1/identifier> "252-BFO";
  <http://www.w3.org/2004/02/skos/core#altLabel> "g-depends on at some time"@en;
  <http://www.w3.org/2004/02/skos/core#prefLabel> "generically depends on at some time"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000101>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000031>;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af54 .

<http://purl.obolibrary.org/obo/BFO_0000101> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is carrier of at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b is carrier of c at some time =Def for some time t (c g-depends on b at t)"@en;
  <http://purl.org/dc/elements/1.1/identifier> "254-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "is carrier of at some time"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af58;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000031> .

<http://purl.obolibrary.org/obo/BFO_0000108> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "exists at"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) exists at is a relation between a particular and some temporal region at which the particular exists"@en;
  <http://www.w3.org/2004/02/skos/core#example> "First World War exists at 1914-1916, Mexico exists at January 1, 2000."@en;
  <http://purl.org/dc/elements/1.1/identifier> "118-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "exists at"@en .

<http://purl.obolibrary.org/obo/BFO_0000110> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has continuant part at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has continuant part c at all times =Def for all times t, b exists at t implies (b and c are continuants & b is a part of c at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://purl.org/dc/elements/1.1/identifier> "223-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has continuant part at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000002>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000002> .

<http://purl.obolibrary.org/obo/BFO_0000178> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has continuant part at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has continuant part c at some time =Def for some time t (b and c are continuants & b is a part of c at t)"@en;
  <http://purl.org/dc/elements/1.1/identifier> "271-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has continuant part at some time"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000002>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000002> .

<http://purl.obolibrary.org/obo/BFO_0000111> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has proper continuant part at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has proper continuant part c at all times =Def c proper continuant part of b at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000110>,
    <http://purl.obolibrary.org/obo/BFO_0000174>;
  <http://purl.org/dc/elements/1.1/identifier> "227-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has proper continuant part at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000002>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000002> .

<http://purl.obolibrary.org/obo/BFO_0000174> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has proper continuant part at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has proper continuant part c at some time =Def c proper continuant part of b at some time"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://purl.org/dc/elements/1.1/identifier> "226-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has proper continuant part at some time"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000175>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000002>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000002> .

<http://purl.obolibrary.org/obo/BFO_0000175> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "proper continuant part of at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b proper continuant part of c at some time =Def for some time t (b continuant part of c at t & not (c continuant part of b at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000176>;
  <http://purl.org/dc/elements/1.1/identifier> "224-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "proper continuant part of at some time"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000002>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000002> .

<http://purl.obolibrary.org/obo/BFO_0000113> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has material basis at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has material basis c at all times =Def For all times t, b exists at t implies (b is a disposition & c is a material entity & there is some d bearer of b & c continuant part of d at t & d has disposition b because c continuant part of d at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000218>;
  <http://purl.org/dc/elements/1.1/identifier> "243-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has material basis at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000016>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000040> .

<http://purl.obolibrary.org/obo/BFO_0000218> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has material basis at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has material basis c at some time =Def For some time t (b is a disposition & c is a material entity & there is some d bearer of b & c continuant part of d at t & d has disposition b because c continuant part of d at t)"@en;
  <http://purl.org/dc/elements/1.1/identifier> "242-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has material basis at some time"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000016>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000040> .

<http://purl.obolibrary.org/obo/BFO_0000016> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "disposition"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) b is a disposition means: b is a realizable entity & b is such that if it ceases to exist, then its bearer is physically changed, & b's realization occurs when and because this bearer is in some special physical circumstances, & this realization occurs in virtue of the bearer's physical make-up"@en;
  <http://www.w3.org/2004/02/skos/core#example> "An atom of element X has the disposition to decay to an atom of element Y; the cell wall is disposed to transport cellular material through endocytosis and exocytosis; certain people have a predisposition to colon cancer; children are innately disposed to categorize objects in certain ways."@en;
  <http://purl.org/dc/elements/1.1/identifier> "062-BFO";
  <http://www.w3.org/2004/02/skos/core#altLabel> "internally-grounded realizable entity"@en;
  <http://www.w3.org/2004/02/skos/core#prefLabel> "disposition"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000017>;
  <http://www.w3.org/2002/07/owl#disjointWith> <http://purl.obolibrary.org/obo/BFO_0000023> .

<http://purl.obolibrary.org/obo/BFO_0000023> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "role"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) b is a role means: b is a realizable entity & b exists because there is some single bearer that is in some special physical, social, or institutional set of circumstances in which this bearer does not have to be & b is not such that, if it ceases to exist, then the physical make-up of the bearer is thereby changed"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The priest role, the student role, the role of subject in a clinical trial, the role of a stone in marking a property boundary, the role of a boundary to demarcate two neighbouring administrative territories, the role of a building in serving as a military target."@en;
  <http://purl.org/dc/elements/1.1/identifier> "061-BFO";
  <http://www.w3.org/2004/02/skos/core#altLabel> "externally-grounded realizable entity"@en;
  <http://www.w3.org/2004/02/skos/core#prefLabel> "role"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000017> .

<http://purl.obolibrary.org/obo/BFO_0000115> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has member part at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has member part c at some time =Def for some time t (c member part of b at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://purl.org/dc/elements/1.1/identifier> "230-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has member part at some time"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000129>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000040> .

<http://purl.obolibrary.org/obo/BFO_0000129> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "member part of at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b member part of c at some time =Def for some time t (b is an object & there is at t a mutually exhaustive and pairwise disjoint partition of c into objects x1, ..., xn (for some n ≠ 1) with b = xi (for some 1 <= i <= n))"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000176>;
  <http://purl.org/dc/elements/1.1/identifier> "228-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "member part of at some time"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000040> .

<http://purl.obolibrary.org/obo/BFO_0000176> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "continuant part of at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b continuant part of c at some time =Def for some time t (b exists at t and c exists at t and b continuant part of c at t & t is a temporal region & b and c are continuants)"@en;
  <http://www.w3.org/2004/02/skos/core#example> "Milk teeth continuant part of human at some time; surgically removed tumour continuant part of organism at some time."@en;
  <http://purl.org/dc/elements/1.1/identifier> "221-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "continuant part of at some time"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000002>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000002> .

<http://purl.obolibrary.org/obo/BFO_0000118> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has proper occurrent part"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has proper occurrent part c =Def b has occurrent part c & b and c are not identical"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000117>;
  <http://www.w3.org/2004/02/skos/core#example> "As for has occurrent part."@en;
  <http://purl.org/dc/elements/1.1/identifier> "154-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has proper occurrent part"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000138>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000003>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000003> .

<http://purl.obolibrary.org/obo/BFO_0000138> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "proper occurrent part of"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b proper occurrent part of c =Def b occurrent part of c & b and c are not identical"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000132>;
  <http://www.w3.org/2004/02/skos/core#example> "As for occurrent part of."@en;
  <http://purl.org/dc/elements/1.1/identifier> "005-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "proper occurrent part of"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000003>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000003> .

<http://purl.obolibrary.org/obo/BFO_0000121> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has temporal part"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has temporal part c =Def c temporal part of b"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000117>;
  <http://www.w3.org/2004/02/skos/core#example> "Your life has temporal part the first year of your life."@en;
  <http://purl.org/dc/elements/1.1/identifier> "211-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has temporal part"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000139>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000003>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000003> .

<http://purl.obolibrary.org/obo/BFO_0000139> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "temporal part of"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b temporal part of c =Def b occurrent part of c & either b and c are temporal regions or b and c are spatiotemporal regions & b temporally projects onto an occurrent part of the temporal region that c temporally projects onto or b and c are processes or process boundaries & b occupies a temporal region that is an occurrent part of the temporal region that c occupies"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000132>;
  <http://www.w3.org/2004/02/skos/core#example> "Your heart beating from 4pm to 5pm today is a temporal part of the process of your heart beating; the 4th year of your life is a temporal part of your life, as is the process boundary which separates the 3rd and 4th years of your life; the first quarter of a game of football is a temporal part of the whole game."@en;
  <http://purl.org/dc/elements/1.1/identifier> "078-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "temporal part of"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000003>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000003> .

<http://purl.obolibrary.org/obo/BFO_0000124> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "location of at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b location of c at some time =Def for some time t (c located in b at t)"@en;
  <http://purl.org/dc/elements/1.1/identifier> "236-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "location of at some time"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000171>;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af62;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af66 .

<http://purl.obolibrary.org/obo/BFO_0000127> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "material basis of at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b material basis of c at some time =Def at some time t (c has material basis b at t)"@en;
  <http://purl.org/dc/elements/1.1/identifier> "244-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "material basis of at some time"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000218>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000016> .

<http://purl.obolibrary.org/obo/BFO_0000136> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "proper temporal part of"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b proper temporal part of c =Def b temporal part of c & not (b = c)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000139>;
  <http://www.w3.org/2004/02/skos/core#example> "As for temporal part of."@en;
  <http://purl.org/dc/elements/1.1/identifier> "116-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "proper temporal part of"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000181>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000003>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000003> .

<http://purl.obolibrary.org/obo/BFO_0000181> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has proper temporal part"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has proper temporal part c =Def c proper temporal part of b"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000121>;
  <http://www.w3.org/2004/02/skos/core#example> "As for has temporal part."@en;
  <http://purl.org/dc/elements/1.1/identifier> "212-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has proper temporal part"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000003>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000003> .

<http://purl.obolibrary.org/obo/BFO_0000137> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "proper continuant part of at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b proper continuant part of c at all times =Def for all times t, b exists at t implies (b continuant part of c at t & not (c proper continuant part of b at t))"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000175>,
    <http://purl.obolibrary.org/obo/BFO_0000177>;
  <http://purl.org/dc/elements/1.1/identifier> "225-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "proper continuant part of at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000002>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000002> .

<http://purl.obolibrary.org/obo/BFO_0000177> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "continuant part of at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b continuant part of c at all times =Def for all times t, (b exists at t, implies b continuant part of c at t & t is a temporal region & b and c are continuants)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000176>;
  <http://www.w3.org/2004/02/skos/core#example> "Centre of mass of a material entity continuant part of material entity at all times; continuant fiat external boundary of an object continuant part of object at all times."@en;
  <http://purl.org/dc/elements/1.1/identifier> "222-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "continuant part of at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000002>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000002> .

<http://purl.obolibrary.org/obo/BFO_0000153> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#FunctionalProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "temporally projects onto"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) temporally projects onto is a relation between a spatiotemporal region s and some temporal region which is the temporal extent of s"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The world line of a particle temporally projects onto the temporal region extending from the beginning to the end of the existence of the particle."@en;
  <http://purl.org/dc/elements/1.1/identifier> "080-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "temporally projects onto"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000011>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000008> .

<http://purl.obolibrary.org/obo/BFO_0000011> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "spatiotemporal region"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A spatiotemporal region is an occurrent that is an occurrent part of spacetime"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The spatiotemporal region occupied by the development of a cancer tumour, the spatiotemporal region occupied by an orbiting satellite."@en;
  <http://purl.org/dc/elements/1.1/identifier> "095-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "spatiotemporal region"@en;
  <http://www.w3.org/2004/02/skos/core#scopeNote> "'Spacetime' here refers to the maximal instance of the universal spatiotemporal region."@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000003>,
    _:a9bbd3a5197f4d479f29d036f159f0af296, _:a9bbd3a5197f4d479f29d036f159f0af297 .

<http://purl.obolibrary.org/obo/BFO_0000008> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "temporal region"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A temporal region is an occurrent over which processes can unfold"@en;
  <http://www.w3.org/2004/02/skos/core#example> "As for zero-dimensional temporal region and one-dimensional temporal region."@en;
  <http://purl.org/dc/elements/1.1/identifier> "100-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "temporal region"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000003>,
    _:a9bbd3a5197f4d479f29d036f159f0af289, _:a9bbd3a5197f4d479f29d036f159f0af290 .

<http://purl.obolibrary.org/obo/BFO_0000163> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "material basis of at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b material basis of c at all times =Def for all times t, b exists at t implies (c has material basis b at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000127>;
  <http://purl.org/dc/elements/1.1/identifier> "245-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "material basis of at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000016> .

<http://purl.obolibrary.org/obo/BFO_0000164> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "concretizes at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "an s-dependent continuant b concretizes a g-dependent continuant c at all times =Def for all times t, b exists at t implies (c is the pattern or content which b shares at t with actual or potential copies)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000059>;
  <http://purl.org/dc/elements/1.1/identifier> "257-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "concretizes at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af70;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000031> .

<http://purl.obolibrary.org/obo/BFO_0000165> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is concretized by at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "a g-dependent continuant c is concretized by an s-dependent continuant or process b at all times =Def for all times t, b exists at t implies (b concretizes c at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000058>;
  <http://purl.org/dc/elements/1.1/identifier> "259-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "is concretized by at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000031>;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af73 .

<http://purl.obolibrary.org/obo/BFO_0000166> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "participates in at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b participates in p at all times =Def for all times t, b exists at t implies (p has participant b at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000056>;
  <http://purl.org/dc/elements/1.1/identifier> "251-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "participates in at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af76;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000015> .

<http://purl.obolibrary.org/obo/BFO_0000167> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has participant at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "p has participant c at all times =Def for all times t, p exists at t implies (p is a process, c is a continuant, and c participates in p some way at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://purl.org/dc/elements/1.1/identifier> "249-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has participant at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af84 .

<http://purl.obolibrary.org/obo/BFO_0000170> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "location of at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b location of c at all times =Def for all times t, b exists at t implies (c located in b at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000124>;
  <http://purl.org/dc/elements/1.1/identifier> "237-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "location of at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af92;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af96 .

<http://purl.obolibrary.org/obo/BFO_0000172> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has member part at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has member part c at all times =Def for all times t, b exists at t implies (c member part b at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000110>,
    <http://purl.obolibrary.org/obo/BFO_0000115>;
  <http://purl.org/dc/elements/1.1/identifier> "231-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has member part at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000040> .

<http://purl.obolibrary.org/obo/BFO_0000173> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "member part of at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b member part of c at all times =Def for all times t, b exists at t implies (b is an object & c is an object aggregate & there is at t a mutually exhaustive and pairwise disjoint partition of c into objects x1,..., xn (for some n ≠ 1) with b = xi (for some 1 <= i <= n))"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000129>,
    <http://purl.obolibrary.org/obo/BFO_0000177>;
  <http://purl.org/dc/elements/1.1/identifier> "229-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "member part of at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000040> .

<http://purl.obolibrary.org/obo/BFO_0000184> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#FunctionalProperty>, <http://www.w3.org/2002/07/owl#InverseFunctionalProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "history of"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) b history of c if c is a material entity and b is a history that is the unique history of c"@en;
  <http://www.w3.org/2004/02/skos/core#example> "This life is the history of this organism."@en;
  <http://purl.org/dc/elements/1.1/identifier> "144-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "history of"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000185>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000182>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000040> .

<http://purl.obolibrary.org/obo/BFO_0000185> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has history"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b has history c =Def c history of b"@en;
  <http://www.w3.org/2004/02/skos/core#example> "This organism has history this life."@en;
  <http://purl.org/dc/elements/1.1/identifier> "145-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has history"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000182> .

<http://purl.obolibrary.org/obo/BFO_0000182> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "history"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A history is a process that is the sum of the totality of processes taking place in the spatiotemporal region occupied by the material part of a material entity"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The life of an organism from the beginning to the end of its existence."@en;
  <http://purl.org/dc/elements/1.1/identifier> "138-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "history"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000015> .

<http://purl.obolibrary.org/obo/BFO_0000194> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "specifically depended on by"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b s-depended on by c =Def c specifically depends on b"@en;
  <http://www.w3.org/2004/02/skos/core#example> "Coloured object s-depended on by colour."@en;
  <http://purl.org/dc/elements/1.1/identifier> "260-BFO";
  <http://www.w3.org/2004/02/skos/core#altLabel> "s-depended on by"@en;
  <http://www.w3.org/2004/02/skos/core#prefLabel> "specifically depended on by"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000195>;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af114;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000020> .

<http://purl.obolibrary.org/obo/BFO_0000195> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "specifically depends on"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) b specifically depends on c means: b and c do not share common parts & b is of a nature such that at all times t it cannot exist at t unless c exists at t & b is not a boundary of c"@en;
  <http://www.w3.org/2004/02/skos/core#example> "A shape s-depends on the shaped object, hue, saturation and brightness of a colour sample s-depend on each other."@en;
  <http://purl.org/dc/elements/1.1/identifier> "012-BFO";
  <http://www.w3.org/2004/02/skos/core#altLabel> "s-depends on"@en;
  <http://www.w3.org/2004/02/skos/core#prefLabel> "specifically depends on"@en;
  <http://www.w3.org/2004/02/skos/core#scopeNote> "The analogue of s-dependence for occurrents is has participant."@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af121 .

<http://purl.obolibrary.org/obo/BFO_0000196> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "bearer of"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b bearer of c =Def c inheres in b"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000194>;
  <http://www.w3.org/2004/02/skos/core#example> "A patch of ink is the bearer of a colour quality; an organism is the bearer of a temperature quality."@en;
  <http://purl.org/dc/elements/1.1/identifier> "053-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "bearer of"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000197>;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af128;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000020> .

<http://purl.obolibrary.org/obo/BFO_0000197> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "inheres in"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b inheres in c =Def b is a specifically dependent continuant & c is an independent continuant that is not a spatial region & b s-depends on c"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000195>;
  <http://www.w3.org/2004/02/skos/core#example> "A shape inheres in a shaped object; a mass inheres in a material entity."@en;
  <http://purl.org/dc/elements/1.1/identifier> "051-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "inheres in"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af132 .

<http://purl.obolibrary.org/obo/BFO_0000199> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#FunctionalProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "occupies temporal region"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "p occupies temporal region t =Def the spatiotemporal region occupied by p temporally projects onto t"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The Second World War occupies the temporal region September 1, 1939 - September 2, 1945."@en;
  <http://purl.org/dc/elements/1.1/identifier> "132-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "occupies temporal region"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af136;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000008> .

<http://purl.obolibrary.org/obo/BFO_0000200> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#FunctionalProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "occupies spatiotemporal region"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) p occupies spatiotemporal region s is a relation between an occurrent p and the spatiotemporal region s which is its spatiotemporal extent"@en;
  <http://www.w3.org/2004/02/skos/core#example> "A particle emitted by a nuclear reactor occupies the spatiotemporal region which is its trajectory."@en;
  <http://purl.org/dc/elements/1.1/identifier> "082-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "occupies spatiotemporal region"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af139;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000011> .

<http://purl.obolibrary.org/obo/BFO_0000210> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "occupies spatial region at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "an independent continuant c that is not a spatial region occupies spatial region r at some time =Def for some time t (every continuant part of c occupies some continuant part of r at t and no continuant part of c occupies any spatial region that is not a continuant part of r at t)"@en;
  <http://purl.org/dc/elements/1.1/identifier> "232-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "occupies spatial region at some time"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af142;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000006> .

<http://purl.obolibrary.org/obo/BFO_0000211> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#FunctionalProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "occupies spatial region at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "an independent continuant c that is not a spatial region occupies spatial region r at all times =Def for all times t, b exists at t implies (every continuant part of c occupies some continuant part of r at t and no continuant part of c occupies any spatial region that is not a continuant part of r at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000210>;
  <http://purl.org/dc/elements/1.1/identifier> "233-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "occupies spatial region at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af146;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000006> .

<http://purl.obolibrary.org/obo/BFO_0000216> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "spatially projects onto at some time"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b spatially projects onto c at some time =Def for some time t (b is a spatiotemporal region and c is a spatial region and c is the spatial extent of b at t)"@en;
  <http://purl.org/dc/elements/1.1/identifier> "246-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "spatially projects onto at some time"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000011>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000006> .

<http://purl.obolibrary.org/obo/BFO_0000217> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#FunctionalProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "spatially projects onto at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b spatially projects onto c at all times =Def for all times t, b exists at t implies (b is a spatiotemporal region and c is a spatial region and c is the spatial extent of b at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000216>;
  <http://purl.org/dc/elements/1.1/identifier> "247-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "spatially projects onto at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000011>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000006> .

<http://purl.obolibrary.org/obo/BFO_0000219> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "generically depends on at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "a g-dependent continuant b g-depends on an independent continuant c at all times =Def for all times t, b exists at t implies (there inheres in c an s-dependent continuant which concretizes b at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000084>;
  <http://purl.org/dc/elements/1.1/identifier> "253-BFO";
  <http://www.w3.org/2004/02/skos/core#altLabel> "g-depends on at all times"@en;
  <http://www.w3.org/2004/02/skos/core#prefLabel> "generically depends on at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000031>;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af150 .

<http://purl.obolibrary.org/obo/BFO_0000220> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is carrier of at all times"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b is carrier of c at all times =Def for all times t, b exists at t implies (c g-depends on b at t)"@en;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000101>;
  <http://purl.org/dc/elements/1.1/identifier> "255-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "is carrier of at all times"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af154;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000031> .

<http://purl.obolibrary.org/obo/BFO_0000221> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "first instant of"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "temporal instant t first instant of temporal region t' =Def t precedes all temporal parts of t' other than t"@en;
  <http://www.w3.org/2004/02/skos/core#example> "An hour starting at midnight yesterday has first instant midnight yesterday."@en;
  <http://purl.org/dc/elements/1.1/identifier> "268-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "first instant of"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000222>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000203>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000008> .

<http://purl.obolibrary.org/obo/BFO_0000222> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#FunctionalProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has first instant"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "t has first instant t' =Def t' first instant of t"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The first hour of a year has first instant midnight on December 31."@en;
  <http://purl.org/dc/elements/1.1/identifier> "261-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has first instant"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000008>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000203> .

<http://purl.obolibrary.org/obo/BFO_0000203> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "temporal instant"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) a temporal instant is a zero-dimensional temporal region that has no proper temporal part"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The millennium."@en;
  <http://purl.org/dc/elements/1.1/identifier> "209-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "temporal instant"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000148> .

<http://purl.obolibrary.org/obo/BFO_0000148> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "zero-dimensional temporal region"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A zero-dimensional temporal region is a temporal region that is a whole consisting of one or more separated temporal instants as parts"@en;
  <http://www.w3.org/2004/02/skos/core#example> "A temporal region that is occupied by a process boundary; the moment at which a finger is detached in an industrial accident."@en;
  <http://purl.org/dc/elements/1.1/identifier> "102-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "zero-dimensional temporal region"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000008>,
    _:a9bbd3a5197f4d479f29d036f159f0af348 .

<http://purl.obolibrary.org/obo/BFO_0000223> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "last instant of"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "temporal instant t last instant of temporal region t' =Def all temporal parts of t' other than t precede t"@en;
  <http://www.w3.org/2004/02/skos/core#example> "Last midnight is the last instant of yesterday."@en;
  <http://purl.org/dc/elements/1.1/identifier> "269-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "last instant of"@en;
  <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000224>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000203>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000008> .

<http://purl.obolibrary.org/obo/BFO_0000224> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#FunctionalProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has last instant"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "t has last instant t' =Def t' last instant of t"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The last hour of a year has last instant midnight December 31."@en;
  <http://purl.org/dc/elements/1.1/identifier> "215-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "has last instant"@en;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000008>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000203> .

<https://spec.industrialontologies.org/ontology/core/Core/achievesAtSomeTime> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "achieves at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000059>;
  <http://www.w3.org/2004/02/skos/core#example> "The staffing and ramping up of production to 2 shifts per work day acheives the company plan of satisfying a surge in demand for its products."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "achievesAtSomeTime(x,y) → Process(x) ∧ InformationContentEntity(y) ∧ (concretizesAtSomeTime(x,y) ∨ ∃z(continuantPartOfAtAllTimes(z,y) ∧ InformationContentEntity(z) ∧ concretizesAtSomeTime(x,z)))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a process to an information content entity wherein the process partially or fully concretizes the information content entity"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x achieves at some time y holds when x is a 'process' and y is an 'information content entity' and x 'concretizes at some time' y or a 'continuant part of at all times' y";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/isAchievedByAtSomeTime>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity> .

<https://spec.industrialontologies.org/ontology/core/Core/isAchievedByAtSomeTime>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is achieved by at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000058>;
  <http://www.w3.org/2004/02/skos/core#example> "The company plan of satisfying a surge in demand for its products is achieved by the staffing and ramping up of production to 2 shifts per work day."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "isAchievedByAtSomeTime(y,x) → Process(x) ∧ InformationContentEntity(y) ∧ (concretizesAtSomeTime(x,y) ∨ ∃z(continuantPartOf(z,y) ∧ InformationContentEntity(z) ∧ concretizesAtSomeTime(x,z)))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an information content entity to a process that partially or fully concretizes the information content entity"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "y is achieved by at some time x holds when x is a 'process' and y is an 'information content entity' and x 'concretizes' y or a 'continuant part of' y, at some time t";
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000015> .

<https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "information content entity"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "the content of an email; the content of a document; the content in a CAD file; an algorithm for solving the quadratic equation; a guide or standard for writing and formatting conference papers."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/abbreviation>
    "ICE";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Information content entity is intended to be a class of entities whose instances represent some distinct content or pattern independent from the various ways of conveying it by physical, electronic, or other means. For example, three instances of information bearers -- a bar chart, a color-coded map, and a written report -- each conveying the GDP of Countries for the year 2010, are each different carriers of the same information content. It is this content that is generically dependent upon its carrier. This treatment of information content entity leads to a principle of subtyping based upon the relationship that ICE's have with the entity they are about rather than attributes such as format, language, measurement scale, or media. The latter are treated here as various qualities of the material entities that have them. 

2. Information content entities are typically textual or schematic.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "Information Artifact Ontology, http://purl.obolibrary.org/obo/IAO_0000030 and also the Common Core Ontology, http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "GenericallyDependentContinuant(x) ∧ ∃e(Entity(e) ∧ isAbout(x,e)) → InformationContentEntity(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "content or a pattern (generically dependent continuant) that is about some entity"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "Information content entities may well \"be about\" entity types for which no instances ever come into existence (e.g., a plan or requirement not implemented or satisfied, a command or directive never obeyed or followed, or an objective never achieved). IOF's current approach to modeling such informational entity types is to provide one or more sufficient conditions that can be readily expressed in OWL.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'generically dependent continuant' that 'is about' some 'entity' then x is an 'information content entity'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "Information"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000031> .

<https://spec.industrialontologies.org/ontology/core/Core/actsOnBehalfOfAtSomeTime>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "acts on behalf of at some time"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "An agent acts on behalf of a business organization. A laywer acts on behalf of a person."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "actsOnBehalfOfAtSomeTime(x,y) → (MaterialEntity(x) ∧ ¬(FiatObjectPart(x))) ∧ (Person(y) ∨ GroupOfAgents(y) ∨ EngineeredSystem(y)) ∧ ∃p∃d(PlannedProcess(p) ∧ ObjectiveSpecification(d) ∧ participatesInAtSomeTime(x,p) ∧achievesAtSomeTime(p,d) ∧ genericallyDependsOnAtSomeTime(d,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a material entity to a person or a group of agents or engineered system that holds when the material entity participates in some planned process in order to fulfill an objective for the person or group of agents or engineered system"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x acts on behalf of at some time y holds when x is a 'material entity' (that is not a 'fiat object part') and y is some 'person' or 'group of agents' or 'engineered system' and at some time t, there exists a 'planned process' p such that x 'participates in' p and p 'achieves at some time' some 'objective specification' d that 'generically depends on at some time' y";
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af158;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af162 .

<http://purl.obolibrary.org/obo/BFO_0000024> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "fiat object part"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) a fiat object part b is a material entity which is such that for all times t, if b exists at t then there is some object c such that b is a proper continuant part of c at t and b is demarcated from the remainder of c by one or more fiat surfaces"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The upper and lower lobes of the left lung, the dorsal and ventral surfaces of the body, the Western hemisphere of the Earth, the FMA:regional parts of an intact human body."@en;
  <http://purl.org/dc/elements/1.1/identifier> "027-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "fiat object part"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000040> .

<https://spec.industrialontologies.org/ontology/core/Core/EngineeredSystem> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "engineered system"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "machine, laptop, traffic light system"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "www.incose.com, term by the same name";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "EngineeredSystem(x) ↔ System(x) ∧ ∃f(DesignedFunction(f) ∧ bearerOf(x,f))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "system that is deliberately created to have a certain function"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'engineered system' is defined as exactly an instance of 'system' that is the 'bearer of' some 'designed function'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/System>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af488 .

<https://spec.industrialontologies.org/ontology/core/Core/System> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "system"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "solar system, digestive system, forest ecosystem, hydraulic system, subway system, social system, technical system, natural system"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. As introduced here, the term is limited to natural, social and technical systems that are tangible and whose \"elements\" are also tangible.

2. Frequently, the elements comprising a system are instances of BFO: object. However, the system elements may also include object aggregates (e.g., a system of systems; a system that includes a production line consisting of humans, machines, and other equipment)

3. Although the system is asserted under BFO: object aggregate, which is constrained to have only material entities (tangible things) as elements, the approach to modeling systems comprised of both software and hardware (also known as a cyber-physical system) can still be modeled indirectly: by introducing a 'generically depends on' relationship between the software or other intangible elements (information content entity types) and its physical bearer (hardware or hardware system), which are in turn members of the system.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "Merriam-Webster Dictionary for term under the same name.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "System(x) → ObjectAggregate(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "collection of elements (object aggregate) that form a unified whole and interact"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "The term is introduced here as a general class to allow the introduction of specialized kinds of systems that appear in particular modalities. Furthermore, an effort remains to formalize what it means for two things to interact, or what it means to regularly interact.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'system' then x is an 'object aggregate'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000027> .

<https://spec.industrialontologies.org/ontology/core/Core/GroupOfAgents> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "group of agents"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "organization; an automated manufacturing cell; division; protesters"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Group of agents being a BFO:Object Aggregate allows for a point in time where only one 'agent' is present.

2. As the name suggests, a group of agents is a grouping of agents based on some criteria. As such, it can only have agents as members.

3. The members of the group of agents can be any combination of persons, organizations, or engineered systems (classes that can be 'agent'). They are typically grouped based on the fact that they are working collectively in a particular type of process on behalf of someone.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/AgentOntology";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "GroupOfAgents(x) ↔ ObjectAggregate(x) ∧ ∃y(Agent(y) ∧ hasMemberPartAtSomeTime(x, y)) ∧ ∀z (hasMemberPartAtSomeTime(x, z) → Agent(z))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "group (object aggregate) that has one or more agents as members"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'group of agents is defined as exactly an instance of 'object aggregate' that only has 'agent' as 'member parts' and that always has at least one 'agent as its 'member part'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000027>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af562 .

<http://purl.obolibrary.org/obo/BFO_0000027> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "object aggregate"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) an object aggregate is a material entity consisting exactly of a plurality (≥1) of objects as member parts which together form a unit"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The aggregate of the musicians in a symphony orchestra and their instruments, the aggregate of bearings in a constant velocity axle joint, the nitrogen atoms in the atmosphere, a collection of cells in a blood biobank. NOTE 1: 'Exactly' means that there are no parts of the object aggregate other than its member parts. NOTE 2: The unit can, at certain times, consist of exactly one object, for example, when a wolf litter loses all but one of its pups, but it must at some time have a plurality of member parts."@en;
  <http://purl.org/dc/elements/1.1/identifier> "025-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "object aggregate"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000040> .

<https://spec.industrialontologies.org/ontology/core/Core/Person> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "person"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "any individual human being"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/MF_0000016";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "Person(x) → Object(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "organism that is the member of the species of homo sapiens"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "This term is expected to remain primitive. While the IOF might introduce a term for 'organism' in the future, speciation is out of the scope of IOF and should be utilized if needed from a biological ontology";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'person' then x is an 'object'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "human being"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000030> .

<http://purl.obolibrary.org/obo/BFO_0000030> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "object"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) an object is a material entity which manifests causal unity & is of a type instances of which are maximal relative to the sort of causal unity manifested"@en;
  <http://www.w3.org/2004/02/skos/core#example> "An organism, a fish tank, a planet, a laptop, a valve, a block of marble, an ice cube."@en;
  <http://purl.org/dc/elements/1.1/identifier> "024-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "object"@en;
  <http://www.w3.org/2004/02/skos/core#scopeNote> "A description of three primary sorts of causal unity is provided in Basic Formal Ontology 2.0. Specification and User’s Guide"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000040> .

<https://spec.industrialontologies.org/ontology/core/Core/after> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "after"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000062>;
  <http://www.w3.org/2004/02/skos/core#example> "A metal surface is polished after the surface is cleaned to make it free from dust or grease; a product is manufactured after it is designed; March comes after January."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "after(x,y) ↔ before(y,x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two intervals or processes i and j when the last instant of the temporal extent of i is later than the first instant of the temporal extent of j"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "'before' and 'after' are inverse relations";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/before>;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af166;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af169 .

<https://spec.industrialontologies.org/ontology/core/Core/before> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "before"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000063>;
  <http://www.w3.org/2004/02/skos/core#example> "The surface of the metal is cleaned to make it free from dust or grease before polishing; a product is designed before it can be manufactured; January comes before March."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: before(i,j) → (TemporalInterval(i) ∧ TemporalInterval(j)) ∨ (Process(i) ∧ Process(j))",
    "LA2: TemporalInterval(i) ∧ TemporalInterval(j) ∧ before(i,j) → ∃i1∃j1(TemporalInstant(i1) ∧ TemporalInstant(j1) ∧ hasLastInstant(i,i1) ∧ hasFirstInstant(j,j1) ∧ precedes(i1,j1))",
    "LA3: Process(i) ∧ Process(j) ∧ ∃i1∃j1(TemporalInterval(i1) ∧ before(i,j) → TemporalInterval(j1) ∧ occupiesTemporalRegion(i,i1) ∧ occupiesTemporalRegion(j,j1) ∧ before(i1,j1))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two intervals or processes i and j when the last instant of the temporal extent of i is earlier than the first instant of the temporal extent of j"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: If i is 'before' j then either both are 'temporal intervals' or both are 'process'",
    "LA2: If both i and j are 'temporal intervals' and i is 'before' j then the 'last instant of' i 'precedes' the 'first instant of' j",
    "LA3: If both i and j are 'process' and i is 'before' j then the 'temporal interval' that i occupies is 'before' the 'temporal interval' that j occupies";
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af172;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af175 .

<http://purl.obolibrary.org/obo/BFO_0000202> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "temporal interval"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) a temporal interval is a one-dimensional temporal region that is continuous, thus without gaps or breaks"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The year 2018."@en;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. The ‘first instant of’ a ‘temporal interval’ should ‘precede’ the ‘last instant of’ that ‘temporal interval’. Therefore, the date-time asserted (i.e., ‘has date-time instant value’ of the ‘temporal instant value expression’ that ‘is value expression of at all times’ of the ‘temporal instant’) for the first instant should be before the last instant in terms their positions in the corresponding calendar and clock system. For example, the first instant and last instant of a ‘temporal interval’ are 2002-10-10T17:00:00Z and 2002-10-11T01:40:00Z. 
2. If only one date-time is available for the interval due to lack of data or an interval being smaller than the tick time (the smallest duration by which the time progresses) then the date-time should be asserted either only for first instant or only for last instant of every interval uniformly for the entire knowledge base. For example, Barack Obama gained the role of presidency on 20 January 2009 should be modeled as the process p of type ‘gain of role’ ‘occupies temporal region’ r (a ‘temporal interval’) which ‘has last instant’ i (a ‘temporal instant’) which ‘has value expression at all times’ v (a ‘temporal instant value expression’) which ‘has data-time value’ 2009-01-20T00:00:00Z."""@en-us;
  <http://purl.org/dc/elements/1.1/identifier> "155-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "temporal interval"@en;
  <http://www.w3.org/2004/02/skos/core#scopeNote> "A one-dimensional temporal region can include as parts not only temporal intervals but also temporal instants separated from other parts by gaps."@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000038> .

<http://purl.obolibrary.org/obo/BFO_0000038> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "one-dimensional temporal region"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A one-dimensional temporal region is a temporal region is a whole that has a temporal interval and zero or more temporal intervals and temporal instants as parts"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The temporal region during which a process occurs."@en;
  <http://purl.org/dc/elements/1.1/identifier> "103-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "one-dimensional temporal region"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000008>,
    _:a9bbd3a5197f4d479f29d036f159f0af329, _:a9bbd3a5197f4d479f29d036f159f0af333;
  <http://www.w3.org/2002/07/owl#disjointWith> <http://purl.obolibrary.org/obo/BFO_0000148> .

<https://spec.industrialontologies.org/ontology/core/Core/capabilityOf> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "capability of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000197>;
  <http://www.w3.org/2004/02/skos/core#example> "turning at the maximal speed of 4000RPM is the capability of a lathe; temperature sensor has the capability to measuring temperature with a 0.01C precision is the capability of a temperature sensor; measuring pH in the range of 0-14 is the capability of a pH meter"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "capabilityOf(x,y) → Capability(x) ∧ IndependentContinuant(y) ∧ inheresIn(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a capability to an independent continuant (the bearer), in which the capability specifically depends on the bearer for its existence"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x capability of y holds when x is a 'capability' and y is a 'independent continuant' and x is 'inheres in' y";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/hasCapability>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/Capability>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000004> .

<https://spec.industrialontologies.org/ontology/core/Core/hasCapability> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has capability"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000196>;
  <http://www.w3.org/2004/02/skos/core#example> "a lathe has a capability to turn at the maximal speed of 4000RPM; temperature sensor has the capability to measure temperature with a 0.01C precision; pH meter has the capability to measure pH in the range of 0-14"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "hasCapability(x,y) → IndependentContinuant(x) ∧ Capability(y) ∧ bearerOf(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an independent continuant (the bearer) to a capability, in which the capability specifically depends on the bearer for its existence"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x has capability y holds when x is a 'independent continuant' and y is a 'capability' and x is 'bearer of' y";
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/Capability> .

<https://spec.industrialontologies.org/ontology/core/Core/Capability> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "capability"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "Capability of a person to play chess at the \"master\" level; of a team to play football in the professional league; of a lathe to turn at maximal speed of 4,000 RPM; or of your digestive system to digest tiramisu."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Whereas the BFO term 'disposition refers to all tendencies, powers, habits, skills, potentials, and so forth, that a material entity may possess, a Capability narrows this down by requiring the existence of an Agent that has an interest in the realization of the capability

2. This definition does not attempt to capture \"task-based\" capabilities that an entity may bear -- e.g., a stone's capability to kill when used by some person. Rather, it captures \"proper capabilities.\" See related discussion of \"proper functions\" in the literature.

3. All functions are capabilities and in a future release BFO:Function will be asserted directly under capability.

4. Not all capabilities are functions. Capabilities are often added to an artifact by the designer/engineer, or to a biological entity through evolution, as \"additional benefits,\" and are differentiated from function (i.e., purpose). Examples: the air conditioner in your car is a capability but not the function of your car. Yet the function of the car air conditioner certainly forms some material basis of your car's ability to provide a comfortable experience. The ability of your heart to beat fast to support your need to run fast to escape a threat. The decaying stick on the forest lawn does not have the function to be used as a tool, but certainly a chimpanzee
 may have an interest in using a stick to extract food from a termite mound.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/AgentOntology";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "Capability(x) → Disposition(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "disposition in whose realization some agent has an interest"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "This concept will be further developed and formalized in a future release of BFO.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'capability' then x is a 'disposition'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "ability"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000016> .

<https://spec.industrialontologies.org/ontology/core/Core/componentPartOfAtAllTimes>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>, <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "component part of at all times"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000137>,
    <https://spec.industrialontologies.org/ontology/core/Core/componentPartOfAtSomeTime>;
  <http://www.w3.org/2004/02/skos/core#example> "transmission assembly is a component part of a car; engine control ;sparger is a component part of a bioreactor"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "componentPartOfAtAllTimes(x,y) → (MaterialEntity(x) ∧ ¬(FiatObjectPart(x))) ∧ (MaterialEntity(y) ∧ ¬(FiatObjectPart(y))) ∧ properContinuantPartOfAtAllTimes(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a material entity to another material entity that it is a proper part of at all times it exists"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x component part of at all times y holds when x is a 'material entity' that is not a 'fiat object part' and y is a 'material entity' that is not a 'fiat object part' and x is 'proper continuant part of at all times' y";
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af178;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af182 .

<https://spec.industrialontologies.org/ontology/core/Core/componentPartOfAtSomeTime>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "component part of at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000175>;
  <http://www.w3.org/2004/02/skos/core#example> "a particular chromatography column is a component part of a chromatography system during several purification cycles; a particular tool is a component part of a CNC machine while it is being used for manufacturing a particular part"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "The IOF does not consider as component part of material entities that are delineated by a non-physical (fiat) boundary from the material entity they are a part of.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "componentPartOfAtSomeTime(x,y) → (MaterialEntity(x) ∧ ¬(FiatObjectPart(x))) ∧ (MaterialEntity(y) ∧ ¬(FiatObjectPart(y))) ∧ properContinuantPartOfAtSomeTime(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a material entity to another material entity that it is a proper part of at some time"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x component part of at some time y holds when x is a 'material entity' that is not a 'fiat object part' and y is a 'material entity' that is not a 'fiat object part' and x is 'proper continuant part of at some time' y";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/hasComponentPartAtSomeTime>;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af186;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af190 .

<https://spec.industrialontologies.org/ontology/core/Core/hasComponentPartAtSomeTime>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has component part at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000174>;
  <http://www.w3.org/2004/02/skos/core#example> "a particular chromatography column is a component part of a chromatography system has a component part a particular chromatography column during several purification cycles; a CNC machine has component part a particular tool while it is being used for manufacturing a particular part"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "hasComponentPartAtSomeTime(y,x) → (MaterialEntity(x) ∧ ¬(FiatObjectPart(x))) ∧ (MaterialEntity(y) ∧ ¬(FiatObjectPart(y))) ∧ properContinuantPartOfAtSomeTime(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a material entity to another material entity that it has as a proper part at some time"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "y has component part at some time x holds when x is a 'material entity' that is not a 'fiat object part' and y is a 'material entity' that is not a 'fiat object part' and x is 'proper continuant part of at some time' y";
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af208;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af212 .

<https://spec.industrialontologies.org/ontology/core/Core/containsOccurrenceOf> a
    <http://www.w3.org/2002/07/owl#ObjectProperty>, <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "contains occurence of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "The grinding of metal contains occurrence of sparking; a storm contains occurrences of lightning."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "containsOccurrenceOf(x,y) ↔ occursDuring(y,x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two intervals or processes i and j when the first instant of the temporal extent of j is later than the first instant of the temporal extent of i and the last instant of the temporal extent of j is earlier than the last instant of the temporal extent of i"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "'contains occurrence of' and 'occurs during' are inverse relations";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/occursDuring>;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af194;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af197 .

<https://spec.industrialontologies.org/ontology/core/Core/occursDuring> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "occurs during"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "The final inspection and removal of defective products occur during the product is being moved to the packaging station by a conveyor belt; a sensor measures the thickness of the wall during the sand-grinding process; turkey is traditionally served during dinners on Thanksgiving In the United States."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: occursDuring(i,j) → (TemporalInterval(i) ∧ TemporalInterval(j)) ∨ (Process(i) ∧ Process(j))",
    "LA2: TemporalInterval(i) ∧ TemporalInterval(j) ∧ occursDuring(i,j) → ∃i1∃i2∃j1∃j2(TemporalInstant(i1) ∧ TemporalInstant(i2) ∧ TemporalInstant(j1) ∧ TemporalInstant(j2) ∧ hasFirstInstant(i,i1) ∧ hasLastInstant(i,i2) ∧ hasFirstInstant(j,j1) ∧ hasLastInstant(j,j2) ∧ precedes(j1,i1) ∧ precedes(i2,j2))",
    "LA3: Process(i) ∧ Process(j) ∧ occursDuring(i,j) → ∃i1∃j1(TemporalInterval(i1) ∧ TemporalInterval(j1) ∧ occupiesTemporalRegion(i,i1) ∧ occupiesTemporalRegion(j,j1) ∧ occursDuring(i1,j1))",
    "LA4: occursDuring(i,j) ↔ ∃k(temporallyFinishes(i,k) ∧ temporallyStarts(k,j))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two intervals or processes i and j when the first instant of the temporal extent of i is later than the first instant of the temporal extent of j and the last instant of the temporal extent of i is earlier than the last instant of the temporal extent of j"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: If i 'occurs during' j then either both are 'temporal intervals' or both are 'process'",
    "LA2: If both i and j are 'temporal intervals' and i 'occurs during' j' then first instant of' j ‘precedes’ the 'first instant of' i and the 'last instant of' i ‘precedes’ the 'last instant of' j",
    "LA3: If both i and j are 'process' and i 'occurs during' j then the 'temporal interval' that i occupies 'occurs during' the 'temporal interval' that j occupies",
    "LA4: i 'occurs during' j if and only if there exists k such that i temporally finishes k and k temporally starts j";
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af237;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af240 .

<https://spec.industrialontologies.org/ontology/core/Core/denotedBy> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "denoted by"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/isSubjectOf>;
  <http://www.w3.org/2004/02/skos/core#example> "one or more individuals are denoted by the name 'John'; vehicle is denoted by a 'vehicle identification number'; molecules with the structure CH3-CH2-OH is denoted by 'ethanol'"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an entity to an information content entity that distinguishes the entity"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/denotes>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000001>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity> .

<https://spec.industrialontologies.org/ontology/core/Core/isSubjectOf> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is subject of"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "temperature is subject of temperature recording; particular individual is subject of SSN; commercial service is subject of commercial service agreement"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "primitive, generic relationship between an entity and some information content entity"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000001>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity> .

<https://spec.industrialontologies.org/ontology/core/Core/denotes> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "denotes"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/isAbout>;
  <http://www.w3.org/2004/02/skos/core#example> "the name 'John' denotes one or more individuals that have that name; 'vehicle identification number' denotes a vehicle; 'ethanol' is a name given by IUPAC which denotes molecules with the structure CH3-CH2-OH"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "The distinguishment implied by denotes is not necessarily unique, which is why this property is not made functional. For example, a name can, at one point, 'denote' multiple individuals.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an information content entity to an entity that the information content entity distinguishes"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000001> .

<https://spec.industrialontologies.org/ontology/core/Core/isAbout> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is about"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a temperature recording is about temperature; SSN is about a particular individual; commercial service agreement is about a commercial service"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "IAO:http://purl.obolibrary.org/obo/IAO_0000136 and CCO:http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "primitive, generic relationship between an information content entity and some entity"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/isSubjectOf>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000001> .

<https://spec.industrialontologies.org/ontology/core/Core/describedBy> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "described by"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/isSubjectOf>;
  <http://www.w3.org/2004/02/skos/core#example> "some current event is described by the content of a newspaper article; some facility visit is described by the content of a visitor's log; some accident is described by the content of an accident report"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an entity to an information content entity that characterizes the entity"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/describes>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000001>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity> .

<https://spec.industrialontologies.org/ontology/core/Core/describes> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "describes"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/isAbout>;
  <http://www.w3.org/2004/02/skos/core#example> "the content of a newspaper article describes some current event; the content of a visitor's log describes some facility visit; the content of an accident report describes some accident"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an information content entity to an entity that the information content entity characterizes"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000001> .

<https://spec.industrialontologies.org/ontology/core/Core/designatedBy> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#InverseFunctionalProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "designated by"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/denotedBy>;
  <http://www.w3.org/2004/02/skos/core#example> "a Web Page's location on the internet is designated by an URL; an individual in USA is designated by SSN ; a particular lot of product is designated by a 'lot number'"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an entity to an information content entity that uniquely distinguishes the entity from other entities"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/designates>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000001>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity> .

<https://spec.industrialontologies.org/ontology/core/Core/designates> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#FunctionalProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "designates"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/denotes>;
  <http://www.w3.org/2004/02/skos/core#example> "a URL designates the location of a Web Page on the internet;SSN designates an individual; 'lot number' designates a particular lot of product"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. To ensure uniqueness, each information content entity can designate exactly one entity. As such, this property is made functional.
2. The uniqueness of the entity is typically within a particular context that is represented in the identification scheme that conveys the meaning of the assignment.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an information content entity to an entity that the information content entity uniquely distinguishes from other entities"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000001> .

<https://spec.industrialontologies.org/ontology/core/Core/dispositionOf> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "disposition of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000197>;
  <http://www.w3.org/2004/02/skos/core#example> "the disposition to decay to an atom of element Y is the disposition of an atom of element X; the disposition to break apart is the disposition of a poorly assembled item"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/RO_0000092";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "dispositionOf(x,y) → Disposition(x) ∧ IndependentContinuant(y) ∧ inheresIn(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a disposition to an independent continuant (the bearer), in which the disposition specifically depends on the bearer for its existence"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x disposition of y holds when x is a 'disposition' and y is a 'independent continuant' and x is 'inheres in' y";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/hasDisposition>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000016>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000004> .

<https://spec.industrialontologies.org/ontology/core/Core/hasDisposition> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has disposition"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000196>;
  <http://www.w3.org/2004/02/skos/core#example> "An atom of element X has the disposition to decay to an atom of element Y; a poorly assembled item has the disposition to break apart"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/RO_0000091";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "hasDisposition(x,y) → IndependentContinuant(x) ∧ Disposition(y) ∧ bearerOf(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an independent continuant (the bearer) to a disposition, in which the disposition specifically depends on the bearer for its existence"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x has disposition y holds when x is a 'independent continuant' and y is a 'disposition' and x is 'bearer of' y";
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000016> .

<https://spec.industrialontologies.org/ontology/core/Core/functionOf> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "function of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000197>;
  <http://www.w3.org/2004/02/skos/core#example> "this catalysis function is a function of this enzyme"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/RO_0000079";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "functionOf(x,y) → Function(x) ∧ IndependentContinuant(y) ∧ inheresIn(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a function to an independent continuant (the bearer), in which the function specifically depends on the bearer for its existence"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x function of y holds when x is a 'function' and y is a 'independent continuant' and x is 'inheres in' y";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/hasFunction>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000034>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000004> .

<https://spec.industrialontologies.org/ontology/core/Core/hasFunction> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has function"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000196>;
  <http://www.w3.org/2004/02/skos/core#example> "this enzyme has function this catalysis function (more colloquially: this enzyme has this catalysis function)"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "A bearer can have many functions, and its functions can exist for different periods of time, but none of its functions can exist when the bearer does not exist. A function need not be realized at all the times that the function exists."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/RO_0000085";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "hasFunction(x,y) → IndependentContinuant(x) ∧ Function(y) ∧ bearerOf(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an independent continuant (the bearer) to a function, in which the function specifically depends on the bearer for its existence"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x has function y holds when x is a 'independent continuant' and y is a 'function' and x is 'bearer of' y";
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000034> .

<http://purl.obolibrary.org/obo/BFO_0000034> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "function"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A function is a disposition that exists in virtue of the bearer's physical make-up and this physical make-up is something the bearer possesses because it came into being either through evolution (in the case of natural biological entities) or through intentional design (in the case of artefacts), in order to realize processes of a certain sort"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The function of a hammer to drive in nails, the function of a heart pacemaker to regulate the beating of a heart through electricity."@en;
  <http://purl.org/dc/elements/1.1/identifier> "064-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "function"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000016>,
    <https://spec.industrialontologies.org/ontology/core/Core/Capability> .

<https://spec.industrialontologies.org/ontology/core/Core/hasComponentPartAtAllTimes>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>, <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has component part at all times"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000111>,
    <https://spec.industrialontologies.org/ontology/core/Core/hasComponentPartAtSomeTime>;
  <http://www.w3.org/2004/02/skos/core#example> "car has component part a chasy; a bioractor has component part a stainless steel vessel"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "hasComponentPartAtAllTimes(x,y) → (MaterialEntity(x) ∧ ¬(FiatObjectPart(x))) ∧ (MaterialEntity(y) ∧ ¬(FiatObjectPart(y))) ∧ hasProperContinuantPartAtAllTimes(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a material entity to another material entity that it has as a proper part at all times it exists"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x has component part at all times y holds when x is a 'material entity' that is not a 'fiat object part' and y is a 'material entity' that is not a 'fiat object part' and x 'has proper continuant part at all times' y";
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af200;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af204 .

<https://spec.industrialontologies.org/ontology/core/Core/hasInput> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has input"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2004/02/skos/core#example> "machine learning execution process has input a dataset;fermentation process has input growth medium; additive manufacturing process has input metal powder;"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/ExtendedRelationOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a process to someone or something physical or digital (continuant) that is a necessary precondition for the process to start"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/isInputOf>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000002> .

<https://spec.industrialontologies.org/ontology/core/Core/isInputOf> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is input of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000056>;
  <http://www.w3.org/2004/02/skos/core#example> "a dataset is an input of a machine learning execution process; growth medium is an input of a fermentation process; metal powder is an input of an additive manufacturing process;"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/ExtendedRelationOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relates someone or something physical or digital (continuant) to a process that it is a necessary precondition for the process to start"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000002>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000015> .

<https://spec.industrialontologies.org/ontology/core/Core/hasMeasuredValueAtSomeTime>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has measured value at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/hasValueExpressionAtSomeTime>;
  <http://www.w3.org/2004/02/skos/core#example> "'80kg' is the value of the weight of a male human on the 5th of October 2022; '37C' is the temperature inside a bioreactor in the 30th min from the process start"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an entity to a value expression that contains the value of the entity measured at some time t"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/isMeasuredValueOfAtSomeTime>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000001>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression> .

<https://spec.industrialontologies.org/ontology/core/Core/hasValueExpressionAtSomeTime>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has value expression at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/describedBy>;
  <http://www.w3.org/2004/02/skos/core#example> "the diameter of a screw head has value expression 1cm that is specified in its design; a bioreactor has value expression 37C that was measured during the production process; \"low risk\" is the value expression of a process parameter \"low risk\" that is based on the risk analysis classification scheme; an antibody has value expression 3 g/l that was generated by a process simulation"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "determined in this context can be interpreted as either being simulated or being measured";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an entity to a value expression that contains the value of the entity determined or set at some time t"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/isValueExpressionOfAtSomeTime>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000001>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression> .

<https://spec.industrialontologies.org/ontology/core/Core/isMeasuredValueOfAtSomeTime>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is measured value of at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/isValueExpressionOfAtSomeTime>;
  <http://www.w3.org/2004/02/skos/core#example> "'80kg' is the measured weight of a particular male human"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a value expression to the entity indicating that the value expression contains the value of the entity measured at some time t"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000001> .

<https://spec.industrialontologies.org/ontology/core/Core/ValueExpression> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "value expression"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "1cm is the value expression of the diameter of a screw head that is specified in its design; 37C is the value expression of the temperature of a bioreactor measured during the production process; \"low risk\" is the value expression of a process parameter based on the risk analysis classification scheme; 3 g/l is the value expression of titer of an antibody generated by a process simulation"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Value expressions comprehend qualitative, semi-quantitative, or quantitative values.

2. All value expressions have a value associated with them through ‘has simple expression value’. This part is not formally captured as we do not want to impose a specific datatype constraint (e.g., xsd:int,rdfs:Literal) with the value expression. Nevertheless, any instance of ‘value expression’ MUST have a ‘has simple expression value’ or its subproperty pointing to a value.

3. This class is intended to provide a single framework for representing unit-value pairs and the connection between a value and a particular classification scheme in the case of qualitative values. While currently, IOF still needs to define classification schemes and quantitative scales, this class is compatible with and thus can be mapped to external ontologies such as the QUDT and the Units Ontology to get the necessary representation of units.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/OBI_0001933";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "ValueExpression(x) → InformationContentEntity(x) ∧ ∃e(Entity(e) ∧ isValueExpressionOfAtSomeTime(x,e))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that contains a value of an entity within a classification scheme or on a quantitative scale"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely constructs for representing classification schemes and quantitative scales are still missing.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "If x is a 'value expression' then x is an 'information content entity' that 'is value expression of at some time' some 'entity'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "value information content entity"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>,
    _:a9bbd3a5197f4d479f29d036f159f0af909 .

<https://spec.industrialontologies.org/ontology/core/Core/isValueExpressionOfAtSomeTime>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is value expression of at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/describes>;
  <http://www.w3.org/2004/02/skos/core#example> "1cm is the value expression of the diameter of a screw head that is specified in its design; 37C is the value expression of the temperature of a bioreactor measured during the production process; \"low risk\" is the value expression of a process parameter based on the risk analysis classification scheme; 3 g/l is the value expression of titer of an antibody generated by a process simulation"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/OBI_0001938";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a value expression to the entity indicating that the value expression contains the value of the entity determined or set at some time t"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000001> .

<https://spec.industrialontologies.org/ontology/core/Core/hasOutput> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has output"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2004/02/skos/core#example> "chemical manufacturing process has output a wastestream; toluene manufacturing process has output a certain quantity of toluene; car manufacturing process has output a car"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "By introducing the condition that it must exist at the end of the process materials that only transitively exist during the process (e.g., reaction intermediary) are excluded from being considered the output.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/ExtendedRelationOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a process to someone or something physical or digital (continuant) that participates in the process such that it is generated or modified during the process, and that it exists at the end of the process"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/isOutputOf>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000002> .

<https://spec.industrialontologies.org/ontology/core/Core/isOutputOf> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is output of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000056>;
  <http://www.w3.org/2004/02/skos/core#example> "wastestream is an output of a chemical manufacturing process; a certain quantity of toluene is an output of a toluene manufacturing process; a car is an output of a car manufacturing process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/ExtendedRelationOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from someone or something physical or digital (continuant) to a process that it participates in such that it is generated or modified during the process, and it exists at the end of the process"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000002>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000015> .

<https://spec.industrialontologies.org/ontology/core/Core/hasProcessCharacteristic>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has process characteristic"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "product production process has process characteristic constant production rate; heating process has process characteristic temperature change of 5F/min"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation between a process and its characteristic"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/processCharacteristicOf>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/ProcessCharacteristic> .

<https://spec.industrialontologies.org/ontology/core/Core/processCharacteristicOf>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "process characteristic of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "constant production rate is the process characteristic of a product production process; temperature change of 1C/min is the process characteristic of a heating process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation between a characteristic and the process it is a characteristic of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/ProcessCharacteristic>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000015> .

<https://spec.industrialontologies.org/ontology/core/Core/ProcessCharacteristic> a
    <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "process characteristic"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "the rate of production of a product production process, heart rate, the rate of temperature change resulting from a heating process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "Here ‘attribute’ is not a technical term.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "ProcessCharacteristic(x) → Occurrent(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "attribute of a process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "This term is expected to remain primitive as it is highly unlikely that a a set of conditions will be created such that no circularity is introduced.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'process characteristic' then x is an 'occurrent'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000003> .

<https://spec.industrialontologies.org/ontology/core/Core/hasQuality> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has quality"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000196>;
  <http://www.w3.org/2004/02/skos/core#example> "this apple has quality this red color"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "A bearer can have many qualities, and its qualities can exist for different periods of time, but none of its qualities can exist when the bearer does not exist."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/RO_0000086";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "hasQuality(x,y) → IndependentContinuant(x) ∧ Quality(y) ∧ bearerOf(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an independent continuant (the bearer) to a quality, in which the quality specifically depends on the bearer for its existence"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x has function y holds when x is a 'independent continuant' and y is a 'quality' and x is 'bearer of' y";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/qualityOf>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000019> .

<https://spec.industrialontologies.org/ontology/core/Core/qualityOf> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "quality of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000197>;
  <http://www.w3.org/2004/02/skos/core#example> "this red color is a quality of this apple"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/RO_0000080";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "qualityOf(x,y) → Quality(x) ∧ IndependentContinuant(y) ∧ inheresIn(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a quality to an independent continuant (the bearer), in which the quality specifically depends on the bearer for its existence"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x disposition of y holds when x is a 'quality' and y is a 'independent continuant' and x is 'inheres in' y";
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000019>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000004> .

<https://spec.industrialontologies.org/ontology/core/Core/hasRole> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has role"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000196>;
  <http://www.w3.org/2004/02/skos/core#example> "this person has role this investigator role (more colloquially: this person has this role of investigator)"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "A bearer can have many roles, and its roles can exist for different periods of time, but none of its roles can exist when the bearer does not exist. A role need not be realized at all the times that the role exists."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/RO_0000087";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "hasRole(x,y) → IndependentContinuant(x) ∧ Role(y) ∧ bearerOf(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an independent continuant (the bearer) to a role, in which the role specifically depends on the bearer for its existence"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x has role y holds when x is a 'independent continuant' and y is a 'role' and x is 'bearer of' y";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000023> .

<https://spec.industrialontologies.org/ontology/core/Core/roleOf> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "role of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000197>;
  <http://www.w3.org/2004/02/skos/core#example> "this investigator role is a role of this person"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/RO_0000081";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "roleOf(x,y) → Role(x) ∧ IndependentContinuant(y) ∧ inheresIn(x,y)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a role to an independent continuant (the bearer), in which the role specifically depends on the bearer for its existence"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x disposition of y holds when x is a 'role' and y is a 'independent continuant' and x is 'inheres in' y";
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000023>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000004> .

<https://spec.industrialontologies.org/ontology/core/Core/hasSpecifiedOutput> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has specified output"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/hasOutput>;
  <http://www.w3.org/2004/02/skos/core#example> "biopharmaceutical production process has specified output an antibody solution of 99.999% purity; a simulation execution has specified output a prediction of part porosity; a temperature measurement process has specified output a temperature measurement result; a car manufacturing process has specified output a car"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "this relation was added to specifically model the outputs that are not byproducts/wasteproducts";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/OBI_0000299";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "hasSpecifiedOutput(x,y) → PlannedProcess(x) ∧ Continuant(y) ∧ ∃o(ObjectiveSpecification(o) ∧ prescribes(o,y) ∧ achievesAtSomeTime(x,o) ∧ hasOutput(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a planned process to someone or something physical or digital (continuant) that is produced or modified in the planned process as prescribed by an objective"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x 'has specified output' y holds when x is a 'planned process' and y is a 'continuant' and x 'has output' y and y is 'prescribed by' some 'objective specification' which x 'achieves at some time'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "has intended output"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/isSpecifiedOutputOf>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000002> .

<https://spec.industrialontologies.org/ontology/core/Core/isSpecifiedOutputOf> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is specified output of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/isOutputOf>;
  <http://www.w3.org/2004/02/skos/core#example> "antibody solution of 99.999% purity is the specified output of a biopharmaceutical production process; prediction of part porosity is a specified output of a simulation execution; temperature measurement result is the specified output of a temperature measurement process; a car is the specified output of a car manufacturing process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "isSpecifiedOutputOf(y,x) → PlannedProcess(x) ∧ Continuant(y) ∧ ∃o(ObjectiveSpecification(o) ∧ prescribes(o,y) ∧ achievesAtSomeTime(x,o) ∧ hasOutput(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from someone or something physical or digital (continuant) to a planned process in which it is produced or modified as prescribed by some objective"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "y 'has specified output' x holds when x is a 'planned process' and y is a 'continuant' and x 'has output' y and y is 'prescribed by' some 'objective specification' which x 'achieves at some time'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "is intended output of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000002>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess> .

<https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "planned process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "A tire manufacturing process occurs as prescribed by a manufacturing plan specification."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. 'Planned' is here functioning as a specifier, rather than as a modifier analogous to 'cancelled' or 'averted'. Therefore, to say that a process is planned is not to say that it has not yet taken place. Rather, it is to say that it is (was or will have been) protocol-driven, instruction-driven, command-driven, or software-driven, or in some combination thereof.
				 
2. 'Planned' means 'protocol driven'. Protocols may be written, spoken, or simply thought – as when upon waking up, we plan, for instance, what to eat for breakfast.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/OBI_0000011";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "unexpected failure events; unexpected malfunctioning of a machine; safety occurrence (that lacks explicit plan specifications);";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "PlannedProcess(x) ↔ Process(x) ∧ ∃s(PlanSpecification(s) ∧ prescribes(s,x))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "process that is prescribed by a plan specification"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'planned process' is defined as exactly an instance of 'process' that is 'prescribed by' some 'plan specification'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af797 .

<https://spec.industrialontologies.org/ontology/core/Core/hasValueExpressionAtAllTimes>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has value expression at all times"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/hasValueExpressionAtSomeTime>;
  <http://www.w3.org/2004/02/skos/core#example> "speed of light in a vacuum has value expression 3×10^8 m/s ; electric charge carried by a single proton has the value expression 1.602176634×10−19 coulombs"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an entity to a value expression that contains the value of the entity which does not change during the entire existence of the entity"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/isValueExpressionOfAtAllTimes>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000001>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression> .

<https://spec.industrialontologies.org/ontology/core/Core/isValueExpressionOfAtAllTimes>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is value expression of at all times"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/isValueExpressionOfAtSomeTime>;
  <http://www.w3.org/2004/02/skos/core#example> "3×10^8 m/s is the value expression of the speed of light in a vacuum; 1.602176634×10−19 coulombs is the value expression of the electric charge carried by a single proton"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a value expression to an entity indicating that the value expression contains the value of the entity which does not change during the entire existence of the entity"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000001> .

<https://spec.industrialontologies.org/ontology/core/Core/isAvailableToAtSomeTime>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is available to at some time"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a roll of aluminum (resource) is avaiable to an agent to use in a forming process, a milling workstation (resource) is available to a manufacturer to produce some parts"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "this definition of 'is available to' is not the same as the state of availability e.g a machine is idle hence it is in the available state";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "isAvailableToAtSomeTime(x,y) → (MaterialEntity(x) ∨ Site(x)) ∧ Agent(y) ∧ ∃p∃o∃c(Process(p) ∧ ObjectiveSpecification(o) ∧ Capability(c) ∧ hasCapability(x,c) ∧ genericallyDependsOnAtSomeTime(o,y) ∧ (realizes(p,c) ∧ participatesInAtSomeTime(y,p)→ AchievesAtSomeTime(p,o)))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a material entity or physical location to an agent that holds when the material entity or physical location have a capability that is needed by the agent to fulfil some objective carried by the agent"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "x is available at some time y holds when x is a 'material entity' or 'site' and y is an 'agent' and x 'has capability' some 'capability' which when 'realized in' some 'process' p that y 'participates in at some time' implies that p 'achieves at some time' some 'objective specification' that 'generically depends on at some time' y";
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af216;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/Agent> .

<https://spec.industrialontologies.org/ontology/core/Core/Agent> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "agent"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "an employee; a transportation & logistics provider; a robot; a scheduling system"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. See the expanded definition under the corresponding role class. The term is formalized here as a defined class by referring to its corresponding role class and exists primarily for ontological modeling and implementation convenience.

2. The IOF has elected to exclude material substances often referred to as agents. That is, they realize some specific function that some person desires (e.g., platinum is a reducing agent in various reduction-type reactions -- as used in a catalytic converter to eliminate or reduce various pollutants in exhausts).

3. The IOF has, at this time, excluded non-human agents, such as animals and other organisms (often referred to as biological agents).""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    """1. Of physical and chemical in nature: Cleaning, vulcanizing, fluxing, indicator, sterilizing, emulisifying, refining.

2. Organisms: animals, cells, parts of organisms (organs, organelles, viruses).""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "Agent(x) ↔ (Person(x) ∨ GroupOfAgents(x) ∨ EngineeredSystem(x)) ∧ ∃r(AgentRole(r) ∧ hasRole(x,r))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "person, group of persons, or engineered system with an agent role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'agent' is defined as exactly an instance of 'person', 'group of agents', or 'engineered system' when it 'has role' some 'agent role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af349 .

<https://spec.industrialontologies.org/ontology/core/Core/isTemporallyOverlappedBy>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "is temporally overlapped by"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "When two plates are being welded at a joint, the heating of current point being welded is temporally overlapped by the cooling of a previously welded point; the receiving process is temporally overlapped by the sending process in a transaction process; Sumerian civilization (c. 3500 BCE - c. 2000 BCE) in Mesopotamia was temporally overlapped by Ancient Egyptian civilization (c. 3000 BCE - 30 BCE)."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "isTemporallyOverlappedBy(x,y) ↔ temporallyOverlaps(y,x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two intervals and processes i and j when the first instant of the temporal extent of j is earlier than and the last instant of the temporal extent of j is later than the first instant of the temporal extent of i, and the last instance of the temporal extent of j is earlier than the last instant of the temporal extent of i"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "'is temporally overlapped by' and 'temporally overlaps' are inverse relations";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/temporallyOverlaps>;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af219;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af222 .

<https://spec.industrialontologies.org/ontology/core/Core/temporallyOverlaps> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "temporally overlaps"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "When two plates are being welded at a joint, the cooling of a previously welded point temporally overlaps the heating of the point which is currently being welded; the sending process temporally overlaps the receiving process in a transaction process; Ancient Egyptian civilization (c. 3000 BCE - 30 BCE) temporally overlapped the Sumerian civilization (c. 3500 BCE - c. 2000 BCE) in Mesopotamia and the Indus Valley Civilization (c. 2600 BCE - c. 1900 BCE) in South Asia."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: temporallyOverlaps(i,j) → (TemporalInterval(i) ∧ TemporalInterval(j)) ∨ (Process(i) ∧ Process(j))",
    "LA2: TemporalInterval(i) ∧ TemporalInterval(j) ∧ temporallyOverlaps(i,j) → ∃i1∃i2∃j1∃j2(TemporalInstant(i1) ∧ TemporalInstant(i2) ∧ TemporalInstant(j1) ∧ TemporalInstant(j2) ∧ hasFirstInstant(i,i1) ∧ hasLastInstant(i,i2) ∧ hasFirstInstant(j,j1) ∧ hasLastInstant(j,j2) ∧ precedes(j1,i2) ∧ precedes(i1,j1) ∧ precedes(i2,j2))",
    "LA3: Process(i) ∧ Process(j) ∧ temporallyOverlaps(i,j) → ∃i1∃j1(TemporalInterval(i1) ∧ TemporalInterval(j1) ∧ occupiesTemporalRegion(i,i1) ∧ occupiesTemporalRegion(j,j1) ∧ temporallyOverlaps(i1,j1))",
    "LA4: temporallyOverlaps(i,j) ↔ ∃k(temporallyFinishes(k,i) ∧ starts(k,j))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two intervals and processes i and j when the first instant of the temporal extent of i is earlier than and the last instant of the temporal extent of i is later than the first instant of the temporal extent of j, and the last instance of the temporal extent of i is earlier than the last instant of the temporal extent of j"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: If i 'temporally overlaps' j then either both are 'temporal intervals' or both are 'process'",
    "LA2: If both i and j are 'temporal intervals' and i 'temporally overlaps' j then the 'first instant’ of j ‘precedes’ the 'last instant of' i and the 'first instant of' i ‘precedes’ the 'first instant’ of j and the 'last instant of' i ‘precedes’ the 'last instant of' j",
    "LA3: If both i and j are 'process' and i 'temporally overlaps' j then the 'temporal interval' that i occupies 'temporally overlaps' the 'temporal interval' that j occupies",
    "LA4: i 'temporally overlaps' j if and only if there exists k that 'temporally finishes' i and 'temporally starts' j";
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af265;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af268 .

<https://spec.industrialontologies.org/ontology/core/Core/measuredByAtSomeTime> a
    <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "measured by at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "the temperature within a production vessel is measured by a temperature sensor at certain points in time during a chemical production process; the weight of a material bulk is measured by a scale"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an entity to a material entity with a measurement capability that got realized to determine the value of the entity, at some time"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/measuresAtSomeTime>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000001>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000040> .

<https://spec.industrialontologies.org/ontology/core/Core/measuresAtSomeTime> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "measures at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "a tempearture sensor measures the temperature within a production vessel at certain points in time during the chemical production process; a scale measures the weight of a material bulk"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "In this context, value is always determined relative to some classification scheme or on a quantitative scale";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a material entity to an entity indicating that the measurement capability of the material entity got realized to determine the value of the entity, at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000001> .

<https://spec.industrialontologies.org/ontology/core/Core/meets> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "meets"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000063>;
  <http://www.w3.org/2004/02/skos/core#example> "When an item is placed on a moving conveyor by a robotic arm, the process of placing the item meets the process of moving the item; summer meets fall; January meets February; the Christmas holiday period meets New Year’s holiday period."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: meets(i,j) → (TemporalInterval(i) ∧ TemporalInterval(j)) ∨ (Process(i) ∧ Process(j))",
    "LA2: TemporalInterval(i) ∧ TemporalInterval(j) ∧ meets(i,j) → ∃i1∃j1(TemporalInstant(i1) ∧ TemporalInstant(j1) ∧ hasLastInstant(i,i1) ∧ hasFirstInstant(j,j1) ∧ occursSimultaneouslyWith(i1,j1))",
    "LA3: Process(i) ∧ Process(j) ∧ meets(i,j) → ∃i1∃j1(TemporalInterval(i1) ∧ TemporalInterval(j1) ∧ occupiesTemporalRegion(i,i1) ∧ occupiesTemporalRegion(j,j1) ∧ meets(i1,j1))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two intervals or processes i and j when the last instant of the temporal extent of i is the same as the first instant of the temporal extent of j"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: If i 'meets' j then either both are 'temporal intervals' or both are 'process'",
    "LA2: If both i and j are 'temporal intervals' and i 'meets' j then the 'last instant of' i 'occurs simultaneously with' the 'first instant of' j",
    "LA3: If both i and j are 'process' and i 'meets' j then the 'temporal interval' that i occupies 'meets' the 'temporal interval' that j occupies";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/metBy>;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af225;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af228 .

<https://spec.industrialontologies.org/ontology/core/Core/metBy> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "met by"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000062>;
  <http://www.w3.org/2004/02/skos/core#example> "When an item is placed on a moving conveyor by a robotic arm, the process of moving of the item is met by the process of placing the item; fall is met by summer; February is met by January; the New Year’s holiday period is met by the Christmas holiday period."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "metBy(x,y) ↔ meets(y,x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two intervals or processes i and j when the last instant of the temporal extent of j is the same as the first instant of the temporal extent of i"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "'met by' and 'meets' are inverse relations";
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af231;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af234 .

<https://spec.industrialontologies.org/ontology/core/Core/observedByAtSomeTime> a
    <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "observed by at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "a chemical reaction in an experiment is observed by a scientist, a machining process is observed by an operator, a group of COVID patients are observed by a doctor"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "observedByAtSomeTime (y, x) → Agent(x) ∧ Entity(y) ∧ ∃p∃i(Process(p) ∧ InformationContentEntity(i) ∧ participatesInAtSomeTime(x,p) ∧ hasOutput(p,i) ∧ isAbout(i,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an entity to an agent indicating that the agent participates in some process that outputs information about the entity, at some time"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "p is observed by b at some time t holds when p is an 'entity' and b is an 'agent' and there is a 'process' in which b 'participates in at some time' and that 'has output' some 'information content entity' that 'is about' p";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/observesAtSomeTime>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000001>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/Agent> .

<https://spec.industrialontologies.org/ontology/core/Core/observesAtSomeTime> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "observes at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "a scientist observing a chemical reaction in an experiment, an operator observes a machining process, a doctor observes a group of COVID patients"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "this property was not put under participates in at some time because the target of observation can be continuant or an occurent and in the case of an occurent an agent that observes the occurent might not participate in that occurent";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "observesAtSomeTime (x, y) → Agent(x) ∧ Entity(y) ∧ ∃p∃i(Process(p) ∧ InformationContentEntity(i) ∧ participatesInAtSomeTime(x,p) ∧ hasOutput(p,i) ∧ isAbout(i,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an agent to an entity indicating that the agent participates in some process that outputs information about the entity, at some time"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "b observes p at some time t when b is an 'agent' and p is an 'entity and there is a 'process' in which b 'participates in at some time' and that 'has output' some 'information content entity' that 'is about' p";
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/Agent>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000001> .

<https://spec.industrialontologies.org/ontology/core/Core/occursSimultaneouslyWith>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>, <http://www.w3.org/2002/07/owl#TransitiveProperty>,
    <http://www.w3.org/2002/07/owl#SymmetricProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "occurs simultaneously with"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "The rotation of the chuck in a lathe occurs simultaneously with the running of the motor."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: occursSimultaneouslyWith(i,j) → (TemporalInstant(i) ∧ TemporalInstant(j)) ∨ (TemporalInterval(i) ∧ TemporalInterval(j)) ∨ (Process(i) ∧ Process(j)) ∧ (ProcessBoundary(i) ∧ ProcessBoundary(j))",
    "LA2: TemporalInstant(i) ∧ TemporalInstant(j) ∧ occursSimultaneouslyWith(i,j) → ∃k∃l(TemporalInstantValueExpression(k) ∧ TemporalInstantValueExpression(l) ∧ hasValueExpressionAtAllTimes(i,k) ∧ hasValueExpressionAtAllTimes(j,l) ∧ ∃v1∃v2(hasDateTimeInstantValue(k,v1) ∧ hasDateTimeInstantValue(l,v2) ∧ (v1 = v2)))",
    "LA3: TemporalInterval(i) ∧ TemporalInterval(j) ∧ occursSimultaneouslyWith(i,j) → ∃i1∃i2∃j1∃j2(TemporalInstant(i1) ∧ TemporalInstant(j1) ∧ TemporalInstant(i2) ∧ TemporalInstant(j2) ∧ hasFirstInstant(i,i1) ∧ hasLastInstant(i,i2) ∧ hasFirstInstant(j,j1) ∧ hasLastInstant(j,j2) ∧ occursSimultaneouslyWith(i1,j1) ∧ occursSimultaneouslyWith(i2,j2))",
    "LA4: Process(i) ∧ Process(j) ∧ occursSimultaneouslyWith(i,j) → ∃i1∃j1(TemporalInterval(i1) ∧ TemporalInterval(j1) ∧ occupiesTemporalRegion(i,i1) ∧ occupiesTemporalRegion(j,j1) ∧ occursSimultaneouslyWith(i1,j1))",
    "LA5: ProcessBoundary(i) ∧ ProcessBoundary(j) ∧ occursSimultaneouslyWith(i,j) → ∃i1∃j1(TemporalInstant(i1) ∧ TemporalInstant(j1) ∧ occupiesTemporalRegion(i,i1) ∧ occupiesTemporalRegion(j,j1) ∧ occursSimultaneouslyWith(i1,j1))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two time instants when they are simultaneous or between two intervals when they have same first and last instants or between two processes or two process boundaries when their temporal extents are the same"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: if i 'occurs simultaneously with' j then either i and j are both ‘temporal instant’, or both are ‘temporal interval’ or both are ‘process’ or both are ‘process boundary’",
    "LA2: If both i and j are both ‘temporal instant’ and i 'occurs simoultaneously with' j then 'temporal instant value expression' of i is equal to the 'temporal instant value expression' of j",
    "LA3: If i and j are both ‘temporal interval’ and i 'occurs simoultaneously with' j then the 'first instant of' i 'occurs simoultaneously with' the 'first instant of' j and the 'last instant of' i 'occurs simoultaneously with' the 'last instant of' j",
    "LA4: If both i and j are ‘process’ and i 'occurs simoultaneously with' j then the ‘temporal interval’ occupied by i ‘occurs simoultaneously with’ the ‘temporal interval’ occupied by j",
    "LA5: If i and j are both ‘process boundary’ and i 'occurs simoultaneously with' j then the ‘temporal instant’ that i occupies 'occurs simoultaneously with' ‘temporal instant’ that j occupies";
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af243;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af248 .

<https://spec.industrialontologies.org/ontology/core/Core/prescribedBy> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "prescribed by"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/isSubjectOf>;
  <http://www.w3.org/2004/02/skos/core#example> "some Artifact or Facility is modeled by a blueprint; a set of rules to be followed while acting in a role within a profession are prescribed by a professional code of conduct; tasks that need to be performed to achieve the Objectives of the Operation are prescribed by the Operation Plan"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an entity to an information content entity that the information content entity serves as a collection of rules or guide for if the entity is something that unfolds in time (occurrent), or as a model if the entity is someone or something physical or digital (continuant)"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000001>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity> .

<https://spec.industrialontologies.org/ontology/core/Core/prescribes> a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "prescribes"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/isAbout>;
  <http://www.w3.org/2004/02/skos/core#example> "a blueprint serves as a model of some Artifact or Facility; a professional code of conduct serves as a set of rules to be followed while acting in a role within that profession; an Operations Plan serves as a guide for the tasks that need to be performed to achieve the Objectives of the Operation"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an information content entity to an entity such that the information content entity serves as a collection of rules or guide for the entity if the entity is something that unfolds in time (occurrent), or as a model if the entity is someone or something physical or digital (continuant)"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000001> .

<https://spec.industrialontologies.org/ontology/core/Core/recognizedByAtSomeTime>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "recognized by at some time"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a failure event is recognized by an operator that results in information about the event such as the time of occurrence and the description about the failure; a defect on a part is recognized by a quality control engineer that results in information about the defect such as the nature of the defect and the cause of the defect"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an entity to an agent that is able to describe the entity or is able to associate an information content entity that describes the entity, at some time"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/recognizesAtSomeTime>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000001>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/Agent> .

<https://spec.industrialontologies.org/ontology/core/Core/recognizesAtSomeTime> a
    <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "recognizes at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "operator recognizes a failure event that results in information about the event such as the time of occurrence and the description about the failure, a quality control engineer recognizes a defect on a part that results in information about the defect such as the nature of the defect and the cause of the defect"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "Recognition is preceded by an observation of an entity that is related to the entity being recognized or the entity being recognized is an entity that is an attribute of the entity being observed",
    "this property was not put under participates in at some time because the target of recognition can be continuant or an occurent and in the case of an occurent an agent that recognizes the occurent might not participate in that occurent";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an agent to an entity that the agent is able to describe the entity or is able to associate an information content entity that describes the entity, at some time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/Agent>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000001> .

<https://spec.industrialontologies.org/ontology/core/Core/requirementSatisfiedBy>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "requirement satisfied by"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "a UML requirement specification is satisfied by a a piece of software; functional requirement specification of a car is satisfied by its desgn specification"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from a requirement specification to an entity that conforms to the requirement specification"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/satisfiesRequirement>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/RequirementSpecification>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.obolibrary.org/obo/BFO_0000001> .

<https://spec.industrialontologies.org/ontology/core/Core/satisfiesRequirement> a
    <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "satisfies requirement"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a piece of software satisfies a UML requirement specification, a design specification of a car satisfies its functional requirement specification"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation from an entity to a requirement specification that the entity conforms to"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000001>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/RequirementSpecification> .

<https://spec.industrialontologies.org/ontology/core/Core/RequirementSpecification>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "requirement specification"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "UML use case document, competency questions, high level activity diagram"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "Being a requirement specification can be context specific. For example, a UML class diagram may be a requirement specification for a data exchange specification or a design specification for software code.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://demo-irm-dnvgl.northeurope.cloudapp.azure.com/ontology/requirement-ontology/core/A01A";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: RequirementSpecification(x) → InformationContentEntity(x) ∧ ∃y(ObjectiveSpecification(y) ∧ isAbout(x,y))",
    "LA2: InformationContentEntity(x) ∧ ∃y(Entity(y) ∧ satisfiesRequirement(y,x)) → RequirementSpecification(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that prescribes a set of requirements"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "See the general discussion and rationale provided for informational entities under 'information content entity'.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: if x is a 'requirement specification' then x is an 'information content entity' that 'is about' some 'objective specification'",
    "LA2: if x is an 'information content entity' and exists an entity that 'satisfies requirement' x then x is a 'requirement specification'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>,
    _:a9bbd3a5197f4d479f29d036f159f0af849 .

<https://spec.industrialontologies.org/ontology/core/Core/temporallyFinishedBy> a
    <http://www.w3.org/2002/07/owl#ObjectProperty>, <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "temporally finished by"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "A delivery process is temporally finished by the generation of “proof of delivery”; a football match is temporally finished by the Referee’s final whistle; every week is temporally finished by a Sunday."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "temporallyFinishedBy(x,y) ↔ temporallyFinishes(y,x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two intervals or processes i and j when the last instant of the temporal extent of j is the same as the last instant of the temporal extent of i and the first instant of i is precedes the first instant of j"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "'temporally finished by' and 'temporally finishes' are inverse relations";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/temporallyFinishes>;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af253;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af256 .

<https://spec.industrialontologies.org/ontology/core/Core/temporallyFinishes> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "temporally finishes"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "The generation of “proof of delivery” temporally finishes the delivery process; Referee’s final whistle temporally finishes the football match; Sunday temporally finishes the week."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: temporallyFinishes(i,j) → (TemporalInterval(i) ∧ TemporalInterval(j)) ∨ (Process(i) ∧ Process(j))",
    "LA2: TemporalInterval(i) ∧ TemporalInterval(j) ∧ temporallyFinishes(i,j) → ∃i1∃i2∃j1∃j2(TemporalInstant(i1) ∧ TemporalInstant(i2) ∧ TemporalInstant(j1) ∧ TemporalInstant(j2) ∧ hasFirstInstant(i,i1) ∧ hasLastInstant(i,i2) ∧ hasFirstInstant(j,j1) ∧ hasLastInstant(j,j2) ∧ occursSimultaneouslyWith(i2,j2) ∧ precedes(j1,i1))",
    "LA3: Process(i) ∧ Process(j) ∧ temporallyFinishes(i,j) → ∃i1∃j1(TemporalInterval(i1) ∧ TemporalInterval(j1) ∧ occupiesTemporalRegion(i,i1) ∧ occupiesTemporalRegion(j,j1) ∧ temporallyFinishes(i1,j1))",
    "LA4: temporallyFinishes(i,j) ↔ ∃k∃l(meets(i,k)∧meets(j,k) ∧ before(l,i) ∧ meets(l,j))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two intervals or processes i and j when the last instant of the temporal extent of i is the same as the last instant of the temporal extent of j and the first instant of j is precedes the first instant of i"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: If i 'temporally finishes' j then either both are 'temporal intervals' or both are 'process'",
    "LA2: If both i and j are 'temporal intervals' and i 'temporally finishes' j then the 'last instant’ of i ‘occurs simultaneously with’ the 'last instant of' j and the 'first instant of' j 'precedes' the 'first instant’ of i",
    "LA3: If both i and j are 'process' and i 'temporally finishes' j then the 'temporal interval' that i occupies 'temporally finishes' the 'temporal interval' that j occupies",
    "LA4: i 'temporally finishes' j if and only if there exists k such that i 'meets' k and j 'meets' k, and there exists l that is 'before' i and 'meets' j";
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af259;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af262 .

<https://spec.industrialontologies.org/ontology/core/Core/temporallyStartedBy> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "temporally started by"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topObjectProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "An internal combustion engine is temporally started (running) by the process of cranking; some machine is temporally started (running) by pressing a switch; every year is temporally started by the New Year’s Day."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "temporallyStartedBy(x,y) ↔ temporallyStarts(y,x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two intervals or processes i and j when the first instant of the temporal extent of j is the same as first the instant of the temporal extent of i and the last instant of j precedes the last instant of i"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "'temporally started by' and 'temporally starts' are inverse relations";
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/temporallyStarts>;
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af271;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af274 .

<https://spec.industrialontologies.org/ontology/core/Core/temporallyStarts> a <http://www.w3.org/2002/07/owl#ObjectProperty>,
    <http://www.w3.org/2002/07/owl#TransitiveProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "temporally starts"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "the process of cranking temporally starts (the running of) an internal combustion engine; the pressing of a switch temporally starts (the running of) some machine; the New Year’s Day temporally starts a year."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://dl.acm.org/doi/10.1145/182.358434";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: temporallyStarts(i,j) → (TemporalInterval(i) ∧ TemporalInterval(j)) ∨ (Process(i) ∧ Process(j))",
    "LA2: TemporalInterval(i) ∧ TemporalInterval(j) ∧ temporallyStarts(i,j) → ∃i1∃i2∃j1∃j2(TemporalInstant(i1) ∧ TemporalInstant(i2) ∧ TemporalInstant(j1) ∧ TemporalInstant(j2) ∧ hasFirstInstant(i,i1) ∧ hasLastInstant(i,i2) ∧ hasFirstInstant(j,j1) ∧ hasLastInstant(j,j2) ∧ occursSimultaneouslyWith(i1,j1) ∧ precedes(i2,j2))",
    "LA3: Process(i) ∧ Process(j) ∧ temporallyStarts(i,j) → ∃i1∃j1(TemporalInterval(i1) ∧ TemporalInterval(j1) ∧ occupiesTemporalRegion(i,i1) ∧ occupiesTemporalRegion(j,j1) ∧ temporallyStarts(i1,j1))",
    "LA4: temporallyStarts(i,j) ↔ ∃k∃l(meets(k,i) ∧ meets(k,j) ∧ before(i,l) ∧ meets(j,l))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that holds between two intervals or processes i and j when the first instant of the temporal extent of i is the same as first the instant of the temporal extent of j and the last instant of i precedes the last instant of j"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: If i 'temporally starts' j then either both are 'temporal intervals' or both are 'process'",
    "LA2: If both i and j are 'temporal intervals' and i 'temporally starts' j then the 'first instant’ of i ‘occurs simultaneously with’ the 'first instant of' j and the 'last instant of' i 'precedes' the 'last instant of' j",
    "LA3: If both i and j are 'process' and i 'temporally starts' j then the 'temporal interval' that i occupies 'temporally starts' the 'temporal interval' that j occupies",
    "LA4: i 'temporally starts' j if and only if there exists k that 'meets' i and j and there exists l such that i is 'before' l and j 'meets' l";
  <http://www.w3.org/2000/01/rdf-schema#domain> _:a9bbd3a5197f4d479f29d036f159f0af277;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af280 .

<https://spec.industrialontologies.org/ontology/core/Core/Customer> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "customer"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "GE aviation subsidiary and GE Transportation subsidiary when they utilize the steel bought for them by the GE Conglomerate; a person when they utilize a lap top that they bought from Target; a person when they subscribe for a phone plan"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "See the expanded definition under the corresponding role class. The term is formalized here as a defined class by referring to its corresponding role class and exists primarily for ontological modeling and implementation convenience.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "Customer(x) ↔ (Person(x) ∨ Organization(x)) ∧ ∃r(CustomerRole(r) ∧ hasRole(x,r))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "person or organization which has a customer role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'customer' is defined as exactly an instance of 'person' or 'organization' that 'has role' some 'customer role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Agent>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af460 .

<https://spec.industrialontologies.org/ontology/core/Core/MaterialProduct> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "material product"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> """1. Natural resources: the seashells lying on the beach that some person collects, packages and sells; the iron ore in a mountain the rights to which some mining company has just purchased which they intend to mine and sell to iron-making processors;

2. Any manufactured good when it is offered for sale, supplied or being bought"""@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. The definition does exclude services sold as product which deviates from some standard definitions and economic theory. 
Services as products as well as software products will be considered in the next version of the IOF Core

2. See expanded definition under the corresponding role class. The term is formalized here as a defined class by referring to its corresponding role class and exists primarily for ontological modeling and implementation convenience.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    """certified pre-owned warranty plan; software as a service (SaaS); training course; consultancy services;
Office 365""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "MaterialProduct(x) ↔ MaterialEntity(x) ∧ ∃r(MaterialProductRole(r) ∧ hasRole(x,r))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "material entity which has the material product role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'material product' is defined as exactly an instance of 'material entity' that is the 'has role' some 'material product role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af692 .

<https://spec.industrialontologies.org/ontology/core/Core/Supplier> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "supplier"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "logistics service provider; vending machine; the material handling department (which manages the raw material and finished goods in company warehouses, and provides material handling services to manufacturing and other departments within its factories)"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "See the expanded definition under the corresponding role class. The term is formalized here as a defined class by referring to its corresponding role class and exists primarily for ontological modeling and implementation convenience.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "Supplier(x) ↔ Person(x) ∨ Organization(x) ∧ ∃r(SupplierRole(r) ∧ hasRole(x,r))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "person or organization which has a supplier role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'supplier' is defined as exactly an instance of 'person' or 'organization' that 'has role' some 'supplier role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Agent>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af877 .

<https://spec.industrialontologies.org/ontology/core/Core/Event> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "event"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a machine failure event, the amount of cells in a bioreactor reaches a certain threshold"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "Oxford Languages, term by the same name";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "an event in discrete event simulation is too generic and that notion of event is just BFO:Occurrent";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "Event(x) → (Process(x) ∨ ProcessBoundary(x)) ∧ ∃y(Agent(y) ∧ recognizedByAtSomeTime(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "phenomena (process or process boundary) that is recognized by an agent and typically recorded"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "More conditions (differentia) need to be agreed upon by the domain experts as not all occurrents recognized by an agent are events.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is an 'event' then x is a 'process' or 'process boundary' and there is some 'agent' that 'recognizes at some time' x";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000003>,
    _:a9bbd3a5197f4d479f29d036f159f0af519, _:a9bbd3a5197f4d479f29d036f159f0af522 .

<https://spec.industrialontologies.org/ontology/core/Core/CommercialService> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "commercial service"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "Lufthansa Aviation Services maintains airplanes for United Airlines when the plane stops at Frankfurt International Airport."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. A consumption process means using or benefiting.

2.Typically, the service provisioning process and consumption process coincide temporally which is different from a material product that is consumed (used) only after supplied.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "Commercialervice(x) → BusinessProcess(x) ∧ ∃p∃y∃a∃s(CommercialServiceSpecification(p) ∧ ServiceProvider(y) ∧ CommercialServiceAgreement(s) ∧ SupplyingBusinessProcess(a) ∧ hasParticipantAtSomeTime(x,y) ∧ hasOccurentPart(x,a) ∧ prescribedBy(x,p) ∧ isSubjectOf(x,s))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "business process that consists of a service provisioning process and a consumption process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, service consumption needs to be formalized.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'commercial service' then x is a 'business process' that is 'prescribed by' some 'commercial service specification' and that 'has participant at some time' some 'service provider' 'and x 'has occurent part' some 'supplying business process' and x 'is subject of' some 'commercial service agreement'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/BusinessProcess>,
    _:a9bbd3a5197f4d479f29d036f159f0af428, _:a9bbd3a5197f4d479f29d036f159f0af429, _:a9bbd3a5197f4d479f29d036f159f0af430,
    _:a9bbd3a5197f4d479f29d036f159f0af431 .

<https://spec.industrialontologies.org/ontology/core/Core/BusinessProcess> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "business process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "product production process; manufacturing enterprise process; finance operation; logistics operation."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "This definition leaves open the possibility that the business entity that carries the plan that prescribes the process, has no direct participation in the process, which would imply that some 3rd-party agent is playing a causal role as the process unfolds, and is acting on behalf of the Business Entity's interests.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "ISO 15704 and APICS";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "BusinessProcess (p) → PlannedProcess(p) ∧ ∃o∃b∃s∃y (ObjectiveSpecification(o) ∧ BusinessOrganization(b) ∧ PlanSpecification(s) ∧ isCarrierOfAtSomeTime(b,o) ∧ continuantPartofAtAllTimes(o,s) ∧ Agent(y) ∧ actsOnBehalfOfAtSomeTime(y,b) ∧ participatesInAtSomeTime(y,x))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "planned process which is prescribed by a plan specification with one or more objectives specified by a business organization"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "More conditions (differentia) need to be agreed upon by the domain experts.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'business process' then x is a 'planned process' that 'has participant at some time' some 'agent' that 'acts on behalf of at some time' a 'business organization' that 'is carrier of at some time' some 'objective specification' that is 'continuant part of at all times' a 'plan specification' that 'prescribes' x";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess>,
    _:a9bbd3a5197f4d479f29d036f159f0af394, _:a9bbd3a5197f4d479f29d036f159f0af399 .

<https://spec.industrialontologies.org/ontology/core/Core/BusinessOrganization> a
    <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "business organization"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "Mercedes-Benz, Deloitte, Pfizer, Airbus"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "Business entities are formally organized according to the laws prevailing in the locales and countries in which it operates or conducts business, and include companies, corporations, partnerships, or sole proprietorships.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://en.wikipedia.org/wiki/Business";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "BusinessOrganization(x) ↔ Organization(x) ∧ ∃f(BusinessFunction(f) ∧ hasFunction(x,f))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "organization engaging in or planning to engage in any activity of buying and selling goods or services for a profit"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of a business organization' is defined as exactly an instance of 'organization' that 'has function' some 'business function'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af390 .

<https://spec.industrialontologies.org/ontology/core/Core/Organization> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "organization"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "Members of organizations are people or other organizations. However, an organization may be composed of several sub-organizations (e.g., departments). This composition should be modeled through 'proper continuant part' relations.";
  <http://www.w3.org/2004/02/skos/core#example> "goverment, a company, a political party, a city goverment, yakuza, department, division"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. An organization may have a set of organizational rules that, among other things, prescribe a set of roles and responsibilities its members bear, how important decisions are made, and how members should behave when acting on behalf of the organization.
2. As introduced here, the mere gathering of a group of persons does not imply the existence of an organization, unless and until such members agree to form an organization and have agreed to a common set of objectives as mentioned in point 1."""@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://spec.edmcouncil.org/fibo/ontology/FND/Organizations/Organizations/Organization";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "Organization(x) → ∀y(hasMemberPartAtSomeTime(x,y) → (Person(y) ∨ Organization(y))) ∧ ∀z(hasProperContinuantPartAtSomeTime(x,z) → Organization(z))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "Organization(x) ↔ OrganizedGroupOfAgents(x) ∧ ∃p∃i(Person(p) ∧OrganizationIdentifier(i) ∧ designatedBy(x,i) ∧ hasMemberPartAtAllTimes(x,p))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "group of persons that identifies itself by some name and pursues a common set of plans and objectives"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is an 'organization' then whenever x 'has member part at some time' y that y must be a 'peson' or 'organization' and whenever x 'has proper continuant part at some time' z that z must be a 'organization'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'organization' is defined exactly as an instance of 'organized group of agents' that is 'designated by' some 'organization identifier' and that 'has member part at all times' one or more 'person'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/OrganizedGroupOfAgents>,
    _:a9bbd3a5197f4d479f29d036f159f0af770, _:a9bbd3a5197f4d479f29d036f159f0af774;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af764 .

<https://spec.industrialontologies.org/ontology/core/Core/hasDateTimeInstantValue>
  a <http://www.w3.org/2002/07/owl#DatatypeProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has date-time instant value"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <https://spec.industrialontologies.org/ontology/core/Core/hasSimpleExpressionValue>;
  <http://www.w3.org/2004/02/skos/core#example> "The time point at 16:30pm at UTC on 3rd March 2023 is asserted by the associated (‘is value expression of at all times’) ‘temporal instant value expression’ having date-time value (‘has date-time instant value’) 2023-03-03T16:30:00Z."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. This data property may be used to specify a ‘temporal instant value expression’ in XSD date-time format (e.g., 2002-10-10T17:00:00Z). For a detailed description of xsd:DateTime, see https://www.w3.org/TR/xmlschema-2/#dateTime. 
2. While comparing two ‘temporal instant value expression’, it is important to make sure that their date-time expressions are given in the same calendar and clock system.
3. For detailed expression of date and time in a specific calendar system, use a suitable subclass of TemporalPosition class from Time ontology (https://www.w3.org/TR/owl-time/) instead of ‘temporal instant value expression’ (see mapping file https://spec.industrialontologies.org/ontology/core/commonstocoremapping/MappingOWLTimeToIOF/)."""@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "data property that relates a time instance value to a XSD date-time"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/TemporalInstantValueExpression>;
  <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2001/XMLSchema#dateTime> .

<https://spec.industrialontologies.org/ontology/core/Core/hasSimpleExpressionValue>
  a <http://www.w3.org/2002/07/owl#DatatypeProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has simple expression value"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.w3.org/2002/07/owl#topDataProperty>;
  <http://www.w3.org/2004/02/skos/core#example> "value expression with the unit 'C' that is the value expression of temperature has simple expression value \"37\""@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. the literal represents the magnitude or a
category within a classification scheme of an entity that the value expression is the value expression of
2. The label 'simple expression' was chosen due to the possiblity of introduction of a 'complex expression' object property in the future release that would be utilized for representation of things such as mathematical formulas""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "data property that relates a value expression to a literal"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression> .

<https://spec.industrialontologies.org/ontology/core/Core/TemporalInstantValueExpression>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "temporal instant value expression"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "The time instant at which a train arrives at a station has its clock time expressed by a temporal instant value expression."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "1. This class was introduced as a helper class to map OWL time to IOF Core. For detailed expression of date and time in a specific calendar system, use a suitable subclass of TemporalPosition class from Time ontology (https://www.w3.org/TR/owl-time/) instead of ‘temporal instant value expression’ (see mapping file https://spec.industrialontologies.org/ontology/core/commonstocoremapping/MappingOWLTimeToIOF/)"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "TemporalInstantValueExpression(x) ↔ ValueExpression(x) ∧ ∃y(TemporalInstant(y) ∧ isValueExpressionOfAtAllTimes(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "value expression that describes the position of a time instant in the time line"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'temporal instant value expression' is defined exactly as an instance of 'value expression' that 'is value expression of at all times' some 'temporal instant'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af905 .

<http://purl.obolibrary.org/obo/BFO_0000009> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "two-dimensional spatial region"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A two-dimensional spatial region is a spatial region that is a whole consisting of a surface together with zero or more surfaces and/or spatial regions of lower dimension as parts"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The surface of a sphere-shaped part of space, an infinitely thin plane in space."@en;
  <http://purl.org/dc/elements/1.1/identifier> "039-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "two-dimensional spatial region"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000006>,
    _:a9bbd3a5197f4d479f29d036f159f0af291 .

<http://purl.obolibrary.org/obo/BFO_0000018> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "zero-dimensional spatial region"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A zero-dimensional spatial region is one or a collection of more than one spatially disjoint points in space"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The spatial region occupied at some time instant by the North Pole."@en;
  <http://purl.org/dc/elements/1.1/identifier> "037-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "zero-dimensional spatial region"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000006>,
    _:a9bbd3a5197f4d479f29d036f159f0af304 .

<http://purl.obolibrary.org/obo/BFO_0000026> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "one-dimensional spatial region"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A one-dimensional spatial region is a whole consisting of a line together with zero or more lines and/or points as parts"@en;
  <http://www.w3.org/2004/02/skos/core#example> "An edge of a cube-shaped portion of space, a line connecting two points, two parallel lines extended in space."@en;
  <http://purl.org/dc/elements/1.1/identifier> "038-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "one-dimensional spatial region"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000006>,
    _:a9bbd3a5197f4d479f29d036f159f0af305 .

<http://purl.obolibrary.org/obo/BFO_0000028> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "three-dimensional spatial region"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) A three-dimensional spatial region is a whole consisting of a spatial volume together with zero or more spatial volumes and/or spatial regions of lower dimension as parts"@en;
  <http://www.w3.org/2004/02/skos/core#example> "A cube-shaped region of space, a sphere-shaped region of space, the region of space occupied by all and only the planets in the solar system at some point in time."@en;
  <http://purl.org/dc/elements/1.1/identifier> "040-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "three-dimensional spatial region"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000006>,
    _:a9bbd3a5197f4d479f29d036f159f0af309 .

<http://purl.obolibrary.org/obo/BFO_0000140> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "continuant fiat boundary"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) b is a continuant fiat boundary means: b is an immaterial entity that is of zero, one or two dimensions, which is such that there is no time t when b has a spatial region as continuant part at t, and whose location is determined in relation to some material entity"@en;
  <http://www.w3.org/2004/02/skos/core#example> "As for fiat point, fiat line, fiat surface."@en;
  <http://purl.org/dc/elements/1.1/identifier> "029-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "continuant fiat boundary"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000141>,
    _:a9bbd3a5197f4d479f29d036f159f0af340, _:a9bbd3a5197f4d479f29d036f159f0af341 .

<http://purl.obolibrary.org/obo/BFO_0000142> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "fiat line"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) a fiat line is a one-dimensional continuant fiat boundary that is continuous"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The Equator, all geopolitical boundaries, all lines of latitude and longitude, the median sulcus of your tongue, the line separating the outer surface of the mucosa of the lower lip from the outer surface of the skin of the chin."@en;
  <http://purl.org/dc/elements/1.1/identifier> "032-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "fiat line"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000140>,
    _:a9bbd3a5197f4d479f29d036f159f0af342 .

<http://purl.obolibrary.org/obo/BFO_0000147> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "fiat point"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) a fiat point is a zero-dimensional continuant fiat boundary that consists of a single point"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The geographic North Pole; the quadripoint where the boundaries of Colorado, Utah, New Mexico and Arizona meet, the point of origin of some spatial coordinate system."@en;
  <http://purl.org/dc/elements/1.1/identifier> "031-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "fiat point"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000140>,
    _:a9bbd3a5197f4d479f29d036f159f0af347 .

<http://purl.obolibrary.org/obo/BFO_0000145> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "relational quality"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "b is a relational quality =Def b is a quality and there exists c and d such that b and c are not identical, & b s-depends on c & b s-depends on d"@en;
  <http://www.w3.org/2004/02/skos/core#example> "A marriage bond, an instance of love, an obligation between one person and another."@en;
  <http://purl.org/dc/elements/1.1/identifier> "057-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "relational quality"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000019> .

<http://purl.obolibrary.org/obo/BFO_0000146> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "fiat surface"@en;
  <http://www.w3.org/2004/02/skos/core#definition> "(Elucidation) a fiat surface is a two-dimensional continuant fiat boundary that is self-connected"@en;
  <http://www.w3.org/2004/02/skos/core#example> "The surface of the Earth, the plane separating the smoking from the non-smoking zone in a restaurant"@en;
  <http://purl.org/dc/elements/1.1/identifier> "033-BFO";
  <http://www.w3.org/2004/02/skos/core#prefLabel> "fiat surface"@en;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000140>,
    _:a9bbd3a5197f4d479f29d036f159f0af346 .

<https://spec.industrialontologies.org/ontology/core/Core/ActionSpecification> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "action specification"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "pour the contents of flask 1 into flask 2; to loosen a screw with a screwdriver, grab the screw driver with your hand, insert the tip into the head of the screw, apply forward pressure into the screwdriver, and rotate the screwdriver counterclockwise."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. An action specification is typically a part of some plan specification.

2. All actions change the universe in some fashion. That is, they have outcomes, whether desired ones or not. Since desired outcomes are reasons for the existence of an action specification, we might argue that all action specifications are, in fact, plan specifications, with desired outcomes as objectives. However, our intent here is to capture instances of action specifications wherein objectives or desired outcomes are not explicitly stated and to delinate 'plan specifications' as cases where the objectives and the corresponding actions are explicitly stated. This is why the class is asserted directly under the information content entity.

3. Although not formalized at this stage, an action specification may prescribe a kind of process in more detail by prescribing the sequence of actions one or more participants are to do or by prescribing the actions persons bearing various roles are to do in bringing about the process. The latter would be relevant in situations where a particular participant bears two (or even more roles) in a process. An example of the latter would be a particular shop floor worker bearing and realizing both the role of the operator and that of the inspector as prescribed by some action specification and as realized in today's occurrences of some punch-press process.

4.  Action specification can be used together with plan specification to create a hierarchy of work instruction composition.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "Information Artifact Ontology, http://purl.obolibrary.org/obo/IAO_0000030 and also the Common Core Ontology, http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology (term Action Regulation)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "InformationContentEntity(x) ∧ ∃p(Process(p) ∧ prescribes(x,p)) → ActionSpecification(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that prescribes what participants shall do in a process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "See the rationale provided under information content entity for informational entity types.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is an 'information content entity' that 'prescribes' some 'process' then x is an 'action specification'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "actionable work instruction"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity> .

<https://spec.industrialontologies.org/ontology/core/Core/AgentRole> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "agent role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a person has an employee role when he/she acts on behalf of the business organization that employs them"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1.The IOF has elected to exclude material substances that may, at times, act like or are often referred to as agents, in that they realize some specific function that some person desires (e.g., platinum is a reducing agent in various reduction-type reactions -- as used in a catalytic converter to eliminate or reduce various pollutants in exhausts).

2. The IOF has at this time excluded other types of non-human agents, such as animals and other organisms (often referred to as biological agents).

3. in case the 'material entity' is an engineered system or group of agents or person acting on behalf of oneself is also allowed""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/AgentOntology";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    """Other types of agents we are not including at this stage are: 
1. Those that are physical and chemical in nature: Cleaning, vulcanizing, fluxing, indicator, sterilizing, emulisifying, refining.

2. Organisms: animals, cells, parts of organisms (organs, organelles, viruses).

3. In computing: intelligent, artificial, mobile, & autonomous""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "AgentRole(x) → Role(x) ∧ ∃n∃m((MaterialEntity(m) ∧ ¬FiatObjectPart(x)) ∧ roleOf(x,m) ∧ (Person(n) ∨ GroupOfAgents(n) ∨ EngineeredSystem(n)) ∧ actsOnBehalfOfAtSomeTime(m, n))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "role that someone or something has when they act on behalf of a person, engineered system or a group of agents"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "This term is expected to remain primitive. While 'acting on behalf of at some time' captures the essence of being an agent, the realization of the agent role is expected to have too generic of a scope to define a sufficient condition that would not cause conflict (overlap) with the realization of other roles, which can in turn lead to reasoner errors when a specific entity bears multiple roles simoultaneously. Also, no further conditions specific to the role and not to the bearer of the role have been created thus far.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is an 'agent role' x then x is a 'role' that is the 'role of' some 'material entity' (that is not a 'fiat object part') when it 'acts on behalf of at some time' some 'person' or 'group of agents' or 'engineered system'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000023>,
    _:a9bbd3a5197f4d479f29d036f159f0af357 .

<https://spec.industrialontologies.org/ontology/core/Core/Agreement> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "agreement"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "prenuptial agreement; memorandum of understanding; non-disclosure agreement; employment agreement; purchase order that has been confirmed by the seller by e-mail; handshake agreement to buy something in the State of Florida, which happens to be legally-binding in that juristiction provided certain evidence can be produced"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "FIBO https://spec.edmcouncil.org/fibo/ontology/FND/Agreements/Agreements, term by the same name";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "Agreement(x) → InformationContentEntity(x) ∧ ∃o(ObjectiveSpecification(o) ∧ hasContinuantPartAtAllTimes(x,o))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "understanding between two or more parties that contains a set of commitments on the part of the parties"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "In addition to the general discussion provided for information content enty,there are insufficient constructs to create necessary and sufficient conditions. Namely, patterns surrounding commitment and party need to be established";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is an 'agreement' then x is an 'information content entity' that 'has continuant part at all times' some 'objective specification'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>,
    _:a9bbd3a5197f4d479f29d036f159f0af370 .

<https://spec.industrialontologies.org/ontology/core/Core/ObjectiveSpecification>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "objective specification"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "The objective specification in a manufacturer's six-sigma process improvement program will describe in some detail, the quality improvements to be achieved (as in e.g. the level of reduction in causes of defects, or in the level variability in either or both manufacturing and business processes)."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1.Typically is part of a plan specification.
		2.The NL definition states that the objective specification 'prescribes' the outcome of a 'process'. This does not necessarily imply that a given process exists as an instance during the entire 'objective specification' lifecycle. Instead, it should be interpreted as \"if an instance of the  Process X (X here is intended to represent an OWL:Class that is SubClassOf: Process) exists, then its outcome should be as 'prescribed by' the 'objective specification'.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.obofoundry.org/ontology/iao.html";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "InformationContentEntity(x) ∧ ∃y∃p(Process(p) ∧ isAchievedByAtSomeTime(x,p) ∧ ((ProcessCharacteristic(y) ∧ processCharacteristicOf(y,p))∨ (Capability(y) ∧ hasRealization(x,y)) ∨ (Continuant(c) ∧ isOutputOf(c,p))) ∧ prescribes(x,y)) → ObjectiveSpecification(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that prescribes what the outcome of some process should be"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "See the general discussion and rationale provided for informational entities under 'information content entity'.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is an 'information content entity' that 'is achieved by at some time' some 'process' p and that 'prescribes' some 'process characteristic' which is a 'process characteristic of' p or 'capability' that 'has realization' p or 'continuant' c that is 'output of' p then x is an 'objective specification'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity> .

<https://spec.industrialontologies.org/ontology/core/Core/Algorithm> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "algorithm"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "pseudo code for sorting data, flowchart for automatic control of a process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. to translate in this context means to implement the algorithm such that it is readily executable
2. algorithms in this context should be interpreted as implementation-independent (language-neutral) representations and are typically represented as pseudo-code or a flowchart
3. declarative steps should be interpreted in the context of declarative programming""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/IAO_0000064 and http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "executable code, source code";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "InformationContentEntity(x) ∧ ∃y(EncodedAlgorithm(y) ∧ prescribes(x,y)) → Algorithm(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that prescribes procedural or declarative steps which can be translated to computer interpretable instructions"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "See the general discussion and rationale provided under information content entity.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "If x is an 'information content entity' that 'prescribes' some 'encoded algorithm' then x is an instance of 'algorithm'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity> .

<https://spec.industrialontologies.org/ontology/core/Core/Assembly> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "assembly"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "Every assembly has a plurality of material components. While this is captured in the FOL, due to reasoning limitations with cardinality restrictions and complex properties, the OWL axiom uses 'some' instead of min 2. Hence, this class should be modeled as having at least two material components on the instance level.";
  <http://www.w3.org/2004/02/skos/core#example> "powertrain assembly; partially-assembled powertrain + transmission assembly lying nearby; driveshaft assembly temporarily disassembled for repair or routine maintenance; separator assembly consisting of variously-shaped separator parts that safeguard wine bottles in a case of wine during transport; a material artifact produced entirely through additive manufacturing (provided it is a component somewhere, and can it can be disassembled without damage/destruction)."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "Although the term is polysemous and used in a number of other domains beyond manufacturing, it is introduced here as a covering term for any man-made artifact that satisfies the conditions provided, and independent of modality. We expect various subclasses of assembly to be introduced in future along with more precise heuristics for the various modalities in which they exist.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "APICS 14 ed., 2013, term by the same name; DoD Standard Practice, Identification Marking of US Military Property (MIL-STD-130N Nov. 2012) https://dodprocurementtoolbox.com/cms/sites/default/files/resources/2016-03/MIL-Std130N_Ch1_4.pdf, term by the same name";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "a portion of material; a piece of glass; a rod of aluminum; a roll of aluminum; an engine block";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: Assembly(x) → MaterialArtifact(x) ∧ ∃c∃c1(MaterialComponent(c) ∧ MaterialComponent(c1) ∧ componentPartOfAtAllTimes(c,x) ∧ componentPartOfAtAllTimes(c1,x) ∧ ¬(c=c1 ∨ (componentPartOfAtAllTimes(c,c1) ∨ componentPartOfAtAllTimes(c1,c))))",
    "LA2: MaterialArtifact(x) ∧ ∃p(AssemblyProcess(p) ∧ isSpecifiedOutputOf(x,p)) → Assembly(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "material artifact that is composed of material components that are physically connected and that is capable of disassembly"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs in the ontology to provide necessary and sufficient conditions. Namely, 'disassembly capability' is missing.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: if x is an 'assembly' then x is a 'material artifact' and there are at least two distinct 'material component' that are 'component part of at all times' x",
    "LA2: Material Artifact x that 'is specified output of' some Assembly Process p implies x is an Assembly";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/MaterialArtifact>,
    _:a9bbd3a5197f4d479f29d036f159f0af371 .

<https://spec.industrialontologies.org/ontology/core/Core/MaterialArtifact> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "material artifact"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a machine, a screwdriver, a screw, a sheet of paper"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/ArtifactOntology";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "MaterialArtifact(x) ↔ Object(x) ∧ ∃f(DesignedFunction(f) ∧ bearerOf(x,f))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "object that is deliberately created to have a certain function"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'material artifact' is defined as exactly an instance of 'object' that is the 'bearer of' some 'designed function'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000030>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af644 .

<https://spec.industrialontologies.org/ontology/core/Core/MaterialComponent> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "material component"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "portion of water; portion of crude oil; sea shells; bolt; transmission assembly;engine in an airplane"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Assemblies that are components for one manufacturer may be final products for another (e.g., the selling of diesel engines is a primary product line of Cummins diesel engine yet a component assembly for its customers, Freightliner Trucks). In other words, the context in which a material entity is used must be considered to determine whether it bears the component role.

2. In most manufacturing use cases, material components will be a subclass of 'material artifact'.

3. See the expanded definition under the corresponding role class. The term is formalized here as a defined class by referring to its corresponding role class and exists primarily for ontological modeling and implementation convenience.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "Braking subsystem -- systems and subsystems are object aggregates and often have fiat boundaries, in which case they may be incorrectly inferred as product components. Othertimes, they are systems with bonafide boundaries and should be inferred as a product component.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "MaterialComponent(x) ↔ MaterialEntity(x) ∧ ∃r(MaterialComponentRole(r) ∧ hasRole(x,r))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "material entity which has the material component role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'material component' is defined as exactly an instance of 'material entity' that 'has role' some 'material component role'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "part"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af648 .

<https://spec.industrialontologies.org/ontology/core/Core/AssemblyProcess> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "assembly process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "Driving a lug nut to hold the wheel of a car in place; welding two metal parts into a single object; automated drilling and riveting of a skin panel operation during fuselage assembly;"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/EventOntology";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "3D printing on an existing part (existing part + a pool of printing material -> new part) -- Note that the pool of material is an object before the process but becomes liquid (there is physical state change) during the \"assembly\" process.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "AssemblyProcess(x) → ManufacturingProcess(x) ∧ ∃a∃c (Assembly(a) ∧ MaterialComponent(c) ∧ isInputOf(c,x) ∧ hasComponentPartAtAllTimes(a,c) ∧ hasSpecifiedOutput(x,a))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "manufacturing process in which a number of material components are physically connected to each other to form an assembly"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "More conditions (differentia) need to be agreed upon by the domain experts as processes like 3D printing can also produce an assembly.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is an 'assembly process' x then x is a 'manufacturing process' that 'has specified output' some 'assembly' which 'has component part at all times' some 'material component' that 'is input of' x";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/ManufacturingProcess>,
    _:a9bbd3a5197f4d479f29d036f159f0af373, _:a9bbd3a5197f4d479f29d036f159f0af374 .

<https://spec.industrialontologies.org/ontology/core/Core/ManufacturingProcess> a
    <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "manufacturing process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "Drilling a hole on an engine block; manufacturing operation for making a shaft consisting of milling, turning, and drilling manufacturing processes; assembly process, and quality control process; a manufacturing process that uses 3D printing to create the output material entity."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. This definition presupposes that the outputs of a manufacturing process are in every case material artifacts or man-made substances. 

2. Processes that have as their primary output, something immaterial or informational in nature (digital outputs), such as found in the production of software, will be considered speparately at a later stage.
 
3.. There are other processes that while they may come into direct contact with a manufactured component or substance and are often considered part of the overall set of activities planned and executed to manufacture something, they are not \"transformative\" in nature relative to that which is manufactured, and are specifically excluded the definition. Examples include setup, tear down, transporting components or materials between locations, inspection, and so forth.
This is addressed by output in the axiom. Setup => does not have output. Tear down like disassembly should still be considered transformative.

4. This definition places no additional restrictions on the output of a manufacturing process in terms of being in a state of completion (completed component or finished good).""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "ISO 15531-1 and ISO 15531-43:2006(en)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "statistical process control and preventative maintenance management processes that maximize machine availability and the product quality of manufactured products.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "ManufacturingProcess(x) → PlannedProcess(x) ∧ ∃m∃y∃p∃z(MaterialEntity(m) ∧ (MaterialArtifact(y) ∨ ∃d(MaterialEntity(y) ∧ DesignSpecification(d) ∧ prescribes(d,y))) ∧ PlanSpecification(p) ∧ prescribes(p,x) ∧ Agent(z) ∧ isCarrierOfAtSomeTime(z,p) ∧ participatesInAtSomeTime(z,x) ∧ isInputOf(m,x) ∧ hasSpecifiedOutput(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "planned process that consists of a structured set of operations through which input material is transformed or modified"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, constructs for 'being transformed or modified' need to be formalized";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'manufacturing process' x then x is a 'planned process' that 'has input' some 'material entity' and 'has specified output' some 'material artifact' or a 'material entity' that is 'prescribes by' some 'design specification' and x 'has participant at some time' some 'agent' that is the 'carrier of at some time' a 'plan specification' that 'prescribes' x";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess>,
    _:a9bbd3a5197f4d479f29d036f159f0af630, _:a9bbd3a5197f4d479f29d036f159f0af635, _:a9bbd3a5197f4d479f29d036f159f0af636 .

<https://spec.industrialontologies.org/ontology/core/Core/BusinessFunction> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "business function"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "Pfizer has the business function to produce medicines; Airbus has the business function of manufacturing planes"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://en.wikipedia.org/wiki/Business_purpose";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "any function of a non-profit organization";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: BusinessFunction(x) → Function(x) ∧ ∃o∃i(Organization(o) ∧ ObjectiveSpecification(i) ∧ functionOf(x,o) ∧ genericallyDependsOnAtSomeTime(i,o) ∧ prescribedBy(x,i)) ∧ ∀y(hasRealization(x,y) → BusinessProcess(y))",
    "LA2: Function(x) ∧ ∃o∃i∃p(Organization(o) ∧ ObjectiveSpecification(i) ∧ BusinessProcess(p) ∧ functionOf(x,o) ∧ genericallyDependsOnAtSomeTime(i,o) ∧ prescribedBy(x,i) ∧ hasRealization(x,p)) → BusinessFunction(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "function of an organization to partake in for profit activities as prescribed by the objectives specified by that organization"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "As a function will come into its existance prior to its realization in given business processes necessary and sufficient conditions can not be created at this point due to a lack of patterns to express process types regardless of the time of their existence";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: if x is a 'business function' then x is a 'function' that is 'function of' some 'organization' and that is 'prescribed by' some 'objective specification' and whenever x 'has realization' y that y must be a 'business process'",
    "LA2: if x is a 'function' that is 'function of' some 'organization' and that is 'prescribed by' some 'objective specification' and that 'has realization' some 'business process' then x is a 'business function'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000034>,
    _:a9bbd3a5197f4d479f29d036f159f0af383, _:a9bbd3a5197f4d479f29d036f159f0af384, _:a9bbd3a5197f4d479f29d036f159f0af389 .

<https://spec.industrialontologies.org/ontology/core/Core/OrganizedGroupOfAgents>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "organized group of agents"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "goverment, division, an automated manufacturing cell"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/AgentOntology";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "OrganizedGroupOfAgents(x) ↔ ObjectAggregate(x) ∧ ∃i∃f(DirectiveInformationContentEntity(i) ∧ Function(f) ∧ bearerOf(x, f) ∧ prescribes(i, f))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "group of agents that is pursuing a common set of plans and objectives"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'organized group of agents' is defined as exactly an instance of 'group of agents' that is the 'bearer of' some 'function' which is 'prescribed by' some 'directive information content entity'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/GroupOfAgents>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af779 .

<https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "plan specification"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a manufacturer's sales plan; process plan for producing a part; a schedule for routine maintenance and inspection of a machine; a work order to build 100 of a particular kind component for today."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "When concretized, plan specification may be realized in a process where participants take the prescribed actions to achieve the prescribed process objectives. In other words, a plan specification is concretized in a 'planned process' that it 'prescribes'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/IAO_0000104";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "InformationContentEntity(x) ∧ ∃a∃o∃p(ActionSpecification(a) ∧ ObjectiveSpecification(o) ∧ PlannedProcess(p) ∧ continuantPartOfAtAllTimes(a,x) ∧ continuantPartOfAtAllTimes(o,x) ∧ prescribes(x,p)) → PlanSpecification(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that has action specifications and objective specifications as parts"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "See the general discussion and rationale provided for informational entities under 'information content entity'.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is an 'information content entity' that 'prescribes' some 'planned process' and x 'has continuant part at all times' some 'action specification' and some 'objective specification' then x is a 'plan specification'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "process design"@en-us, "process specification"@en-us, "work instruction"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>,
    _:a9bbd3a5197f4d479f29d036f159f0af795, _:a9bbd3a5197f4d479f29d036f159f0af796 .

<https://spec.industrialontologies.org/ontology/core/Core/Buyer> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "buyer"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "Pfizer when it buys a bulk of chemicals from MiliporeSigma; a person is when they buy groceries at the supermarket; a manufacturing enterprise when they hire an external organization to do some manufacturing process (manufacturing as a service); a person when they hire someone to repair a broken pipe"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "See the expanded definition under the corresponding role class. The term is formalized here as a defined class by referring to its corresponding role class and exists primarily for ontological modeling and implementation convenience.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "Buyer(x) ↔ Person(x) ∨ Organization(x) ∧ ∃r(BuyerRole(r) ∧ hasRole(x,r))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "person or organization which has a buyer role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'buyer' is defined as exactly an instance of 'person' or 'organization' that 'has role' some 'buyer role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Agent>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af408 .

<https://spec.industrialontologies.org/ontology/core/Core/BuyerRole> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "buyer role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "Pfizer has a buyer role when it buys a bulk of chemicals from MiliporeSigma; a person has a buyer role when they buy groceries at the supermarket; a manufacturing enterprise has a buyer role when they hire an external organization to do some manufacturing process (manufacturing as a service); a person has a buyer role when they hire someone to repair a broken pipe"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "OAGIS";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "BuyerRole(x) → Role(x) ∧ ∃y∃p ((Organization(y) ∨ Person(y)) ∧ BuyingBusinessProcess(p) ∧ participatesInAtSomeTime(y,p) ∧ roleOf(x, y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "agent role held by a person or organization when it buys a product or a service"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, constructs for economic transactions and ownership are lacking";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'buyer role' x then x is an 'agent role' that is the 'role of' some 'person' or 'organization' when it 'participates in at some time' some 'buying business process'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/AgentRole>,
    _:a9bbd3a5197f4d479f29d036f159f0af415 .

<https://spec.industrialontologies.org/ontology/core/Core/BuyingBusinessProcess> a
    <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "buying business process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "GM buys tires from Good Year to be assembled into its cars; GE Conglomerate (buyer) buys steels for uses in productions by its GE aviation subsidiary (customer) and GE Transportation subsidiary (customer)"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1.The agent who uses the finiancial instrument may not own the financial instrument and hence agent may not be the paying agent.
2. It should be noted that we consciously exclude the person-to-person transactions, but person-to-business is not excluded.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    """CCO:http://www.ontologyrepository.com/CommonCoreOntologies/ActOfBuying
NL definition: OAGIS and CCO""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "BuyingBusinessProcess(x) → BusinessProcess(x) ∧ ∃y∃z((MaterialProduct(y) ∨ CommercialServiceAgreement(y)) ∧ Buyer(z) ∧ hasParticipantAtSomeTIme(x,y) ∧ hasParticipantAtSomeTime(x,z))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "business process wherein a financial instrument is used by an agent (buyer) to acquire ownership of a product or commercial service from another agent (seller) for the buyer itself or for another agent (customer)"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, ownership and economic transactions require formalization.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'buying business process' then x is a 'business process' that 'has participant at some time' some 'buyer' and x 'has participant at some time' some 'material product' or 'commercial service agreement'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/BusinessProcess>,
    _:a9bbd3a5197f4d479f29d036f159f0af423, _:a9bbd3a5197f4d479f29d036f159f0af424 .

<https://spec.industrialontologies.org/ontology/core/Core/CommercialServiceAgreement>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "commercial service agreement"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a cellphone plan, a maintenance service agreement, equipment lease agreement that includes a maintenance plan"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://schema.org/, http://www.heppnetz.de/projects/goodrelations/ and http://dini-ag-kim.github.io/service-ontology/service.html";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "a blanket purchase order, commodity contract";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "Agreement(x) ∧ ∃c∃y∃z(CommercialService(c) ∧ ServiceProviderRole(y) ∧ CustomerRole(z) ∧ isAbout(x,c) ∧ prescribes(x,y) ∧ prescribes(x,z)) → CommercialServiceAgreement(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "agreement between a customer and service provider that is about some commercial service to be provided by the service provider in exchange for compensation from the customer"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "See the general discussion and rationale provided for informational entities under 'information content entity'.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "If x is an 'agreement' that 'is about' some 'commercial service' and that 'prescribes' some 'customer role' and some 'service provider role' then x is a 'commercial service agreement'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Agreement> .

<https://spec.industrialontologies.org/ontology/core/Core/ServiceProvider> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "service provider"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "FedEx; Home-cleaning service; aircraft maintenance service; internet service provider"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "See the expanded definition under the corresponding role class. The term is formalized here as a defined class by referring to its corresponding role class and exists primarily for ontological modeling and implementation convenience.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "ServiceProvider(x) ↔ (Person(x) ∨ Organization(x)) ∧ ∃r(ServiceProviderRole(r) ∧ hasRole(x,r))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "person or organization which has a service provider role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'service provider' is defined as exactly an instance of 'person' or 'organization' that 'has role' some 'service provider role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Supplier>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af855 .

<https://spec.industrialontologies.org/ontology/core/Core/SupplyingBusinessProcess>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "supplying business process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "BMW dealer supplies a car to the Customer; US importer of steel from China supplies the steel to a US manufacturer; company (supplier) supplied (ship directly) a product to a buyer who bought the product on Amazon (seller)"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. To supply a product means to deliver the product to another agent.
2.To supply a service means to perform a process (e.g. commercial service) for another agent, typically involving a service agreement.
3.It should be noted that we consciously exclude the person-to-person transactions, but person-to-business is not excluded.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://www.oberlo.com/ecommerce-wiki/supply";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "A BMW dealer supplies a car to a Customer in the US, but the BMW Manufacturer in Germany does not supply the car to the Customer. The BMW Manufacturer supplies the car to the BMW dealer.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "SupplyingBusinessProcess(x) → BusinessProcess(x) ∧ ∃y(Supplier(y) ∧ hasParticipantAtSomeTime(x,y)) ∧ (∃p(MaterialProduct(p) ∧ hasParticipantAtSomeTime(x,p)) ∨ ∃c(CommercialService(c) ∧ occurrentPartOf(x,c)))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "business process wherein a product or service is supplied"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, constructs for economic transactions, service or product provision and ownership are lacking";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'supplying business process' then x is a 'business process' that 'has participant at some time' some 'supplier' and x 'has participant at some time' some 'material product' or is 'occurent part of' some 'commercial service'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/BusinessProcess>,
    _:a9bbd3a5197f4d479f29d036f159f0af895, _:a9bbd3a5197f4d479f29d036f159f0af900 .

<https://spec.industrialontologies.org/ontology/core/Core/CommercialServiceSpecification>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "commercial service specification"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "protocol on how maintenance will be conducted on airplanes that is a part of the agreement between Frankfurt Airport and various airlines"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://schema.org/, http://www.heppnetz.de/projects/goodrelations/ and http://dini-ag-kim.github.io/service-ontology/service.html";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "PlanSpecification(x) ∧ ∃c(CommercialService(c) ∧ prescribes(x,c)) → CommercialServiceSpecification(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "plan specification that prescribes a commercial service"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "See the general discussion and rationale provided for informational entities under 'information content entity'.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'plan specification' that 'prescribes' some 'commercial service' then x is a 'commercial service specification'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification> .

<https://spec.industrialontologies.org/ontology/core/Core/ComputingProcess> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "computing process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "execution of a neural network implemented in tensorflow to classify a set of images on a specific cluster; running of the MPC algorithm to control pressure during the production process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. The inputs and specified outputs of 'computing process' are strictly limited to information content entities. 
2. While it is true that algorithms can result in an action by an agent that concretizes it (e.g. controller changes the pressure of a valve), the intermediate step is still an information content entity (e.g. action specification) that is 'concretized' in a separate process that results in the action.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://en.wikipedia.org/wiki/Process_(computing) and https://en.wikipedia.org/wiki/Execution_(computing)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "ComputingProcess(x) → ∀y((hasInput(x,y) ∨ hasSpecifiedOutput(x,y)) → InformationContentEntity(y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    """ComputingProcess(x) ↔ PlannedProcess(x) ∧ ∃y∃a(Agent(y) ∧ (Algorithm(a) ∨ EncodedAlgorithm(a)) ∧ hasParticipantAtSomeTIme(x,y) ∧ genericallyDependsOnAtSomeTime(a,y) ∧ concretizesAtSomeTime(x,a) ∧ (∃o(ObjectiveSpecification(o) ∧ continuantPartOfAtAllTimes(o,a) ∧ achievesAtSomeTIme(x,o)) ∨ 
∃i(InformationContentEntity(i) ∧ hasSpecifiedOutput(x,i))))""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "planned process in which an algorithm or an encoded algorithm is realized by an agent"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'computing process' then whenever x 'has input' or 'has specified output' y that y must be an 'information content entity'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'computing process' is defined as exactly an instance of 'planned process' that 'concretizes at some time' an 'encoded algorithm' or 'algorithm' y which 'generically depends on at some time' some 'agent' which 'participates in at some time' the 'computing process' and the 'computing process' either 'achieves at some time' some 'objective specification' that is 'continuant part of at all times y or it 'has specified output' some 'information content entity'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess>,
    _:a9bbd3a5197f4d479f29d036f159f0af458, _:a9bbd3a5197f4d479f29d036f159f0af459;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af432 .

<https://spec.industrialontologies.org/ontology/core/Core/EncodedAlgorithm> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "encoded algorithm"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "source code encoded in Java that implements a sorting algorithm; Python script that implements a decision tree and that has the objective to classify melt pool images"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "Readily executable means that it can be 1) concretized by a computing process which is prescribed by the encoded algorithm or 2) in case of source code concretized by a compiling process";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ebi.ac.uk/swo/SWO_0000001";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "flowchart, pseudocode";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "PlanSpecification(x) ∧ ∃y(ComputingProcess(y) ∧ prescribes(x,y)) → EncodedAlgorithm(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "plan specification that is the implementation of an algorithm encoded in a specific programming language or framework and that is readily executable"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "In addition to the general discussion provided for information content enty,there are insufficient constructs to create necessary and sufficient conditions. Namely constructs for 'encoded in', 'implementation of' and 'programming language' or 'framework' as well as 'compiling process' are still missing.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "If x is a 'plan specification' that 'prescribes' some 'computing process' then x is an instance of 'encoded algorithm'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification> .

<https://spec.industrialontologies.org/ontology/core/Core/CustomerRole> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "customer role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "GE aviation subsidiary and GE Transportation subsidiary have the customer role when they utilize the steel bought for them by the GE Conglomerate; a person has a customer role when they utilize a lap top that they bought from Target; a person has a customer role when they subscribe for a phone plan"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "OAGIS";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "CustomerRole(x) → AgentRole(x) ∧ ∃y((Person(y) ∨ Organization(y)) ∧ roleOf(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "agent role held by a person or organization when it utilizes the product or receives the service or subscribes to the commercial service agreement"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, constructs for 'utilizing the product' and 'subscribing to an agreement' need to be formalized.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'customer role' then x is an 'agent role' that is the 'role of' a 'person' or 'organization'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/AgentRole>,
    _:a9bbd3a5197f4d479f29d036f159f0af467 .

<https://spec.industrialontologies.org/ontology/core/Core/DescriptiveInformationContentEntity>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "descriptive information content entity"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a description of a product in a product catalogue, the wheelbase of this car is 3m, digital copy of a Mona Lisa drawing"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/abbreviation>
    "descriptive ICE"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "This class is intended to be a defined class used for axiomatization and assertion convenience. It is not expected nor recommended that entities will be asserted as a subclass of this class."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "DescriptiveInformationContentEntity(x) ↔ InformationContentEntity(x) ∧ ∃e(Entity(e) ∧ describes(x,e))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that characterizes (gives a description of) an entity"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'descriptive information content entity ' is defined as exactly an instance of 'information content entity' that 'describes' some 'entity'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af471 .

<https://spec.industrialontologies.org/ontology/core/Core/DesignSpecification> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "design specification"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "document specifying the characteristics of a pharmaceutical product; the design of a software program to schedule the work orders in a factory"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Design specification may be a model or a textual or graphical specification.

2. This class is not intended to be used to represent the design of planned processes. For this purpose, plan specification should be used.

3. Something 'man-made' comprehends those physical and non-physical things that are intentionally created by human beings. Hence the thing specified by a design specification may be either BFO:GDC or BFO:Material Entity.

4. A design specification specifies what the thing should be, such as its shape, size, tolerance, and performance but not necessarily how the thing should be made. If it contains information on how a thing should be made, this should be modeled separately through a 'plan specification' that is 'part of' the design specification

5. Typically, a design specification satisfies a set of requirements""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://en.wikipedia.org/wiki/Design and from http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology, term under the name 'artifact design'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "process design";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: DesignSpecification(x) → InformationContentEntity(x) ∧ ∀c (prescribes(x,c) → Continuant(c))",
    "LA2: InformationContentEntity(x) ∧ ∃c∃r(Continuant(c) ∧ RequirementSpecification(r) ∧ satisfiesRequirement(x,r) ∧ prescribes(x,c)) ∧ ∀c1(prescribes(x,c1) → Continuant(c1)) → DesignSpecification(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that prescribes something man-made"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "See the general discussion and rationale provided for informational entities under 'information content entity'.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: if d is a 'design specification' then d is an 'information content entity' and whenever d 'prescribes' y that y must be a 'continuant'",
    "LA2: if d is an 'information content entity' that 'prescribes' some 'continuant' and that 'satisfies requirement' some 'requirement specification' and if all y that d 'presribes' are instance of 'continuant' then d is a 'design specification'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>,
    _:a9bbd3a5197f4d479f29d036f159f0af475 .

<https://spec.industrialontologies.org/ontology/core/Core/DesignativeInformationContentEntity>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "designative information content entity"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "uri of a website, social security number of a person, lot number of a batch of products, a serial number on a machine, a credit card number, a combination of data in a database table uniquely identify each record in the table"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/abbreviation>
    "designative ICE"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. This class is intended to be a defined class used for axiomatization and assertion convenience. It is not expected nor recommended that entities will be asserted as a subclass of this class.

2. Since the relation 'designates' is defined as a functional property, uniqueness is enforced in the term's formalization.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "DesignativeInformationContentEntity(x) ↔ InformationContentEntity(x) ∧ ∃e(Entity(e) ∧ designates(x,e))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that uniquely identifies an entity"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'designative information content entity' is defined as exactly an instance of 'information content entity' that 'designates' some 'entity'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af476 .

<https://spec.industrialontologies.org/ontology/core/Core/DesignedFunction> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "designed function"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "the function of a oil pump to pump oil, the function of a knife to cut things";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/ArtifactOntology"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "ArtifactFunction(x) ↔ Function(x) ∧ ∃d(DesignSpecification(m)∧ prescribedBy(x,d))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "function that is intentionally designed"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'designed function' is exactly an instance of 'function' that is 'prescribed by' some 'design specification'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000034>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af480 .

<https://spec.industrialontologies.org/ontology/core/Core/DirectiveInformationContentEntity>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "directive information content entity"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "blueprint of a building, process plan, software functional requirement"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/abbreviation>
    "directive ICE"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "This class is intended to be a defined class used for axiomatization and assertion convenience. It is not expected nor recommended that entities will be asserted as a subclass of this class.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "DirectiveInformationContentEntity(x) ↔ InformationContentEntity(x) ∧ ∃e(Entity(e) ∧ prescribes(x,e))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that prescribes a set of rules or guidelines for a process or a model of something man-made"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'directive information content entity' is defined as exactly an instance of 'information content entity' that 'prescribes' some 'entity'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af484 .

<https://spec.industrialontologies.org/ontology/core/Core/EquipmentRole> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "equipment role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "role of a wrench when it is used in the maintenance process of a car; role of a chromatography column that is planned to be used in a protein purification process; role of a truck that is used to transport goods to the buyer; role of a single-use bioreactor when it is planned to be used in the upstream phase of a biomanufacturing process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. By including in the definition that the material artifact is not consumed in the process, the equipment role intentionally excludes entities such as consumables and reagents, which should be modeled separately.

2. In the definition, \"utilized for carrying out\" implies that the function of the given material artifact needs to be realized in the process. That is, entities with the equipment role should not passively participate in the prescribed process. This differentiates 'material artifacts with the equipment role' (a piece of equipment) from material artifacts that are acted upon (transformed or modified) in the given process.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "adapted from Oxford Languages, term by the name ‘equipment’";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "EquipmentRole(x) → Role(x) ∧ ∃p∃y(PlanSpecification(p) ∧ MaterialArtifact(y) ∧ roleOf(x,y) ∧ (prescribes(p,y) ∨ ∃i((InformationContentEntity(i) ∨ RequirementSpecification(i)) ∧ continuantPartOfAtAllTimes(i,p) ∧ (prescribes(i,y) ∨ satisfiesRequirement(y,i)))) ∧  ∀z(hasRealization(x,z) → (PlannedProcess(z) ∧ (prescribedBy(z,p) ∨ ∃i1(InformationContentEntity(i1) ∧ continuantPartOfAtAllTimes(i1,p) ∧ prescribes(i1,z))) ∧ ∃f(Function(f) ∧ hasFunction(y,f) ∧ realizes(z,f)))))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "role held by a material artifact when it is planned to be involved in or is involved in carrying out some part of a planned process and that is not consumed in that planned process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to define necessary and sufficient conditions. Namely, patterns for utilized in carrying out and not consumed need to be developed further.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "If x is an 'equipment role' then x is a 'role' that is the 'role of' a 'material artifact' y that is 'prescribed by' a 'plan specification' p or its 'continuant part of at all times' or y 'satisfies requirement' some 'requirement specification' which is 'continuant part of at all times' p and whenever x 'has realization' z that z must be a 'planned process' 'prescribed by' p or 'prescribed by' some 'continuant part of at all times' p and z must 'realize' a 'function' which is a 'function of' y";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000023>,
    _:a9bbd3a5197f4d479f29d036f159f0af492, _:a9bbd3a5197f4d479f29d036f159f0af509, _:a9bbd3a5197f4d479f29d036f159f0af518 .

<https://spec.industrialontologies.org/ontology/core/Core/GainOfRole> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "gain of role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "the process of gaining an operator role when someone is assigned in that position";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "1. If only one date-time is available for some gain of role processes due to lack of data or an interval being smaller than the tick time (the smallest duration by which the time progresses) then the date-time should be asserted either only for first instant or only for last instant of every interval, for which a gain of role process occurs, uniformly for the entire knowledge base. For example, Barack Obama gained the role of presidency on 20 January 2009 should be modeled as the process p of type ‘gain of role’ ‘occupies temporal region’ r (a ‘temporal interval’) which ‘has last instant’ i (a ‘temporal instant’) which ‘has value expression at all times’ v (a ‘temporal instant value expression’) which ‘has data-time value’ 2009-01-20T00:00:00Z."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "CCO";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "GainOfRole(p) ↔ Process(p) ∧ ∃t∃t1∃r∃y(TemporalInterval(t) ∧ TemporalInterval(t1) ∧ Role(r)∧ (IndependentContinuant(y) ∧ ¬SpatialRegion(y)) ∧ occupiesTemporalRegion(p,t) ∧ (temporallyOverlaps(t,t1) ∨ temporallyStarts(t,t1) ∨ meets(t,t1)) ∧ hasOutput(p,r) ∧ existsAt(r,t1) ∧ hasRole(y,r) ∧ hasParticipantAtAllTimes(p,y) ∧ ∀t2(TemporalRegion(t2) ∧ existsAt(r,t2) → (occurrentPartOf(t2,t1) ∨ t2 = t1)))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "process in which someone or something (independent continuant that is not a spatial region) becomes the bearer of a role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of ‘gain of role’ is defined exactly as an instance of a ‘process’ p that 'occupies temporal region' some 'temporal interval' t that ‘temporally starts’ or ‘temporally overlaps’ or 'meets' some 'temporal interval' t1, and p ‘has participant at all times’ some 'independent continuant' that is not a 'spatial region' y and p ‘has output’ some ‘role’ r that only ‘exists at’ t1 and y 'has role' r";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af523 .

<https://spec.industrialontologies.org/ontology/core/Core/GroupOfPersons> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "group of persons"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "The band, called The Beatles, survived the change in drummer from Pete Best to Ringo Starr"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/AgentOntology"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "GroupOfPersons(x) ↔ ObjectAggregate(x) ∧ ∃y(Person(y) ∧ hasMemberPartAtSomeTime(x, y)) ∧ ∀z(hasMemberPartAtSomelTime(x, z) → Person(z))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "group (object aggregate) that has one or more persons as members"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'group of persons' is defined as exactly an instance of 'object aggregate' that 'has member part at some time' some 'person' and 'has member part at some time' only 'person'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000027>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af568 .

<https://spec.industrialontologies.org/ontology/core/Core/Identifier> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "identifier"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "URI of a website; social security number of a person (living in the United States), a global location number assigned to the Amazon regional distribution center at 12300 Bermuda Rd in Henderson, NV; the lot identifier assigned to a batch of rivets just received from China by the Airbus final assembly plant in Toulouse, FR; the VIN number assigned to the Tesla in my garage; a credit card number, the value of a field in a company's internal IT systems system used to uniquely identify a particular product and product revision."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Identifier can be just one designative ICE or consist of a combination of them. It can also be a combination of other types of information; for example, in a particular domain of discourse, a combination of first name and last name can provide sufficient uniqueness for entities in that domain.
2. The designative property enforces uniqueness as it is a functional property. In other words, on the instance level, each instance of identifier designates exactly one instance of an entity.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://www.omg.org/spec/Commons/Identifiers/Identifier";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "Identifier(x) → InformationContentEntity(x) ∧ ∃e(Entity(e) ∧ designates(x,e))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that is used to uniquely identify an entity within a particular context"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely patterns to connect context to the identifier are still missing";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is an 'identifier' then x is an 'information content entity' that 'designates' some 'entity'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>,
    _:a9bbd3a5197f4d479f29d036f159f0af574 .

<https://spec.industrialontologies.org/ontology/core/Core/LossOfRole> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "loss of role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "the process of losing a student role when a student graduates";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "1. If only one date-time is available for some loss of role processes due to lack of data or an interval being smaller than the tick time (the smallest duration by which the time progresses) then the date-time should be asserted either only for first instant or only for last instant of every interval, for which a loss of role process occurs, uniformly for the entire knowledge base. For example, Bill Clinton lost the role of presidency on 19 December 1998 should be modeled as the process p of type ‘loss of role’ ‘occupies temporal region’ r (a ‘temporal interval’) which ‘has first instant’ i (a ‘temporal instant’) which ‘has value expression at all times’ v (a ‘temporal instant value expression’) which ‘has data-time value’ 1998-12-19T00:00:00Z."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "CCO";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "LossOfRole(p) ↔ Process(p) ∧ ∃t∃t1∃r∃y(TemporalInterval(t) ∧ TemporalInterval(t1) ∧ Role(r) ∧ (IndependentContinuant(y) ∧ ¬SpatialRegion(y)) ∧ occupiesTemporalRegion(p,t) ∧ (isTemporallyOverlappedBy(t,t1) ∨ temporallyFinishes(t,t1) ∨ metBy(t,t1)) ∧ hasInput(p,r) ∧ existsAt(r,t1) ∧ hasRole(y,r) ∧ hasParticipantAtAllTimes(p,y) ∧ ∀t2(TemporalRegion(t2) ∧ existsAt(r,t2) → (occurrentPartOf(t2,t1) ∨ t2 = t1)))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "process in which someone or something (independent continuant that is not a spatial region) ceases to be the bearer of a role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of ‘loss of role’ is defined exactly as an instance of a ‘process’ p that 'occupies temporal region' some 'temporal interval' t that ‘temporally finishes’ or 'is temporally overlapped by’ or is 'met by' some 'temporal interval' t1 and p ‘has participant at all times’ some 'independent continuant' that is not a 'spatial region' y, and p ‘has input’ some ‘role’ r that only ‘exists at’ t1 and y 'has role' r";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af575 .

<https://spec.industrialontologies.org/ontology/core/Core/MaintainableMaterialItem>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "maintainable material item"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "CNC machine on which routine maintenance is performed"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "See the expanded definition under the corresponding role class. The term is formalized here as a defined class by referring to its corresponding role class and exists primarily for ontological modeling and implementation convenience.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "MaintainableMaterialItem(x) ↔ (MaterialArtifact(x) ∨ EngineeredSystem(x)) ∧ ∃r (MaintainableMaterialItemRole(r) ∧ hasRole(x,r))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "material artifact or engineered system which has the maintainable material item role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'maintainable material item' is defined as exactly an instance of 'material artifact' or an 'engineered system' which 'has role' some 'maintainable material item role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af614 .

<https://spec.industrialontologies.org/ontology/core/Core/MaintainableMaterialItemRole>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "maintainable material item role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a CNC machine has the maintainable material item role when it is undergoing repair after a failure"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://ceur-ws.org/Vol-2900/WS5Paper2.pdf";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "MaintainableMaterialItemRole(x) → Role(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "role played by an asset (engineered system or material artifact) when there is a maintenance strategy prescribing its maintenance process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, constructs for 'maintenance strategy' and 'maintenance process' need to be formalized.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'maintainable material item' then x is a 'role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000023> .

<https://spec.industrialontologies.org/ontology/core/Core/Manufacturer> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "manufacturer"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "MiliporeSigma is a manufacturer of single-use bioreactors; Boeing is a manufacturer of airplanes; dell is a manufacturer of lap-tops"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "See the expanded definition under the corresponding role class. The term is formalized here as a defined class by referring to its corresponding role class and exists primarily for ontological modeling and implementation convenience.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "Manufacturer(x) ↔ Organization(x) ∧ ∃r(ManufacturerRole(r) ∧ hasRole(x,r))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "organization which has a manufacturer role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'manufacturer' is defined as exactly an instance of 'organization' that 'has role' some 'manufacturer role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Agent>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af621 .

<https://spec.industrialontologies.org/ontology/core/Core/ManufacturerRole> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "manufacturer role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "MiliporeSigma has a manufacturer role when it produces single-use bioreactors; Boeing has a manufacturer role when it produces airplanes; Dell has a manufacturer role when it produces lap-tops"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "bizfluent.com";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "ManufacturerRole(x) → Role(x) ∧ ∃y∃p(Organization(y) ∧ ProductProductionProcess(p) ∧ participatesInAtSomeTime(y,p) ∧ roleOf(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "agent role held by an organization when it produces material products"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, constructs for linking the manufacturer to a product it produces are still lacking.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'manufacturer role' x then x is an 'agent role' that is the 'role of' some 'organization' when it 'participates in at some time' some 'product production process'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/AgentRole>,
    _:a9bbd3a5197f4d479f29d036f159f0af625 .

<https://spec.industrialontologies.org/ontology/core/Core/ProductProductionProcess>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "product production process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "Making of an engine block as a product that consists of many processes such as manufacturing process, assembly process, inspection process etc."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. A product production process is distinct from a maintenance process in that, in the latter case, the product exists both before and after the process occurs.

2. A product production process has several planned processes as parts (sub-processes), including at least one manufacturing or assembly process, and optionally, may include other planned process types such as inspection, packaging, rework, and material handling.

3. Note that the various parts of a product production process, for example, inspection, and testing, cannot be a product production process alone.

4. Some manufacturing processes will also be product production processes.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://en.wikipedia.org/wiki/Manufacturing and ISO 23952:2020(en)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    """1.Providing a service that does not deliver any tangible good
2.Acquiring unprocessed raw material (e.g., roll of aluminum) with intention to sell them or reselling. The Product existed before the initiation of the planned process.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "ProductProductionProcess(x) ↔ BusinessProcess(x) ∧ ∃m(ManufacturingProcess(m) ∧ occurentPartOf(m,x)) ∧ ∃y∃t∃t1(MaterialProduct(y) ∧ TemporalRegion(t) ∧ TemporalRegion(t1) ∧ hasSpecifiedOutput(x, y) ∧ occupiesTemporalRegion(x, t) ∧ temporallyOverlaps(t, t1) ∧ existsAt(y, t1))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "business process that consists of at least one manufacturing process through which raw materials and components are transformed or modified to create a material product"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'product production process' is defined as exactly an instance of 'business process' that 'has occurrent part', some 'manufacturing process', and 'has specified output' some 'material product' which did not 'exist at' the beginning of the 'product production process'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/BusinessProcess>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af810 .

<https://spec.industrialontologies.org/ontology/core/Core/MaterialComponentRole> a
    <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "material component role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "an engine has the component role when it is a part of a car; a tool when it is planned to be mounted on a CNC machine"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "APICS";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "MaterialComponentRole(x) → Role(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "role held by a material entity when it is a proper part of another material entity or is planned to be a proper part of another material entity"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, constructs for 'planned to be a part' need to be formalized. Also, the realization of the material component role needs to be analyzed further.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "If x is a 'material component role' then x is a 'role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000023>,
    _:a9bbd3a5197f4d479f29d036f159f0af652 .

<https://spec.industrialontologies.org/ontology/core/Core/MaterialLocationChangeProcess>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "material location change process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "Shipping goods from a warehouse to a customer; moving a tool from one location (work center) to another within the factory; transporting finished goods from one warehouse to another; pumping portions of crude oil through a pipeline; transferring a load of apples from a bin to a container; picking an apple; transporting passengers on a bus;"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Material transfer process includes both the internal (e.g., inside a factory) and external (e.g., between factories) movement of an object

2. BFO:Site is the synonym for physical location which is why Site is used in the axioms""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/EventOntology and https://www.merriam-webster.com/dictionary/motion";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "A specific type of material handling: E.g., changing only the orientation of the object within the same site (this does not change the site from t to t'); throwing waste into a garbage bin; removing a wing nut from a fixture in preparation for inserting a workpiece into the fixture.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    """MaterialLocationChangeProcess(​x​) → PlannedProcess(​x)​ ∧ ​∃​y∃​​t∃​​t​1∃​​t2∃​s∃​s1∃​z∃​z1(MaterialEntity(​y​) ∧ TemporalInstant(t) ∧ TemporalInstant(t1) ∧ TemporalRegion(t2) ∧ IndependentContinuant(s) ∧ IndependentContinuant(s1) ∧ Site(z) ∧ Site(z1) ∧ hasParticipantAtSomeTime(x,y)
∧ firstInstantOf(​t​, ​t2) ∧ lastInstantOf(​t1​, ​t2​) ∧ occupiesTemporalRegion(​x,​t2)​ ∧ existsAt(s,t) ∧ existsAt(s1,t1) ∧ locatedInAtalltimes(s,z) ∧ locatedInAtAlltimes(s1,z1) ∧ locationOfAtAlltimes(s,y) ∧ locationOfAtAllTimes(s1,y))""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "planned process that results in a material entity moving from one physical location to another"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "Patterns for adequate reification of the n-ary pattern that is change of location need further refinement and testing.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'material location change process' then x is a 'planned process' in which a 'material entity' is moved from one 'site' to another.";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess>,
    _:a9bbd3a5197f4d479f29d036f159f0af653 .

<https://spec.industrialontologies.org/ontology/core/Core/MaterialProductRole> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "material product role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a manufactured good has a material product role when a manufacturer offers it for sale; a drug product has a material product role when it is bought by a customer in a pharmacy; sea shells have a material product role when they are collected, packaged and offered for sale;"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "Oxford Languages, term by the name ‘product’; also Wikipedia, term by the name ‘goods’ (as used in economics) and in particular, tangible goods";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "MaterialProductRole(x) → Role(x) ∧ ∃y∃z((BuyingBusinessProcess(y) ∨ OfferingForSaleBusinessProcess(y) ∨ SupplyingBusinessProcess(y)) ∧ MaterialEntity(z) ∧ participatesInAtSomeTime(z,y) ∧ roleOf(x,z))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "role held by a material entity that is intended to be sold, or has been bought, or has been supplied"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, constructs for economic transactions and ownership are lacking";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'material product role' x then x is a 'role' that is the 'role of' some 'material entity' when it 'participates in at some time' some 'buying business process' or 'offering for sale business process' or 'supplying business process'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000023>,
    _:a9bbd3a5197f4d479f29d036f159f0af696 .

<https://spec.industrialontologies.org/ontology/core/Core/SellingBusinessProcess>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "offering for sale business process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "Good Year offers tires for sale, Boeing offers 737 planes for along with service agreements for the maintenance of the planes"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "It should be noted that we consciously exclude the person-to-person transactions, but person-to-business is not excluded.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    """CCO:http://www.ontologyrepository.com/CommonCoreOntologies/ActOfBuying
NL definition: OAGIS and CCO""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "OfferingForSaleBusinessProcess(x) → BusinessProcess(x) ∧ ∃y∃z((MaterialProduct(y) ∨ CommercialServiceAgreement(y)) ∧ Supplier(z) ∧ hasParticipantAtSomeTIme(x,y) ∧ hasParticipantAtSomeTime(x,z))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "business process wherein a product or commercial service is offered by an agent (seller) for another agent (buyer) to acquire ownership via a financial instrument"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, ownership and economic transactions require formalization.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is an 'offering for sale business process' then x is a 'business proces' that 'has participant at some time' some 'supplier' and x 'has participant at some time' some 'material product' or 'commercial service agreement'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/BusinessProcess>,
    _:a9bbd3a5197f4d479f29d036f159f0af850, _:a9bbd3a5197f4d479f29d036f159f0af851 .

<https://spec.industrialontologies.org/ontology/core/Core/MaterialResource> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "material resource"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "factory available to be used for producing a product; a body of water available to cool a reactor; money available to a person to buy an item; a portion of raw material available to produce a good or service"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. This defined class is designed to group material entities according to a very broad criterion and is not intended to be used as a parent class for resource types that can be more specifically asserted under another class.

2. Skills and capabilities or other entities in the SDC branch are not resources but they can be considered resources indirectly through their bearer

3. See expanded definition under the corresponding role class. The term is formalized here as a defined class by referring to its corresponding role class and exists primarily for ontological modeling and implementation convenience.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "(ambiguous/undesirable): a portion of water on my factory floor that formed after a recent rainshower.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "MaterialResource(x) ↔ MaterialEntity(x) ∧ ∃r(MaterialResourceRole(r) ∧ hasRole(x,r))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "material entity which has the material resource role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'material resource' is defined as exactly an instance of 'material entity' that 'has role' some 'material resource role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af705 .

<https://spec.industrialontologies.org/ontology/core/Core/MaterialResourceRole> a
    <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "material resource role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "factory has a material resource role when it is available to be used for producing a product; a body of water has a material resource role when it is available to cool a reactor; money has a material resource role when it is available to a person to buy an item; a portion of raw material has a material resource role when it is available to produce a good or service"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/ArtifactOntology"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "MaterialResourceRole(x) → Role(x) ∧ ∃a∃y((Person(a) ∨ GroupOfAgents(a) ∨ EngineeredSystem(y)) ∧ MaterialEntity(y) ∧ isAvailableToAtSomeTime(y,a) ∧ roleOf(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "role played by a material entity that consists in it being available to a person or group of agents or engineered system"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "This term is expected to remain primitive. While 'is available to at some time' captures the essence of being a material resource, the realization of the material resource role is expected to have too generic of a scope to define a sufficient condition that would not cause conflict (overlap) with the realization of other roles.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'material resource role' x then x is a 'role' that is the 'role of' some 'material entity' when it 'is available to at some time' some 'person' or 'group of agents' or 'engineered system'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000023>,
    _:a9bbd3a5197f4d479f29d036f159f0af709 .

<https://spec.industrialontologies.org/ontology/core/Core/MaterialState> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "material state"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "the lightswitch in the off state from 9 PM to 8 AM; the machine in fail state from 4 PM to 5 PM; perfusion bioreactor was run in steady state for two days, a truck is in a stop state because its position has been unchanged"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Although the notion of \"particular condition\"; has not been introduced in this release, the IOF's approach will be to model this as a dependent entity such that at any timeframe during which it exists, it depends on some material entity -- meaning a material state will necessarily \"be focused on\" a particular condition of some material entity for which the state is ascribed. Condition here would encompass BFO: specifically-dependent continuants (qualities, dispositions and other realizable entities types) as well as site (the absolute or relative location of a material entity). In the future, the coverage will be expanded to include some currently \"missing dependent entity types\"; including orientation, and cases wherein a material entity is in a particular condition because it has or is in particular composition or configuration (e.g. the setup action of a machine and jig is complete and it is not in a setup/ready-for-run state). 

2. Unchanging, is intended to encompass not just having a particular condition for the duration of the state, but potentially being value-bound to some constant or even within a given range as prescribed by some design or requirement specification. Specialized sub-types may be introduced to handle such value-based constant and range-bound states and conditions.

3. The term as introduced here is not intended to be used for modeling what we might call the \"state of a process\" (e.g., equilibrium state for chemical, physical and biological processes or steady-state or discrete or continuous production processes), nor for modeling the states of non-real entities (e.g., virtual entities participating in virtual simulation program and any other informational or abstract entities, when they are considered to be in a particular condition). Extensions to the BFO framework as well as further work on 'process characteristic' may be first needed to handle these use cases and such specialized state classes will be introduced in a future release.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "Oxford Languages, term by the name ‘state’";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "MaterialState(x) → Process(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "process in which a material entity that participates in the process has a condition that remains unchanged"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, constructs to formalize range,limits and constant values over a period of time are still lacking.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'material state' then x is a 'process'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "stasis"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000015> .

<https://spec.industrialontologies.org/ontology/core/Core/MeasuredValueExpression>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "measured value expression"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "the value of '20g' that represents the measured weight of a mouse and that is determined on the quantitative scale of mass"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. The values of the measured value expression are generated during the measurement process that produces the measurement information content entity the measured value expression is a part of. The corresponding parthood axiom is captured in the measurement information content entity class and is not reintroduced in the formal definition here to avoid redundancy.

2. Since this class is a subclassOf: value expression, the values contained in the measured value expression are always according to a classification scheme or a quantitative scale.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "International Vocabulary of Metrology Fourth edition,2.11";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    """MeasuredValueSpecification(x) ↔ ValueExpression(x) ∧ ∃e((TemporalRegion(e) ∨ ProcessCharacteristic(e) ∨ SpecificallyDependentContinuant(e)) 
∧ isMeasuredValueOfAtSomeTime(x,e))""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "value expression that contains the measured value of an attribute (specifically dependent continuant or process characteristic or temporal region)"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'measured value expression' is defined exactly as an instance of 'information content entity' that 'is measured value of at some time' some 'process characteristic' or 'temporal region' or 'specifically dependent continuant'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af718 .

<https://spec.industrialontologies.org/ontology/core/Core/MeasurementCapability> a
    <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "measurement capability"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "the capability of a pH sensor to measure the pH; capability of a scale to measure the weight of an object"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "To measure the value means to determine the entities value relative to some classification scheme or on a quantitative scale.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://purl.obolibrary.org/obo/OBI_0000453";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "MeasurementCapability(x) → Capability(x) ∧ ∃z(MaterialEntity(z) ∧ capabilityOf(x,z)) ∧ ∀y(hasRealization(x,y) → MeasurementProcess(y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "capability of a material entity to measure the value of some entity"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs in the ontology to create necessary and sufficient conditions. Namely, 'to measure the value' needs a better formalization in its connection to the capability";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'measurement capability' then x is a 'capability' that is the 'capability of' some 'material entity' and whenever some y 'realizes' x that y must be a 'measurement process'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Capability>,
    _:a9bbd3a5197f4d479f29d036f159f0af726, _:a9bbd3a5197f4d479f29d036f159f0af727 .

<https://spec.industrialontologies.org/ontology/core/Core/MeasurementProcess> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "measurement process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "measuring the pH of a buffer by a pH probe; measuring of a weight of a bulk of a substance by an industrial scale; measuring the rate of an enzymatic reaction by a spectrophotometer; measuring the time it takes to produce a unit of a product"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Determining the value here is to be interpreted in the context of qualitative, semi-quantitative, and quantitative measurements. As such, it comprehends both categorical and numerical measurements.
2. Typically, the results of measurements are recorded and stored as a measurement information content entity.
3. Measurement processes can have as temporal or occurrent parts other measurement processes as well data transformation processes which transform the raw measurement data.
4. The entity whose attribute is measured might either participate in the process if it is a continuant or occupy a temporal interval that precedes or partially coincides with the measurement process if it is an occurrent.
5. The material entity measuring the attribute must be capable of measuring that attribute. This is axiomatically captured by mandating that the material entity that is measuring the attribute must have a measurement capability.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "ISO 9000:2015(en), 3.11.5";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "MeasurementProcess ↔ PlannedProcess(x) ∧ ∃m∃y∃z∃c(MaterialEntity(m) ∧ MeasurementCapability(c) ∧ hasCapability(m,c) ∧ (((IndependentContinuant(y) ∧ ¬(SpatialRegion(y))) ∧ SpecificallyDependentContinuant(z) ∧ bearerOf(y,z) ∧ participatesInAtSomeTime(y,x)) ∨ (Process(y) ∨ ProcessBoundary(y) ∧ TemporalRegion(z) ∧ occupiesTemporalRegion(y,z) ∧ ∃t(temporalRegion(t) ∧ occupiesTemporalRegion(x,t) ∧ (occurrentPartOf(t,z) ∨ hasOccurrentPart(t,z)))) ∨ (Process(y) ∧ ProcessCharacteristic(z) ∧ processCharacteristicOf(z,y) ∧ (preceedes(y,x) ∨ ∃t1∃t2(temporalRegion(t1) ∧ temporalRegion(t2) ∧ occupiesTemporalRegion(x,t1) ∧ occupiesTemporalRegion(y,t2) ∧ (occurrentPartOf(t1,t2) ∨ hasOccurrentPart(t1,t2)))))) ∧ measuresAtSomeTime(m,z)) ∧ ∀b(hasSpecifiedOutput(x,b) → MeasurementInformationContentEntity(b))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "planned process to determine the value of an attribute (specifically dependent continuant or temporal region or process characteristic) of an entity of interest"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, n-ary constructs that are able to adequately capture the relation between the process, attribute and the entity of interest are still lacking. Also formalization of being an entity of interest is lacking.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    """if x is a 'measurement process' then x is a 'planned process' that 'has participant at some time' some 'material entity' y that 'has measurement capability' and y 'measures at some time' either 
1) 'process characteristic' that is 'process characteristic of' a 'process' that 'preceedes' or (partially or fully) temporally coincides with x) or
2)'specifically dependent continuant' that 'inheres in' an 'independent continuant' (that is not a 'spatial region') which 'participates in at some time' x or
3) 'temporal region' that is temporally occupied by some 'process' or 'process boundary' and that 'has occurrent part' or 'occurent part of' a 'temporal region' temporally occupied by x
and whenever x 'has specified output' b that b must be a 'measurement information content entity'""";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess>,
    _:a9bbd3a5197f4d479f29d036f159f0af750, _:a9bbd3a5197f4d479f29d036f159f0af763 .

<https://spec.industrialontologies.org/ontology/core/Core/MeasurementInformationContentEntity>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "measurement information content entity"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a two fold increase in expression of a gene in a cancer patient and the associated metadata; results of measuring the thickness of a piece of steel; results of measuring the change in pH in a bioreactor over the interval of two days"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/abbreviation>
    "measurement ICE"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Attribute here comprehends qualities in case the entity the measurement content entity 'is about' is an independent continuant and process characteristics if the entity is a process or temporal region if the entity is a process or process boundary.
2. Measurement ICE describes attributes of physical entities. As such, it is not intended to be used for capturing metrics related to strictly digital objects (information content entities in the IOF framework).
3. Measurement ICE can contain qualitative, semi-quantitative, or quantitative measurements of the attribute. These values are stored within the measured value expression that is a part of the measurement ICE.
4. Measurement ICE can be utilized for both raw and processed measurement data.
5. The International Vocabulary of Metrology defines measurement ICE as a \"set of values being attributed to a measurand together with any other available relevant information.\" This implies that, in addition to the actual measurement value, the measurement ICE contains other information(e.g., the entity of interest of which the measurand is the 'attribute of').""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "http://www.ontologyrepository.com/CommonCoreOntologies/Mid/InformationEntityOntology and the International Vocabulary of Metrology";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "similarity measurement of information";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "MeasurementInformationContentEntity(x) ↔ InformationContentEntity(x) ∧ ∃y∃z∃m∃p(((IndependentContinuant(y) ∧ ¬(SpatialRegion(y)) ∧ SpecificallyDependentContinuant(z) ∧ bearerOf(y,z)) ∨ (Process(y) ∨ ProcessBoundary(y) ∧ TemporalRegion(z) ∧ occupiesTemporalRegion(y,z)) ∨ (Process(y) ∧ ProcessCharacteristic(z) ∧ processCharacteristicOf(z,y))) ∧ MeasuredValueExpression(m) ∧ MeasurementProcess(p) ∧ isAbout(x,y) ∧ describes(x,z) ∧ hasContinuantPartAtAllTimes(x,m) ∧ isMeasuredValueOf(m,y) ∧ isOutputOf(x,p))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "informational content that is the result of measuring a set of attributes (specifically dependent continuant or process characteristic or temporal region) belonging to the entity (independent continuant or process or process boundary) the informational content is about"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'measurement information content entity is defined as exactly an instance of 'information content entity' that is 'output of' some 'measurement process' that 'describes' some 'specifically dependent continuant' or 'temporal region' or 'process characteristic' y that are an attribute of ('inhere in' or 'process characteristic of' or temporally occupied by) a 'process' or 'process boundary' or 'independent continuant'(that is not a 'spatial region') the 'measurement information content entity' 'is about' and that 'has continuant part at all times' some 'measured value expression' that 'is measured value of' y";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af728 .

<https://spec.industrialontologies.org/ontology/core/Core/OrganizationIdentifier>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "organization identifier"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "DUNS Number, CAGE Code, EIN, FIIN, BICID, DODAACID, SCACID"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Organization identifier used here is intended to uniquely identify a particular organization within a region, country, or globally. A government body usually issues one such identifier in the region or country where the business operates (a.k.a. legal entity identifier). Other such identifiers may be assigned by well-known business organizations operating in a locale, a region, or a country -- an example being Dun and Bradstreet for businesses operating in the United States. Moreover, others may still be assigned by international trade organizations for multi-national organizations. In all cases, these unique identifiers facilitate regional or international trade and commerce between such \"legal entities.\" 

2. As introduced here, the term serves to identify other organizational types, including government entities, who are often parties in trade or commerce or have a vested interest in controlling it. In the future, the IOF will introduce and adopt a mid-level ontology for legal entities and relations.

3. The identifier of an organization may be the name of an organization or an alias and may only be unique in a particular jurisdiction (locale, region) and may not be unique on a wider scale - namely at the country level or globally.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "OrganizationIdentifier(x) ↔ Identifier(x) ∧ ∃b(Organization(b) ∧ designates(x,b))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "identifier that identifies an organization"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of ‘organization identifier’ is defined as exactly an instance of ‘identifier' that 'designates' an 'organization'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Identifier>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af775 .

<https://spec.industrialontologies.org/ontology/core/Core/PhysicalLocationIdentifier>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "physical location identifier"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "postal address, GPS coordinate, GS1 global location number (GLN) for physical and digital location, 42.8864° N, 78.8784° W, London, the factory floor"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. Physical location is a synonym for BFO:Site and hence the usage of BFO:Site within the axioms should be interpreted as physical location

2. As introduced here, the IOF ontology is only dealing with physical locations. Identifiers for other kinds of location designators (e.g., virtual locations) will be considered in a future version.
 
3. More classes need to be introduced to represent coordinates in 3D space. For this, the OGC specification may be utilized:
http://docs.opengeospatial.org/is/18-010r7/18-010r7.html#106""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "PhysicalLocationIdentifier(x) ↔ Identifier(x) ∧ ∃l(Site(l) ∧ designates(x,l))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "identifier that identifies a physical location (site)"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'physical location identifier' is defined as exactly an instance of 'identifier' that 'designates' a 'site'"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "site identifier, site designator"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Identifier>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af787 .

<https://spec.industrialontologies.org/ontology/core/Core/PieceOfEquipment> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "piece of equipment"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "wrench when it is used in the maintenance process of a car; chromatography column that is planned to be used in a protein purification process; r truck that is used to transport goods to the buyer; single-use bioreactor when it is planned to be used in the upstream phase of a biomanufacturing process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "See the expanded definition under the corresponding role class. The term is formalized here as a defined class by referring to its corresponding role class and exists primarily for ontological modeling and implementation convenience. Therefore, specific kinds of equipment such as machines, devices, and tools should be asserted under 'material artifact' and not directly under 'piece of equipment'.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "buffer designed to keep pH in a bioreactor constant";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "PieceOfEquipment(x) ↔ MaterialArtifact(x) ∧ ∃r(EquipmentRole(r) ∧ hasRole(x,r))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "material artifact which has an equipment role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'piece of equipment' is defined as exactly an instance of 'material artifact' that 'has role' some 'equipment role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/MaterialArtifact>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af791 .

<https://spec.industrialontologies.org/ontology/core/Core/ProcuringBusinessProcess>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "procuring business process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "AstraZeneca buying and being supplied with a bulk of raw materials from MiliPoreSigma; buying and being supplied with a shipment of office supplies"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. The procurement process considers the whole cycle from identification of needs through to the end of a services contract or the end of the life of goods, including disposal.

2. Sourcing is a part of the procurement process that includes planning, defining specifications (3.26) and selecting suppliers. [Source: ISO 20400:2017]

3. It should be noted that we consciously exclude the person-to-person transactions, but person-to-business is not excluded.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "ISO 6707-2:2017, 3.5.18";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "ProcuringBusinessProcess(x) ↔ BusinessProcess(x) ∧ ∃b∃s(BuyingBusinessProcess(b) ∧ SupplyingBusinessProcess(s) ∧ hasOccurrentPart(x,b) ∧ hasOccurrentPart(x,s))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "business process that consists of buying and ensuring the supply of products or services"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'procuring business process' is defined as exactly an instance of 'business process' that has some 'buying business process' and 'supplying business process' as 'occurent parts'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/BusinessProcess>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af801 .

<https://spec.industrialontologies.org/ontology/core/Core/RawMaterial> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "raw material"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "rolls of aluminum a manufacturer purchases to be consumed on its bottling lines to produce aluminum cans to package its product, crude oil that is converted into gasoline in a refining process; wheels an automobile manufacturer purchases to assemble into a car"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "This class is very general and it is intended to be used for grouping inputs to the product production process external to the bussiness organization. But, things like material artifacts should not be asserted as subclasses of this class";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "oil used to power the refining process";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "RawMaterial(x) ↔ MaterialEntity(x) ∧ ∃r(RawMaterialRole(x) ∧ hasRole(x,r))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "material entity which has the raw material role"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'raw material' is defined as exactly an instance of 'material entity' that 'has role' some 'raw material role'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af824 .

<https://spec.industrialontologies.org/ontology/core/Core/RawMaterialRole> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "raw material role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "rolls of aluminum a manufacturer purchases to be consumed to produce aluminum cans"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """1. IOF considers raw materials only material entities that are acquired from a different organizational unit. However, that organizational unit can be within the same manufacturing enterprise (e.g., exchange of goods between divisions).
2. Raw materials are incorporated during the product production process into the final product. In other words, 'raw materials' exclude consumables from non-manufacturing processes that are a part of product production (e.g., maintenance or quality control) or consumables that are not incorporated into the product (e.g., single-use equipment).""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "ISO 17889-1:2021(en) and https://www.merriam-webster.com/dictionary/raw%20material";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/counterExample>
    "production intermediary going from one production cell to another; reagent that is used in a quality testing process of the product or any intermediary";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "RawMaterialRole(x) → Role(x) ∧ ∃y∃m∃z∃b(BuyingBusinessProcess(y) ∧ Organization(m) ∧ MaterialEntity(z) ∧ BuyerRole(b) ∧ roleOf(b,m) ∧ roleOf(x,z) ∧ hasParticipantAtSomeTime(y,m) ∧ hasParticipantAtSomeTime(y,z)) ∧ ∀y1(hasRealization(x,y1) → (ProductProductionProcess(y1) ∨ ManufacturingProcess(y1)))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "role held by a material entity when it is acquired by an organizational entity with some plan to transform or modify it into intermediate-level components or substances or into a product"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, constructs for transforming or modifying are lacking.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'raw material role' then x is a 'role' that is the 'role of' some 'material entity' when it 'participates in at some time' a 'buying business process' in which some 'organization' that 'has role' 'buyer role' participates in at some time' and whenever x 'has realization' y that y must be a 'product production process' or a 'manufacturing process'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000023>,
    _:a9bbd3a5197f4d479f29d036f159f0af828, _:a9bbd3a5197f4d479f29d036f159f0af841 .

<https://spec.industrialontologies.org/ontology/core/Core/ServiceProviderRole> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "service provider role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "FedEx; Home-cleaning service; aircraft maintenance service; internet service provider"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://en.wikipedia.org/wiki/Service_provider";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "ServiceProviderRole(x) → AgentRole(x) ∧ ∃y∃p((Organization(y) ∨ Person(y)) ∧ (CommercialService(p) ∨ (OfferingForSaleBusinessProcess(p) ∧ ∃c(CommercialServiceAgreement(c) ∧ hasParticipantAtSomeTime(p,c)))) ∧ participatesInAtSomeTime(y,p) ∧ roleOf(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "supplier role held by a person or organization when it offers to sell or provide a commercial service"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, constructs for economic transactions and ownership are lacking";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'service provider role' then x is an 'agent role' that is the 'role of' some 'person' or 'organization' that 'participates in at some time' some 'commercial service' or some 'offering for sale business process' which 'has participant at some time' some 'commercial service agreement'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/SupplierRole>,
    _:a9bbd3a5197f4d479f29d036f159f0af862 .

<https://spec.industrialontologies.org/ontology/core/Core/SupplierRole> a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "supplier role"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "logistics service provider; vending machine; the material handling department (which manages the raw material and finished goods in company warehouses, and provides material handling services to manufacturing and other departments within its factories)"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "APICS, term by the same name and Oxford Languages, term by the name ‘vendor’";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "SupplierRole(x) → Role(x) ∧ ∃y∃p((Organization(y) ∨ Person(y)) ∧ (SupplyingBusinessProcess(p) ∨ OfferingForSaleBusinessProcess(p)) ∧ participatesInAtSomeTime(y,p) ∧ roleOf(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "agent role held by a person or organization when it offers to sell or provide products or services"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "There are insufficient constructs to create necessary and sufficient conditions. Namely, constructs for economic transactions and ownership are lacking.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'supplier role' x then x is an 'agent role' that is the 'role of' some 'person' or 'organization' when it 'participates in at some time' some 'supplying business process' or 'offering for sale business process'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/AgentRole>,
    _:a9bbd3a5197f4d479f29d036f159f0af884 .

<https://spec.industrialontologies.org/ontology/core/Core/TemporalDurationValueExpression>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "temporal interval value expression"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "the expression of the duration that is taken by an average worker to sew a garment."@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "1. This class was introduced as a helper class to map OWL time to IOF Core. For detailed expression of a duration of a ‘temporal interval’, use a suitable subclass of TemporalDuration class from Time ontology (https://www.w3.org/TR/owl-time/) instead of ‘temporal duration value expression’ (see mapping file https://spec.industrialontologies.org/ontology/core/commonstocoremapping/MappingOWLTimeToIOF/)"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "TemporalDurationValueExpression(x) ↔ ValueExpression(x) ∧ ∃y(TimeInterval(y) ∧ isValueExpressionOfAtAllTimes(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "value expression that describes the duration of some temporal interval"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'temporal duration value expression' is defined exactly as an instance of 'value expression' that 'is value expression of at all times' some 'temporal interval'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression>;
  <http://www.w3.org/2002/07/owl#disjointWith> <https://spec.industrialontologies.org/ontology/core/Core/TemporalInstantValueExpression>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af901 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/hasMaintenanceState>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "has maintenance state"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000056>;
  <http://www.w3.org/2004/02/skos/core#example> "has partial function or loss of function";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "inverse of 'stateOf'"@en-us;
  <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/maintenanceStateOf>;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/core/Core/MaintainableMaterialItem>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceState> .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/maintenanceStateOf>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "maintenance state of"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000167>;
  <http://www.w3.org/2004/02/skos/core#example> "the physical or software asset";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "relation that describes the maintenance state of a maintainable item"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceState>;
  <http://www.w3.org/2000/01/rdf-schema#range> <https://spec.industrialontologies.org/ontology/core/Core/MaintainableMaterialItem> .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceState>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "maintenance state"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "is broken in two, is running at desired speed";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "MaintenanceState(x) ↔ Operating State(x) ∨ DegradedState(x) ∨ FailedState(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "false"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "stasis that holds during a temporal interval when the realizable functions and capabilities of the participating item, or the grade of realization of those functions and capabilities, remain unchanged"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'maintenance state' is defined as exactly an instance of 'operating state' or exactly an instance of 'degraded state' or exactly an instance of 'failed state'.";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/MaterialState>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af937 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/initiates>
  a <http://www.w3.org/2002/07/owl#ObjectProperty>;
  <http://www.w3.org/2000/01/rdf-schema#label> "initiates"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://purl.obolibrary.org/obo/BFO_0000063>;
  <http://www.w3.org/2004/02/skos/core#example> "starts, begins, commences";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "comes before an event or process in time and results in beginning or creation of the event or process"@en-us;
  <http://www.w3.org/2000/01/rdf-schema#domain> <http://purl.obolibrary.org/obo/BFO_0000003>;
  <http://www.w3.org/2000/01/rdf-schema#range> _:a9bbd3a5197f4d479f29d036f159f0af283 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/DegradedState>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "degraded state"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "having a small crack, having a partial blockage, having an oscillating reading";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "DegradedState(x) → MaintenanceState(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "state of reduced ability to perform as required but with acceptable reduced performance"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "we do not have the terms to deal with the concepts in the 2nd half of the NL definition about 'grade of realization'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'degraded state' then x is a 'maintenance state'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceState> .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/DispositionToExhibitUndesirableBehavior>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "disposition to exhibit undesirable behavior"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "overspeed, excessive noise";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: DispositionToUndesirableBehavior(x) → UndesirableDisposition(x)", "LA2: ∀p(DispositionToExibitUndesirableBehavior(d) ∧ Process(p) ∧ realizes(p, d) → ¬ FailureProcess(p))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "disposition of an item that would not be expected under normal operating conditions"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "the item may or may not exhibit this behavior hence this is difficult to define clearly";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: if x is a 'disposition to undesirable behavior' then x is a 'undesirable disposition'",
    "LA2: if x is a 'disposition to undesirable behavior' and x 'realizes' some 'process' p then p is not a 'failure process'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/UndesireableDisposition>,
    _:a9bbd3a5197f4d479f29d036f159f0af910 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/UndesireableDisposition>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "undesireable disposition"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "disposition to leak, disposition to overheat, disposition to vibrate";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    """There are two subclasses, disposition to fail and disposition to exhibit undesirable behavior. We need to distinguish between the disposition to leak which is realised in a leaking process (regarded as a failure) and the disposition to overheat realised in a heating process (which, in this example) is not a failure process).
We asset that disposition to exhibit undesirable behavior is the disposition of an item that would not be expected under normal operating conditions but may occur such as vibration or overheating.""";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "UndesirableDisposition(x) ↔ DispositionToFail(x) ∨ DispositionToExhibitUndesirableBehavior(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "false"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "disposition of an item to undergo a process that leads to undesirable outcomes"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'undesirable disposition' is defined as exactly an instance of 'disposition to fail' or exactly an instance of 'disposition to exhibit undesirable behavior'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "failure mode";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000016>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af962 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailureProcess>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "failure process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "short circuiting process, deformation process, corrosion process";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Released>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "FailureProcess(x) ↔ Process(x) ∧ ∃y(DispositionToFail(y) ∧ realizes(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "false"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "process that changes some quality of an item causing the item to become degraded or failed"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'failure process' is defined as exactly an instance of 'process' that 'realizes' some 'disposition to fail'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "functional failure";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af926 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/DispositionToFail>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "disposition to fail"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "disposition to explode, disposition to fracture, disposition to sieze";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Released>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "DispositionToFail(x) → UndesireableDisposition(x) ∧ ∃y(FailureProcess(y) ∧ hasRealization(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "disposition of an item to undergo a failure process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "As a disposition will come into its existance prior to its realization in a failure process necessary and sufficient conditions can not be created at this point due to a lack of patterns to express process types regardless of the time of their existence";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'disposition to fail' then x  is a 'undesireable disposition' that 'has realization' some 'failure process'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/UndesireableDisposition>,
    _:a9bbd3a5197f4d479f29d036f159f0af912 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailedState>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "failed state"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "is broken in two, is burst, is failing to turn on";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "FailedState(o1) ↔ MaintenanceState(o1) ∧ ∃i(MaintainableMaterialItem(i) ∧ hasParticipantAtAllTimes(o1, i) ∧ ∃e(FailureEvent(e) ∧ initiates(e, o1)) ∧ ∃o2((DegradedState(o2) ∨ OperatingState(o2) ∧ hasParticipantAtAllTimes(o2,i)) ∧ precedes(o2, o1)) ∧ ¬∃o3((DegradedState(o3) ∨ OperatingState(o3)) ∧ hasParticipantAtAllTimes(o3,i) ∧ precedes(o2, o3) ∧ precedes(o3, o1)))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "false"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "state of an item being unable to perform a required function due to a failure event"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "\"failed state': every instance of 'failed state' is defined as exactly an instance of 'maintenance state' o1 that 'has participant at all times' some 'maintainable material item' i and that is 'initiated by' some 'failure event' and is 'preceded by' some ('degraded state' or 'operating state') o2 that 'has participant at all times' i and there is no ('degraded state' or 'operating state' ) o3 such that o3 'has participant at all times' i and o2 'precedes' o3 and o3 'precedes' o1\"";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceState>,
    _:a9bbd3a5197f4d479f29d036f159f0af913, _:a9bbd3a5197f4d479f29d036f159f0af917, _:a9bbd3a5197f4d479f29d036f159f0af918;
  <http://www.w3.org/2002/07/owl#disjointWith> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/OperatingState> .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/OperatingState>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "operating state"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "running at desired speed, producing required power, pumping desired volume";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Released>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "In defining the state of an item as being able to perform a required function, we are assuming that the external resources, if required, are provided",
    "Note that in an operating state the item may be functional (so in the operating state) and not currently operating (performing in the functioning process)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "OperatingState(x) → MaintenanceState(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "state of an item being able to perform a required function"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "generally speaking, the determination of maintenance state is determined from outside of the ontology, e.g., through analytics, other reasoning mechanims, or by reports from the device or control system, and so is not determinable from the ontology alone. The required constructs for creation of a formal definition are not available in this release.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'operating state' then x is a 'maintenance state'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceState> .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailureEvent>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "failure event"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "explosion, seizure, loss of power, loss of control";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "the event can be the loss of the primary function or a combination of functions";
  <http://www.w3.org/2000/01/rdf-schema#seeAlso> "ISO81346 for examples of functions";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "FailureEvent(e) ↔ Event(e) ∧ ∃o(FailedState(o) ∧ initiates(e, o)) ∧ ∃i,f,p1(MaintainableMaterialItem(i) ∧ hasParticipantAtAllTimes(e, i) ∧ PrimaryFunction(f) ∧ hasFunction(i, f) ∧ FunctioningProcess(p1) ∧ realizes(p1, f) ∧ precedes(p1, e) ∧ ¬∃p2(FunctioningProcess(p2) ∧ realizes(p2,f) ∧ precedes(p1, p2) ∧ precedes(p2, e)))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "false"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "event that causes an item to lose its ability to perform a required function"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'failure event' is defined as exactly an instance of 'event' e that 'initiates' some 'failed state' and that 'has participant at all times' some 'maintainable material item' that 'has function' some 'primary function ' f that 'has realization' some 'functioning process' p1 that 'precedes' e and there is no 'functioning process' p2 such that p2 'realizes' f and p1 'precedes' p2 and p2 'precedes' e";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "failure";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Event>,
    _:a9bbd3a5197f4d479f29d036f159f0af924 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailureEffect>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "failure effect"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    "Failure effect does not make any commitments to what types of BFO:process can or cannot be considered effects of (functional) failure. Therefore, failure effect can classify any BFO:process (part or whole), indicating that the process is considered the result of a failure for the purposes of maintenance.";
  <http://www.w3.org/2004/02/skos/core#example> "leaking pipe, erratic operation, equipment does not run";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Released>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "FailureEffect(x) → Process(x) ∧ ∃f((FailureEvent(f) ∨ FailureProcess(f)) ∧ precededBy(x, f))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "process that is the consequence of failure, within or beyond the boundary of the failed item"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "it is not possible to determine that a process is a failure effect from the ontology alone and requires external analysis to identify such an occurrence.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'failure effect' then x is a 'process' that is 'preceded by' some 'failure event' or 'failure process'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000015>,
    _:a9bbd3a5197f4d479f29d036f159f0af920 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailureModeCode>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "failure mode code"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "\"high output\", \"leaking\", \"vibrating\"";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <http://www.w3.org/2000/01/rdf-schema#seeAlso> "ISO14224 for example list of failure modes";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "The natural language definition is adapted from EN:13306";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "FailureModeCode(x) → InformationContentEntity(x) ∧ ∃y(UndesirableDisposition(y) ∧ describes(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that describes an undesireable disposition"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "at this stage we do not have sufficient constructs to create necessary and sufficent conditions for this class.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'failure mode code' then x is an 'information content entity' and there is some 'undesirable disposition' that 'is described by' x";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>,
    _:a9bbd3a5197f4d479f29d036f159f0af925 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FunctioningProcess>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "functioning process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "sensing process, controlling process, transforming process";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Released>;
  <http://www.w3.org/2000/01/rdf-schema#seeAlso> "ISO81346 for examples of functioning processes associated with functions";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "The natural language definition is adapted from EN:13306";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "FunctioningProcess(x) ↔ Process(x) ∧ ∃y(Function(y) ∧ realizes(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "false"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "process in which an item performs its function"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'functioning process' is defined as exactly an instance of 'process' that 'realizes' some 'function'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af930 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceActivity>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "maintenance activity"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "replace activity, repair activity, inspect activity";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Released>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "Maintenance Activity(x) → MaintenanceProcess(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "maintenance process that is a single task to retain or restore the function of a maintainable material item"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "at this stage we do not have sufficient constructs to create necessary and sufficent conditions for this class.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'maintenance activity' then x is a 'maintenance process'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceProcess> .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceProcess>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "maintenance process"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "process of replacing a pump, process of calibrating a sensor";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "LA1: PlannedProcess(p) ∧ (∃x(MaintenanceStrategy(x) ∧ prescribes(x, p)) → MaintenanceProcess(p)",
    "LA2: MaintenanceProcess(p) → ∃x(MaintenanceStrategy(x) ∧ prescribes(x, p))", "LA3: MaintenanceProcess(p) → ∃x(MaintainableMaterialItem(x) ∧ hasParticipantAtAllTimes(p, x) ∧ hasInput(p, x))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "process to do with retaining or restoring the function of a maintainable material item under a maintenance strategy"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "Additional analysis to be performed, particularly w.r.t. the associated maintenance strategy.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "LA1: if p is 'planned process' that is prescribed by some 'maintenance strategy' then x is a 'maintenance process'",
    "LA2: if p is 'maintenance process' then there is some 'maintenance strategy' that 'prescribes' p",
    "LA3: if p is 'maintenance process' then there is some 'maintainable material item' x such that p 'has input' x and p 'has participant at all times' x";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess>,
    _:a9bbd3a5197f4d479f29d036f159f0af934, _:a9bbd3a5197f4d479f29d036f159f0af935, _:a9bbd3a5197f4d479f29d036f159f0af936 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceStrategy>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "maintenance strategy"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "specification of a corrective strategy for maintaining a pump (or pumps) of a plant";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "PlanSpecification(x) ∧ (∃p(MaintenanceProcess(p) ∧ prescribes(x, p)) → MaintenanceStrategy(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "maintenance (method/ approach/ actions) to enable (the/an) asset to achieve (management's/ desired) objectives"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "Additional analysis to be performed on this concept. Involves agents, organisations, and business objectives.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'plan specification' that 'prescribes' some 'maintenance process' then x is a 'maintenance strategy'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification> .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceWorkOrderRecord>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "maintenance work order record"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "a record in a (computerised) maintenance management system that contains fields for due and actual date of the maintenance, a description of the maintenance task, actual and budget costs and other fields";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/acronym>
    "MWO";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "the record has a number of commonly used fields including dates, task description, task codes, costs",
    "this definition remains provisional because it assumes that a work order must involve a 'maintenance process'. In the current definition, a work order cannot be made up of purely 'supporting maintenance activity' tasks.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "MaintenanceWorkOrderRecord(x) ↔ InformationContentEntity(x) ∧ ∃y(MaintenanceProcess(y) ∧ describes(x, y) ∧ isInputOf(x, y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "false"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "information content entity that describes a maintenance process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'maintenance work order' is defined as exactly an instance of 'information content entity' that 'describes' some 'maintenance process' p and that 'is input of' p";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "maintenance work order";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af941 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/QualificationSpecification>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "qualification specification"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "electrical trade qualification, welding qualification, registered engineer";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "QualificationSpecification(x) → RequirementSpecification(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "requirement specification that identifies the need for a person to have an assessed skill for a specific task"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "detailed analysis of this concept is incomplete and, hence, the required constructs for creation of a formal definition are not available in this release.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'qualification specification' then x is a 'requirement specification'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/RequirementSpecification> .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/QualifiedMaintenancePerson>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "qualified maintenance person"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "electrician, fitter, mechanic";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "Qualified person on its own is not particularly useful unless reasoning is constrained to only the individuals of interest at some time. Specific subtypes of qualified person are necessary to determine if specific qualification types are satisfied. Still, care must be taken when reasoning over temporal information as, if the critieria are met at some time, the classification will hold.";
  <http://www.w3.org/2000/01/rdf-schema#seeAlso> "qualification specification";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "QualifiedMaintenancePerson(x) ↔ Person(x) ∧ ∃y(MaintenanceActivity(y) ∧ partcipatesInAtSomeTime(x,y) ∧ ∃z(QualificationSpecification(z) ∧ prescribedBy(y, z) ∧ satisfiesRequirement(x,z)))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "false"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "person who is qualified to perform a specified specified maintenance activity"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of ‘qualified maintenance person’ is defined as exactly an instance of 'person' that 'participates in at some time' some 'maintenance activity' p and that 'satifies' some 'qualification specification' that 'prescribes' p";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/2002/07/owl#equivalentClass> _:a9bbd3a5197f4d479f29d036f159f0af947 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/RequiredFunction>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "required function"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "to sense, to store, to process information, to control";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Released>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/explanatoryNote>
    "the function can be a combination of functions";
  <http://www.w3.org/2000/01/rdf-schema#seeAlso> "ISO81346 for examples of functions";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "The natural language definition is adapted from EN:13306";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicDefinition>
    "RequiredFunction(x) ↔ Function(x) ∧ ∃y,z(MaintainableMaterialItem(y) ∧ FunctioningProcess(z) ∧ participatesInAtSomeTime(y,z) ∧ functionOf(x,y))";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "function of a maintainable material item which is considered necessary to fulfil a process requirement"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageDefinition>
    "every instance of 'required function' is defined as an instance of 'function' that is the 'function of' some 'maintainable material item' that 'participates in at some time' some 'functioning process'";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/synonym>
    "primary function";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.obolibrary.org/obo/BFO_0000034>,
    _:a9bbd3a5197f4d479f29d036f159f0af957 .

<https://spec.industrialontologies.org/ontology/maintenance/Maintenance/SupportingMaintenanceActivity>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "supporting maintenance activity"@en-us;
  <http://www.w3.org/2004/02/skos/core#example> "activities that do not change the state of the asset but are done by maintenance personnel such as reporting activity, isolate activity, move activity, training activity";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/firstOrderLogicAxiom>
    "SupportingMaintenanceActivity(x) → PlannedProcess(x)";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/isPrimitive>
    "true"^^<http://www.w3.org/2001/XMLSchema#boolean>;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition>
    "single action in support of the execution of a maintenance process"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/primitiveRationale>
    "at this stage we do not have sufficient constructs to create necessary and sufficent conditions for this class.";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/semiFormalNaturalLanguageAxiom>
    "if x is a 'supporting maintenance activity' then x is a 'planned process'";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af298 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000117>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af299 .

_:a9bbd3a5197f4d479f29d036f159f0af302 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000132>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000015> .

_:a9bbd3a5197f4d479f29d036f159f0af303 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000139>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000015> .

_:a9bbd3a5197f4d479f29d036f159f0af16 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af17 .

_:a9bbd3a5197f4d479f29d036f159f0af24 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af25 .

_:a9bbd3a5197f4d479f29d036f159f0af32 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000117>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af33 .

_:a9bbd3a5197f4d479f29d036f159f0af287 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000176>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000004> .

_:a9bbd3a5197f4d479f29d036f159f0af288 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000176>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af34 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af35 .

_:a9bbd3a5197f4d479f29d036f159f0af37 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af38 .

_:a9bbd3a5197f4d479f29d036f159f0af40 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af41 .

_:a9bbd3a5197f4d479f29d036f159f0af43 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af44 .

_:a9bbd3a5197f4d479f29d036f159f0af108 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af109 .

_:a9bbd3a5197f4d479f29d036f159f0af111 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af112 .

_:a9bbd3a5197f4d479f29d036f159f0af319 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000117>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000035> .

_:a9bbd3a5197f4d479f29d036f159f0af320 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000121>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000035> .

_:a9bbd3a5197f4d479f29d036f159f0af321 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000132>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af322 .

_:a9bbd3a5197f4d479f29d036f159f0af325 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000139>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af326 .

_:a9bbd3a5197f4d479f29d036f159f0af310 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000176>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af311 .

_:a9bbd3a5197f4d479f29d036f159f0af314 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af315 .

_:a9bbd3a5197f4d479f29d036f159f0af318 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000210>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000028> .

_:a9bbd3a5197f4d479f29d036f159f0af334 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000176>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000040> .

_:a9bbd3a5197f4d479f29d036f159f0af335 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af336 .

_:a9bbd3a5197f4d479f29d036f159f0af46 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af47 .

_:a9bbd3a5197f4d479f29d036f159f0af50 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af51 .

_:a9bbd3a5197f4d479f29d036f159f0af100 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af101 .

_:a9bbd3a5197f4d479f29d036f159f0af104 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af105 .

_:a9bbd3a5197f4d479f29d036f159f0af54 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af55 .

_:a9bbd3a5197f4d479f29d036f159f0af58 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af59 .

_:a9bbd3a5197f4d479f29d036f159f0af286 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000176>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000002> .

_:a9bbd3a5197f4d479f29d036f159f0af62 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af63 .

_:a9bbd3a5197f4d479f29d036f159f0af66 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af67 .

_:a9bbd3a5197f4d479f29d036f159f0af296 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000132>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000011> .

_:a9bbd3a5197f4d479f29d036f159f0af297 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000139>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000011> .

_:a9bbd3a5197f4d479f29d036f159f0af289 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000132>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000008> .

_:a9bbd3a5197f4d479f29d036f159f0af290 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000139>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000008> .

_:a9bbd3a5197f4d479f29d036f159f0af70 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af71 .

_:a9bbd3a5197f4d479f29d036f159f0af73 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af74 .

_:a9bbd3a5197f4d479f29d036f159f0af76 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af77 .

_:a9bbd3a5197f4d479f29d036f159f0af84 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af85 .

_:a9bbd3a5197f4d479f29d036f159f0af92 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af93 .

_:a9bbd3a5197f4d479f29d036f159f0af96 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af97 .

_:a9bbd3a5197f4d479f29d036f159f0af114 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af115 .

_:a9bbd3a5197f4d479f29d036f159f0af121 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af122 .

_:a9bbd3a5197f4d479f29d036f159f0af128 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af129 .

_:a9bbd3a5197f4d479f29d036f159f0af132 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af133 .

_:a9bbd3a5197f4d479f29d036f159f0af136 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af137 .

_:a9bbd3a5197f4d479f29d036f159f0af139 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af140 .

_:a9bbd3a5197f4d479f29d036f159f0af142 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af143 .

_:a9bbd3a5197f4d479f29d036f159f0af146 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af147 .

_:a9bbd3a5197f4d479f29d036f159f0af150 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af151 .

_:a9bbd3a5197f4d479f29d036f159f0af154 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af155 .

_:a9bbd3a5197f4d479f29d036f159f0af158 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af159 .

_:a9bbd3a5197f4d479f29d036f159f0af162 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af163 .

_:a9bbd3a5197f4d479f29d036f159f0af488 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af489 .

_:a9bbd3a5197f4d479f29d036f159f0af562 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af563 .

_:a9bbd3a5197f4d479f29d036f159f0af166 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af167 .

_:a9bbd3a5197f4d479f29d036f159f0af169 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af170 .

_:a9bbd3a5197f4d479f29d036f159f0af172 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af173 .

_:a9bbd3a5197f4d479f29d036f159f0af175 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af176 .

_:a9bbd3a5197f4d479f29d036f159f0af178 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af179 .

_:a9bbd3a5197f4d479f29d036f159f0af182 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af183 .

_:a9bbd3a5197f4d479f29d036f159f0af186 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af187 .

_:a9bbd3a5197f4d479f29d036f159f0af190 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af191 .

_:a9bbd3a5197f4d479f29d036f159f0af208 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af209 .

_:a9bbd3a5197f4d479f29d036f159f0af212 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af213 .

_:a9bbd3a5197f4d479f29d036f159f0af194 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af195 .

_:a9bbd3a5197f4d479f29d036f159f0af197 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af198 .

_:a9bbd3a5197f4d479f29d036f159f0af237 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af238 .

_:a9bbd3a5197f4d479f29d036f159f0af240 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af241 .

_:a9bbd3a5197f4d479f29d036f159f0af200 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af201 .

_:a9bbd3a5197f4d479f29d036f159f0af204 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af205 .

_:a9bbd3a5197f4d479f29d036f159f0af909 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isValueExpressionOfAtSomeTime>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000001> .

_:a9bbd3a5197f4d479f29d036f159f0af797 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af798 .

_:a9bbd3a5197f4d479f29d036f159f0af216 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af217 .

_:a9bbd3a5197f4d479f29d036f159f0af349 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af350 .

_:a9bbd3a5197f4d479f29d036f159f0af219 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af220 .

_:a9bbd3a5197f4d479f29d036f159f0af222 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af223 .

_:a9bbd3a5197f4d479f29d036f159f0af265 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af266 .

_:a9bbd3a5197f4d479f29d036f159f0af268 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af269 .

_:a9bbd3a5197f4d479f29d036f159f0af225 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af226 .

_:a9bbd3a5197f4d479f29d036f159f0af228 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af229 .

_:a9bbd3a5197f4d479f29d036f159f0af231 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af232 .

_:a9bbd3a5197f4d479f29d036f159f0af234 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af235 .

_:a9bbd3a5197f4d479f29d036f159f0af243 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af244 .

_:a9bbd3a5197f4d479f29d036f159f0af248 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af249 .

_:a9bbd3a5197f4d479f29d036f159f0af849 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isAbout>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ObjectiveSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af253 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af254 .

_:a9bbd3a5197f4d479f29d036f159f0af256 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af257 .

_:a9bbd3a5197f4d479f29d036f159f0af259 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af260 .

_:a9bbd3a5197f4d479f29d036f159f0af262 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af263 .

_:a9bbd3a5197f4d479f29d036f159f0af271 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af272 .

_:a9bbd3a5197f4d479f29d036f159f0af274 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af275 .

_:a9bbd3a5197f4d479f29d036f159f0af277 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af278 .

_:a9bbd3a5197f4d479f29d036f159f0af280 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af281 .

_:a9bbd3a5197f4d479f29d036f159f0af460 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af461 .

_:a9bbd3a5197f4d479f29d036f159f0af692 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af693 .

_:a9bbd3a5197f4d479f29d036f159f0af877 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af878 .

_:a9bbd3a5197f4d479f29d036f159f0af519 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af520 .

_:a9bbd3a5197f4d479f29d036f159f0af522 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/recognizedByAtSomeTime>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Agent> .

_:a9bbd3a5197f4d479f29d036f159f0af428 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ServiceProvider> .

_:a9bbd3a5197f4d479f29d036f159f0af429 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000117>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/SupplyingBusinessProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af430 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isSubjectOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/CommercialServiceAgreement> .

_:a9bbd3a5197f4d479f29d036f159f0af431 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/CommercialServiceSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af390 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af391 .

_:a9bbd3a5197f4d479f29d036f159f0af905 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af906 .

_:a9bbd3a5197f4d479f29d036f159f0af291 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af292 .

_:a9bbd3a5197f4d479f29d036f159f0af304 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000018> .

_:a9bbd3a5197f4d479f29d036f159f0af305 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af306 .

_:a9bbd3a5197f4d479f29d036f159f0af309 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af340 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000124>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000140> .

_:a9bbd3a5197f4d479f29d036f159f0af341 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000140> .

_:a9bbd3a5197f4d479f29d036f159f0af329 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000121>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af330 .

_:a9bbd3a5197f4d479f29d036f159f0af333 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000139>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000038> .

_:a9bbd3a5197f4d479f29d036f159f0af348 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000121>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000148> .

_:a9bbd3a5197f4d479f29d036f159f0af342 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af343 .

_:a9bbd3a5197f4d479f29d036f159f0af347 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000147> .

_:a9bbd3a5197f4d479f29d036f159f0af346 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000178>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000140> .

_:a9bbd3a5197f4d479f29d036f159f0af357 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af358 .

_:a9bbd3a5197f4d479f29d036f159f0af370 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000110>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ObjectiveSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af371 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af372;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaterialComponent> .

_:a9bbd3a5197f4d479f29d036f159f0af644 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af645 .

_:a9bbd3a5197f4d479f29d036f159f0af648 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af649 .

_:a9bbd3a5197f4d479f29d036f159f0af373 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasInput>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaterialComponent> .

_:a9bbd3a5197f4d479f29d036f159f0af374 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasSpecifiedOutput>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af375 .

_:a9bbd3a5197f4d479f29d036f159f0af630 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af631 .

_:a9bbd3a5197f4d479f29d036f159f0af635 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasInput>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000040> .

_:a9bbd3a5197f4d479f29d036f159f0af636 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasSpecifiedOutput>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af637 .

_:a9bbd3a5197f4d479f29d036f159f0af383 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/functionOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Organization> .

_:a9bbd3a5197f4d479f29d036f159f0af384 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af385 .

_:a9bbd3a5197f4d479f29d036f159f0af389 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000054>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/BusinessProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af770 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000115>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af771 .

_:a9bbd3a5197f4d479f29d036f159f0af774 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000174>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Organization> .

_:a9bbd3a5197f4d479f29d036f159f0af764 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af765 .

_:a9bbd3a5197f4d479f29d036f159f0af394 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af395 .

_:a9bbd3a5197f4d479f29d036f159f0af399 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af400 .

_:a9bbd3a5197f4d479f29d036f159f0af795 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000110>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ActionSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af796 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000110>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ObjectiveSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af408 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af409 .

_:a9bbd3a5197f4d479f29d036f159f0af415 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af416 .

_:a9bbd3a5197f4d479f29d036f159f0af423 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Buyer> .

_:a9bbd3a5197f4d479f29d036f159f0af424 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af425 .

_:a9bbd3a5197f4d479f29d036f159f0af855 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af856 .

_:a9bbd3a5197f4d479f29d036f159f0af895 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af896 .

_:a9bbd3a5197f4d479f29d036f159f0af900 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Supplier> .

_:a9bbd3a5197f4d479f29d036f159f0af458 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasInput>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity> .

_:a9bbd3a5197f4d479f29d036f159f0af459 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasSpecifiedOutput>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity> .

_:a9bbd3a5197f4d479f29d036f159f0af432 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af433 .

_:a9bbd3a5197f4d479f29d036f159f0af467 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af468 .

_:a9bbd3a5197f4d479f29d036f159f0af471 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af472 .

_:a9bbd3a5197f4d479f29d036f159f0af475 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000002> .

_:a9bbd3a5197f4d479f29d036f159f0af476 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af477 .

_:a9bbd3a5197f4d479f29d036f159f0af480 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af481 .

_:a9bbd3a5197f4d479f29d036f159f0af484 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af485 .

_:a9bbd3a5197f4d479f29d036f159f0af492 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af493 .

_:a9bbd3a5197f4d479f29d036f159f0af509 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000054>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af510 .

_:a9bbd3a5197f4d479f29d036f159f0af518 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaterialArtifact> .

_:a9bbd3a5197f4d479f29d036f159f0af523 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af524 .

_:a9bbd3a5197f4d479f29d036f159f0af568 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af569 .

_:a9bbd3a5197f4d479f29d036f159f0af574 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/designates>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000001> .

_:a9bbd3a5197f4d479f29d036f159f0af575 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af576 .

_:a9bbd3a5197f4d479f29d036f159f0af614 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af615 .

_:a9bbd3a5197f4d479f29d036f159f0af621 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af622 .

_:a9bbd3a5197f4d479f29d036f159f0af625 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af626 .

_:a9bbd3a5197f4d479f29d036f159f0af810 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af811 .

_:a9bbd3a5197f4d479f29d036f159f0af652 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000040> .

_:a9bbd3a5197f4d479f29d036f159f0af653 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af654 .

_:a9bbd3a5197f4d479f29d036f159f0af696 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af697 .

_:a9bbd3a5197f4d479f29d036f159f0af850 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Supplier> .

_:a9bbd3a5197f4d479f29d036f159f0af851 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af852 .

_:a9bbd3a5197f4d479f29d036f159f0af705 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af706 .

_:a9bbd3a5197f4d479f29d036f159f0af709 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af710 .

_:a9bbd3a5197f4d479f29d036f159f0af718 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af719 .

_:a9bbd3a5197f4d479f29d036f159f0af726 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/capabilityOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000040> .

_:a9bbd3a5197f4d479f29d036f159f0af727 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000054>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MeasurementProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af750 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af751 .

_:a9bbd3a5197f4d479f29d036f159f0af763 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasSpecifiedOutput>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MeasurementInformationContentEntity> .

_:a9bbd3a5197f4d479f29d036f159f0af728 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af729 .

_:a9bbd3a5197f4d479f29d036f159f0af779 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af780 .

_:a9bbd3a5197f4d479f29d036f159f0af775 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af776 .

_:a9bbd3a5197f4d479f29d036f159f0af787 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af788 .

_:a9bbd3a5197f4d479f29d036f159f0af791 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af792 .

_:a9bbd3a5197f4d479f29d036f159f0af801 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af802 .

_:a9bbd3a5197f4d479f29d036f159f0af824 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af825 .

_:a9bbd3a5197f4d479f29d036f159f0af828 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af829 .

_:a9bbd3a5197f4d479f29d036f159f0af841 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000054>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af842 .

_:a9bbd3a5197f4d479f29d036f159f0af862 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af863 .

_:a9bbd3a5197f4d479f29d036f159f0af884 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af885 .

_:a9bbd3a5197f4d479f29d036f159f0af901 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af902 .

_:a9bbd3a5197f4d479f29d036f159f0af937 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af938 .

_:a9bbd3a5197f4d479f29d036f159f0af283 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af284 .

_:a9bbd3a5197f4d479f29d036f159f0af910 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000054>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af911 .

_:a9bbd3a5197f4d479f29d036f159f0af962 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af963 .

_:a9bbd3a5197f4d479f29d036f159f0af926 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af927 .

_:a9bbd3a5197f4d479f29d036f159f0af912 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000054>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailureProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af913 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000062>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af914 .

_:a9bbd3a5197f4d479f29d036f159f0af917 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000167>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaintainableMaterialItem> .

_:a9bbd3a5197f4d479f29d036f159f0af918 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af919;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailureEvent> .

_:a9bbd3a5197f4d479f29d036f159f0af924 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/initiates>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailedState> .

_:a9bbd3a5197f4d479f29d036f159f0af920 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000062>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af921 .

_:a9bbd3a5197f4d479f29d036f159f0af925 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/describes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/UndesireableDisposition> .

_:a9bbd3a5197f4d479f29d036f159f0af930 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af931 .

_:a9bbd3a5197f4d479f29d036f159f0af934 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000167>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaintainableMaterialItem> .

_:a9bbd3a5197f4d479f29d036f159f0af935 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasInput>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaintainableMaterialItem> .

_:a9bbd3a5197f4d479f29d036f159f0af936 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceStrategy> .

_:a9bbd3a5197f4d479f29d036f159f0af941 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af942 .

_:a9bbd3a5197f4d479f29d036f159f0af947 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af948 .

_:a9bbd3a5197f4d479f29d036f159f0af957 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af958 .

<https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology> a
    <http://www.w3.org/2002/07/owl#Ontology>;
  <http://purl.org/dc/terms/title> "Industrial Ontology Foundry (IOF) Annotation Vocabulary"@en-us,
    "Industrial Ontology Foundry (IOF) Core Ontology", "Industrial Ontology Foundry (IOF) Maintenance Reference Ontology";
  <http://www.w3.org/2000/01/rdf-schema#label> "Annotation Vocabulary (AV)"@en-us, "BFO 2020",
    "Core Ontology"@en-us, "Maintenance Ontology"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/usageNote>
    """1. The intention of using annotations is to 
 a) help a potential user decide if the ontology or a notion therein meets his or her needs and 
 b) help a user or developer understand the 'elements' in the ontology and how to interpret them consistent with the intended interpretation of the IOF.

2. Annotation Usage Conditions
The particular annotations that are required or used will depend on the representation language used. IOF ontologies are published using either OWL or Common Logic. As example, the iof-av:firstOrderLogicDefinition should not be used in ontologies using Common Logic.

3. Formal Definition – A statement or expression made using a formal language. A Formal Language can be considered as composed of symbols (aka the alphabet, aka signature), logical symbols (for conjunction, disjunction, implication, equivalence, and quantification), non-logical symbols, and a a set of rules for creating (well formed) statements/expressions in the language. In the case of OWL there are non-logical symbols for classes, object properties, and data properties and these non-logical symbols are usually natural language terms or phrases.
 a) For the IOF these formal languages include First Order Logic (FOL), Common Logic (CL), and OWL. Note that the last two are used for ontology development.
 b) For classes, the only Formal statements or expressions in an IOF ontology are the First Order Logic Definition annotation and the OWL or Common Logic (class or relation) axioms. Note, in the case of a primitive or axiomatic notion there will be no (complete) necessary and sufficient formal definition or axioms.
 c) One point to bear in mind in the way the IOF is using formal languages is that the majority of the symbols used are not from the Greek alphabet nor single characters (usually) but are derived from natural language terms or phrases. This distinction must be kept in mind.

4. There will be some notions (e.g. classes) that are taken as primitive. They will not have Formal definitions, but may have formal axioms to constrain the intended interpretation."""@en-us;
  <http://www.w3.org/2000/01/rdf-schema#comment> "The most recent version of this file will always be in the GitHub repository https://github.com/bfo-ontology/bfo-2020";
  <http://www.w3.org/2002/07/owl#versionIRI> <https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology/092325>;
  <http://purl.org/dc/elements/1.1/contributor> "Alan Ruttenberg", "Albert Goldfain",
    "Barry Smith", "Bill Duncan", "Bjoern Peters", "Chris Mungall", "David Osumi-Sutherland",
    "Fabian Neuhaus", "James A. Overton", "Janna Hastings", "Jie Zheng", "Jonathan Bona",
    "Larry Hunter", "Leonard Jacuzzo", "Ludger Jansen", "Mark Ressler", "Mathias Brochhausen",
    "Mauricio Almeida", "Melanie Courtot", "Pierre Grenon", "Randall Dipert", "Robert Rovetto",
    "Ron Rudnicki", "Stefan Schulz", "Thomas Bittner", "Werner Ceusters", "Yongqun \"Oliver\" He";
  <http://purl.org/dc/elements/1.1/license> <https://creativecommons.org/licenses/by/4.0/>;
  <http://purl.org/dc/terms/abstract> "The IOF Annotation Vocabulary provides a set of OWL annotation properties for annotating IOF or other content with metadata to facilitate user and ontology developer understanding."@en-us,
    "The IOF Core Ontology contains notions found to be common across multiple manufacturing domains. This file is an RDF implementation of these notions. The ontology utilizes the Basic Formal Ontology or BFO as a top-level ontology but also borrows terms from various domain-independent or mid-level ontologies. The purpose of the ontology is to serve as a foundation for ensuring consistency and interoperability across various domain-specific reference ontologies the IOF publishes.",
    "The purpose of this IOF Maintenance Reference ontology is to support semantic interoperatibility through the use modular ontologies in the maintenance domain. This Ontology contains terms and concepts identified as common in a number of application ontologies for maintenance management, maintenance procedures, asset failure and failure modes and effects analysis. The ontology is aligned with the IOF Core Ontology which is aligned with Basic Formal Ontology and importas terms for other domain independent ontologies.";
  <http://purl.org/dc/terms/contributor> "Ana Teresa Correia, Institut fuer angewandte Systemtechnik Bremen GmbH (ATB-Bremen)"@en-us,
    "Arkopaul Sarkar, Ecole Nationale d'Ingénieurs de Tarbes (ENIT)"@en-us, "Barry Smith, University at Buffalo"@en-us,
    "Boonserm Kulvatunyou, National Institute of Standards and Technology (NIST)"@en-us,
    "Chris Will, National Center for Ontological Research (NCOR)"@en-us, "Dusan Sormaz, Ohio University"@en-us,
    "Elisa Kendall, Thematix Partners LLC"@en-us, "Farhad Ameri, Texas State University"@en-us,
    "Jim Logan, Dassault Systèmes"@en-us, "Melinda Hodkiewicz, University of Western Australia"@en-us,
    "Milos Drobnjakovic, National Institute of Standards and Technology (NIST)"@en-us,
    "Will Sobel, W. V. Sobel LLC"@en-us, "Caitlin Woods, University of Western Australia"@en,
    "Markus Stumptner, University of South Australia"@en, "Matt Selway, University of South Australia"@en,
    "Melinda Hodkiewicz, University of Western Australia"@en;
  <http://purl.org/dc/terms/creator> "Evan Wallace, NIST"@en-us, "IOF Core Working Group"@en-us,
    "IOF Technical Oversight Board (TOB)"@en-us, "Todd Schneider, Engineering Semantics, LLC"@en-us,
    "IOF Maintenance Working Group"@en;
  <http://purl.org/dc/terms/license> "http://opensource.org/licenses/MIT"^^<http://www.w3.org/2001/XMLSchema#anyURI>;
  <http://purl.org/dc/terms/publisher> "Industrial Ontology Foundry"@en-us, "Industrial Ontology Foundry"@en;
  <http://purl.org/dc/terms/references> <http://purl.org/dc/terms/>, <http://www.w3.org/2004/02/skos/core#>;
  <http://www.w3.org/2002/07/owl#versionInfo> "202301"@en-us;
  <http://www.w3.org/2004/02/skos/core#changeNote> "2022-03-31: added new annotations perperties as per \"Annotations Vocabulary Version 1.\""@en-us,
    "2022-09-30: added new annotations and supporting constructs, and modified others to match revised guidance in the IOF Confluence page entitled: \"Annotations Vocabulary Version 2\""@en-us,
    "2022-10-31: revised the IRI structure to correspond to the approved approach to IRI representation documented in https://oagiscore.atlassian.net/wiki/spaces/IOF/pages/3564372109/IRI+Structure+and+Format and ran the RDF serialiser (from FIBO) over the content."@en-us,
    "2022-11-30: changed various annotations properties to match revised guidance for formalizing terms as per \"Annotations Vocabulary Version 2.1\""@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/copyright>
    "Copyright (c) 2022, 2023, Open Applications Group";
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/maturity>
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Provisional>,
    <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/Released>;
  <http://www.w3.org/2002/07/owl#imports> <http://www.semanticweb.org/shata/ontologies/2025/7/maintenanceontology/080525> .

_:a9bbd3a5197f4d479f29d036f159f0af15 a <http://www.w3.org/2002/07/owl#Axiom>;
  <http://www.w3.org/2002/07/owl#annotatedSource> <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/acronym>;
  <http://www.w3.org/2002/07/owl#annotatedProperty> <http://www.w3.org/2004/02/skos/core#definition>;
  <http://www.w3.org/2002/07/owl#annotatedTarget> "an abbreviation usually formed from the initial components of a longer name or phrase"@en-us;
  <https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/adaptedFrom>
    "https://en.wikipedia.org/wiki/Acronym" .

_:a9bbd3a5197f4d479f29d036f159f0af17 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af18 .

_:a9bbd3a5197f4d479f29d036f159f0af18 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000031>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af19 .

_:a9bbd3a5197f4d479f29d036f159f0af19 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af20;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af20 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af21 .

_:a9bbd3a5197f4d479f29d036f159f0af21 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af22 .

_:a9bbd3a5197f4d479f29d036f159f0af22 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af23;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af23 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af25 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af26 .

_:a9bbd3a5197f4d479f29d036f159f0af26 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000031>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af27 .

_:a9bbd3a5197f4d479f29d036f159f0af27 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af28;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af28 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af29 .

_:a9bbd3a5197f4d479f29d036f159f0af29 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af30 .

_:a9bbd3a5197f4d479f29d036f159f0af30 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af31;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af31 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af33 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af35 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af36 .

_:a9bbd3a5197f4d479f29d036f159f0af36 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af38 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af39 .

_:a9bbd3a5197f4d479f29d036f159f0af39 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af41 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af42 .

_:a9bbd3a5197f4d479f29d036f159f0af42 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000035>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af44 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000029>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af45 .

_:a9bbd3a5197f4d479f29d036f159f0af45 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af47 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af48 .

_:a9bbd3a5197f4d479f29d036f159f0af48 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af49;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af49 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af51 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af52 .

_:a9bbd3a5197f4d479f29d036f159f0af52 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af53;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af53 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af55 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af56 .

_:a9bbd3a5197f4d479f29d036f159f0af56 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af57;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af57 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af59 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af60 .

_:a9bbd3a5197f4d479f29d036f159f0af60 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af61;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af61 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af63 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af64 .

_:a9bbd3a5197f4d479f29d036f159f0af64 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af65;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af65 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af67 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af68 .

_:a9bbd3a5197f4d479f29d036f159f0af68 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af69;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af69 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af71 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af72 .

_:a9bbd3a5197f4d479f29d036f159f0af72 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af74 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af75 .

_:a9bbd3a5197f4d479f29d036f159f0af75 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af77 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af78 .

_:a9bbd3a5197f4d479f29d036f159f0af78 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000031>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af79 .

_:a9bbd3a5197f4d479f29d036f159f0af79 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af80;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af80 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af81 .

_:a9bbd3a5197f4d479f29d036f159f0af81 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af82 .

_:a9bbd3a5197f4d479f29d036f159f0af82 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af83;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af83 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af85 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af86 .

_:a9bbd3a5197f4d479f29d036f159f0af86 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000031>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af87 .

_:a9bbd3a5197f4d479f29d036f159f0af87 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af88;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af88 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af89 .

_:a9bbd3a5197f4d479f29d036f159f0af89 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af90 .

_:a9bbd3a5197f4d479f29d036f159f0af90 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af91;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af91 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af93 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af94 .

_:a9bbd3a5197f4d479f29d036f159f0af94 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af95;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af95 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af97 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af98 .

_:a9bbd3a5197f4d479f29d036f159f0af98 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af99;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af99 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af101 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af102 .

_:a9bbd3a5197f4d479f29d036f159f0af102 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af103;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af103 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af105 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af106 .

_:a9bbd3a5197f4d479f29d036f159f0af106 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af107;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af107 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af109 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000029>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af110 .

_:a9bbd3a5197f4d479f29d036f159f0af110 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af112 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af113 .

_:a9bbd3a5197f4d479f29d036f159f0af113 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000035>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af115 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af116 .

_:a9bbd3a5197f4d479f29d036f159f0af116 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af117;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af117 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af118 .

_:a9bbd3a5197f4d479f29d036f159f0af118 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af119 .

_:a9bbd3a5197f4d479f29d036f159f0af119 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af120;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af120 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af122 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af123 .

_:a9bbd3a5197f4d479f29d036f159f0af123 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af124;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af124 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af125 .

_:a9bbd3a5197f4d479f29d036f159f0af125 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af126 .

_:a9bbd3a5197f4d479f29d036f159f0af126 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af127;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af127 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af129 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af130 .

_:a9bbd3a5197f4d479f29d036f159f0af130 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af131;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af131 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af133 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af134 .

_:a9bbd3a5197f4d479f29d036f159f0af134 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af135;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af135 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af137 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af138 .

_:a9bbd3a5197f4d479f29d036f159f0af138 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000035>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af140 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af141 .

_:a9bbd3a5197f4d479f29d036f159f0af141 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000035>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af143 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af144 .

_:a9bbd3a5197f4d479f29d036f159f0af144 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af145;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af145 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af147 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af148 .

_:a9bbd3a5197f4d479f29d036f159f0af148 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af149;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af149 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af151 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af152 .

_:a9bbd3a5197f4d479f29d036f159f0af152 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af153;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af153 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af155 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af156 .

_:a9bbd3a5197f4d479f29d036f159f0af156 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af157;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af157 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af159 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af160 .

_:a9bbd3a5197f4d479f29d036f159f0af160 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af161;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af161 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000024> .

_:a9bbd3a5197f4d479f29d036f159f0af163 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/EngineeredSystem>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af164 .

_:a9bbd3a5197f4d479f29d036f159f0af164 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/GroupOfAgents>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af165 .

_:a9bbd3a5197f4d479f29d036f159f0af165 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af167 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af168 .

_:a9bbd3a5197f4d479f29d036f159f0af168 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af170 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af171 .

_:a9bbd3a5197f4d479f29d036f159f0af171 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af173 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af174 .

_:a9bbd3a5197f4d479f29d036f159f0af174 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af176 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af177 .

_:a9bbd3a5197f4d479f29d036f159f0af177 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af179 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af180 .

_:a9bbd3a5197f4d479f29d036f159f0af180 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af181;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af181 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000024> .

_:a9bbd3a5197f4d479f29d036f159f0af183 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af184 .

_:a9bbd3a5197f4d479f29d036f159f0af184 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af185;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af185 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000024> .

_:a9bbd3a5197f4d479f29d036f159f0af187 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af188 .

_:a9bbd3a5197f4d479f29d036f159f0af188 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af189;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af189 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000024> .

_:a9bbd3a5197f4d479f29d036f159f0af191 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af192 .

_:a9bbd3a5197f4d479f29d036f159f0af192 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af193;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af193 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000024> .

_:a9bbd3a5197f4d479f29d036f159f0af195 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af196 .

_:a9bbd3a5197f4d479f29d036f159f0af196 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af198 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af199 .

_:a9bbd3a5197f4d479f29d036f159f0af199 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af201 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af202 .

_:a9bbd3a5197f4d479f29d036f159f0af202 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af203;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af203 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000024> .

_:a9bbd3a5197f4d479f29d036f159f0af205 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af206 .

_:a9bbd3a5197f4d479f29d036f159f0af206 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af207;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af207 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000024> .

_:a9bbd3a5197f4d479f29d036f159f0af209 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af210 .

_:a9bbd3a5197f4d479f29d036f159f0af210 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af211;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af211 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000024> .

_:a9bbd3a5197f4d479f29d036f159f0af213 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af214 .

_:a9bbd3a5197f4d479f29d036f159f0af214 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af215;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af215 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000024> .

_:a9bbd3a5197f4d479f29d036f159f0af217 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000029>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af218 .

_:a9bbd3a5197f4d479f29d036f159f0af218 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af220 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af221 .

_:a9bbd3a5197f4d479f29d036f159f0af221 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af223 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af224 .

_:a9bbd3a5197f4d479f29d036f159f0af224 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af226 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af227 .

_:a9bbd3a5197f4d479f29d036f159f0af227 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af229 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af230 .

_:a9bbd3a5197f4d479f29d036f159f0af230 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af232 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af233 .

_:a9bbd3a5197f4d479f29d036f159f0af233 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af235 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af236 .

_:a9bbd3a5197f4d479f29d036f159f0af236 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af238 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af239 .

_:a9bbd3a5197f4d479f29d036f159f0af239 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af241 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af242 .

_:a9bbd3a5197f4d479f29d036f159f0af242 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af244 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af245 .

_:a9bbd3a5197f4d479f29d036f159f0af245 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000035>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af246 .

_:a9bbd3a5197f4d479f29d036f159f0af246 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af247 .

_:a9bbd3a5197f4d479f29d036f159f0af247 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000203>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af249 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af250 .

_:a9bbd3a5197f4d479f29d036f159f0af250 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000035>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af251 .

_:a9bbd3a5197f4d479f29d036f159f0af251 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af252 .

_:a9bbd3a5197f4d479f29d036f159f0af252 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000203>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af254 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af255 .

_:a9bbd3a5197f4d479f29d036f159f0af255 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af257 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af258 .

_:a9bbd3a5197f4d479f29d036f159f0af258 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af260 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af261 .

_:a9bbd3a5197f4d479f29d036f159f0af261 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af263 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af264 .

_:a9bbd3a5197f4d479f29d036f159f0af264 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af266 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af267 .

_:a9bbd3a5197f4d479f29d036f159f0af267 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af269 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af270 .

_:a9bbd3a5197f4d479f29d036f159f0af270 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af272 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af273 .

_:a9bbd3a5197f4d479f29d036f159f0af273 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af275 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af276 .

_:a9bbd3a5197f4d479f29d036f159f0af276 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af278 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af279 .

_:a9bbd3a5197f4d479f29d036f159f0af279 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af281 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af282 .

_:a9bbd3a5197f4d479f29d036f159f0af282 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af284 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af285 .

_:a9bbd3a5197f4d479f29d036f159f0af285 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Event>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af292 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af293 .

_:a9bbd3a5197f4d479f29d036f159f0af293 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000009>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af294 .

_:a9bbd3a5197f4d479f29d036f159f0af294 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000018>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af295 .

_:a9bbd3a5197f4d479f29d036f159f0af295 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000026>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af299 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af300 .

_:a9bbd3a5197f4d479f29d036f159f0af300 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af301 .

_:a9bbd3a5197f4d479f29d036f159f0af301 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000035>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af306 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af307 .

_:a9bbd3a5197f4d479f29d036f159f0af307 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000018>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af308 .

_:a9bbd3a5197f4d479f29d036f159f0af308 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000026>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af311 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af312 .

_:a9bbd3a5197f4d479f29d036f159f0af312 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000029>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af313 .

_:a9bbd3a5197f4d479f29d036f159f0af313 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af315 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af316 .

_:a9bbd3a5197f4d479f29d036f159f0af316 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000029>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af317 .

_:a9bbd3a5197f4d479f29d036f159f0af317 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000140>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af322 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af323 .

_:a9bbd3a5197f4d479f29d036f159f0af323 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af324 .

_:a9bbd3a5197f4d479f29d036f159f0af324 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000035>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af326 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af327 .

_:a9bbd3a5197f4d479f29d036f159f0af327 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af328 .

_:a9bbd3a5197f4d479f29d036f159f0af328 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000035>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af330 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af331 .

_:a9bbd3a5197f4d479f29d036f159f0af331 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000038>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af332 .

_:a9bbd3a5197f4d479f29d036f159f0af332 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000148>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af336 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af337 .

_:a9bbd3a5197f4d479f29d036f159f0af337 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000029>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af338 .

_:a9bbd3a5197f4d479f29d036f159f0af338 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af339 .

_:a9bbd3a5197f4d479f29d036f159f0af339 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000140>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af343 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af344 .

_:a9bbd3a5197f4d479f29d036f159f0af344 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000142>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af345 .

_:a9bbd3a5197f4d479f29d036f159f0af345 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000147>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

<https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology/CircuitCardAssembly>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#label> "Circuit Card Assembly";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Assembly> .

_:a9bbd3a5197f4d479f29d036f159f0af350 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af351;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af355 .

_:a9bbd3a5197f4d479f29d036f159f0af351 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af352 .

_:a9bbd3a5197f4d479f29d036f159f0af355 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af356;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af352 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/EngineeredSystem>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af353 .

_:a9bbd3a5197f4d479f29d036f159f0af353 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/GroupOfAgents>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af354 .

_:a9bbd3a5197f4d479f29d036f159f0af354 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af356 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/AgentRole> .

_:a9bbd3a5197f4d479f29d036f159f0af358 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af359 .

_:a9bbd3a5197f4d479f29d036f159f0af359 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af360;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af364 .

_:a9bbd3a5197f4d479f29d036f159f0af360 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af361 .

_:a9bbd3a5197f4d479f29d036f159f0af364 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af365;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af361 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af362 .

_:a9bbd3a5197f4d479f29d036f159f0af362 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af363;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af363 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000024> .

_:a9bbd3a5197f4d479f29d036f159f0af365 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/actsOnBehalfOfAtSomeTime>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af366 .

_:a9bbd3a5197f4d479f29d036f159f0af366 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af367 .

_:a9bbd3a5197f4d479f29d036f159f0af367 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/EngineeredSystem>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af368 .

_:a9bbd3a5197f4d479f29d036f159f0af368 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/GroupOfAgents>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af369 .

_:a9bbd3a5197f4d479f29d036f159f0af369 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af372 <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/core/Core/componentPartOfAtAllTimes> .

_:a9bbd3a5197f4d479f29d036f159f0af375 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af376 .

_:a9bbd3a5197f4d479f29d036f159f0af376 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Assembly>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af377 .

_:a9bbd3a5197f4d479f29d036f159f0af377 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af378;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af378 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasComponentPartAtAllTimes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af379 .

_:a9bbd3a5197f4d479f29d036f159f0af379 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af380 .

_:a9bbd3a5197f4d479f29d036f159f0af380 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/MaterialComponent>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af381 .

_:a9bbd3a5197f4d479f29d036f159f0af381 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af382;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af382 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isInputOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ManufacturingProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af385 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af386 .

_:a9bbd3a5197f4d479f29d036f159f0af386 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ObjectiveSpecification>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af387 .

_:a9bbd3a5197f4d479f29d036f159f0af387 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af388;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af388 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000084>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Organization> .

_:a9bbd3a5197f4d479f29d036f159f0af391 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af392 .

_:a9bbd3a5197f4d479f29d036f159f0af392 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af393;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af393 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000196>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/BusinessFunction> .

_:a9bbd3a5197f4d479f29d036f159f0af395 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af396 .

_:a9bbd3a5197f4d479f29d036f159f0af396 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Agent>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af397 .

_:a9bbd3a5197f4d479f29d036f159f0af397 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af398;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af398 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/actsOnBehalfOfAtSomeTime>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/BusinessOrganization> .

_:a9bbd3a5197f4d479f29d036f159f0af400 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af401 .

_:a9bbd3a5197f4d479f29d036f159f0af401 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af402 .

_:a9bbd3a5197f4d479f29d036f159f0af402 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af403;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af403 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000110>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af404 .

_:a9bbd3a5197f4d479f29d036f159f0af404 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af405 .

_:a9bbd3a5197f4d479f29d036f159f0af405 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ObjectiveSpecification>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af406 .

_:a9bbd3a5197f4d479f29d036f159f0af406 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af407;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af407 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000084>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/BusinessOrganization> .

_:a9bbd3a5197f4d479f29d036f159f0af409 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af410;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af413 .

_:a9bbd3a5197f4d479f29d036f159f0af410 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af411 .

_:a9bbd3a5197f4d479f29d036f159f0af413 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af414;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af411 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af412 .

_:a9bbd3a5197f4d479f29d036f159f0af412 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af414 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/BuyerRole> .

_:a9bbd3a5197f4d479f29d036f159f0af416 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af417 .

_:a9bbd3a5197f4d479f29d036f159f0af417 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af418;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af421 .

_:a9bbd3a5197f4d479f29d036f159f0af418 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af419 .

_:a9bbd3a5197f4d479f29d036f159f0af421 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af422;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af419 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af420 .

_:a9bbd3a5197f4d479f29d036f159f0af420 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af422 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000056>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/BuyingBusinessProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af425 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af426 .

_:a9bbd3a5197f4d479f29d036f159f0af426 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/CommercialServiceAgreement>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af427 .

_:a9bbd3a5197f4d479f29d036f159f0af427 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/MaterialProduct>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af433 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af434 .

_:a9bbd3a5197f4d479f29d036f159f0af434 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af435;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af447 .

_:a9bbd3a5197f4d479f29d036f159f0af435 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af436 .

_:a9bbd3a5197f4d479f29d036f159f0af447 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af448;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af449 .

_:a9bbd3a5197f4d479f29d036f159f0af436 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af437;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af445 .

_:a9bbd3a5197f4d479f29d036f159f0af437 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/achievesAtSomeTime>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af438 .

_:a9bbd3a5197f4d479f29d036f159f0af445 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af446;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af438 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af439 .

_:a9bbd3a5197f4d479f29d036f159f0af439 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ObjectiveSpecification>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af440 .

_:a9bbd3a5197f4d479f29d036f159f0af440 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af441;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af441 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000177>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af442 .

_:a9bbd3a5197f4d479f29d036f159f0af442 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af443 .

_:a9bbd3a5197f4d479f29d036f159f0af443 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Algorithm>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af444 .

_:a9bbd3a5197f4d479f29d036f159f0af444 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/EncodedAlgorithm>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af446 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasSpecifiedOutput>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity> .

_:a9bbd3a5197f4d479f29d036f159f0af448 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Agent> .

_:a9bbd3a5197f4d479f29d036f159f0af449 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af450;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af450 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000059>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af451 .

_:a9bbd3a5197f4d479f29d036f159f0af451 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af452 .

_:a9bbd3a5197f4d479f29d036f159f0af452 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af453;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af456 .

_:a9bbd3a5197f4d479f29d036f159f0af453 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af454 .

_:a9bbd3a5197f4d479f29d036f159f0af456 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af457;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af454 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Algorithm>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af455 .

_:a9bbd3a5197f4d479f29d036f159f0af455 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/EncodedAlgorithm>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af457 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000084>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Agent> .

_:a9bbd3a5197f4d479f29d036f159f0af461 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af462;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af465 .

_:a9bbd3a5197f4d479f29d036f159f0af462 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af463 .

_:a9bbd3a5197f4d479f29d036f159f0af465 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af466;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af463 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af464 .

_:a9bbd3a5197f4d479f29d036f159f0af464 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af466 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/CustomerRole> .

_:a9bbd3a5197f4d479f29d036f159f0af468 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af469 .

_:a9bbd3a5197f4d479f29d036f159f0af469 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af470 .

_:a9bbd3a5197f4d479f29d036f159f0af470 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af472 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af473 .

_:a9bbd3a5197f4d479f29d036f159f0af473 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af474;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af474 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/describes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000001> .

_:a9bbd3a5197f4d479f29d036f159f0af477 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af478 .

_:a9bbd3a5197f4d479f29d036f159f0af478 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af479;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af479 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/designates>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000001> .

_:a9bbd3a5197f4d479f29d036f159f0af481 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000034>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af482 .

_:a9bbd3a5197f4d479f29d036f159f0af482 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af483;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af483 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/DesignSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af485 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af486 .

_:a9bbd3a5197f4d479f29d036f159f0af486 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af487;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af487 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000001> .

_:a9bbd3a5197f4d479f29d036f159f0af489 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/System>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af490 .

_:a9bbd3a5197f4d479f29d036f159f0af490 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af491;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af491 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000196>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/DesignedFunction> .

_:a9bbd3a5197f4d479f29d036f159f0af493 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af494;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af503 .

_:a9bbd3a5197f4d479f29d036f159f0af494 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/roleOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af495 .

_:a9bbd3a5197f4d479f29d036f159f0af503 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af504;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af495 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af496 .

_:a9bbd3a5197f4d479f29d036f159f0af496 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/MaterialArtifact>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af497 .

_:a9bbd3a5197f4d479f29d036f159f0af497 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af498;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af498 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af499 .

_:a9bbd3a5197f4d479f29d036f159f0af499 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af500 .

_:a9bbd3a5197f4d479f29d036f159f0af500 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af501 .

_:a9bbd3a5197f4d479f29d036f159f0af501 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af502;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af502 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000177>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af504 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/satisfiesRequirement>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af505 .

_:a9bbd3a5197f4d479f29d036f159f0af505 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af506 .

_:a9bbd3a5197f4d479f29d036f159f0af506 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/RequirementSpecification>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af507 .

_:a9bbd3a5197f4d479f29d036f159f0af507 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af508;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af508 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000177>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af510 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af511 .

_:a9bbd3a5197f4d479f29d036f159f0af511 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af512 .

_:a9bbd3a5197f4d479f29d036f159f0af512 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af513;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af513 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000055>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af514 .

_:a9bbd3a5197f4d479f29d036f159f0af514 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af515 .

_:a9bbd3a5197f4d479f29d036f159f0af515 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000034>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af516 .

_:a9bbd3a5197f4d479f29d036f159f0af516 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af517;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af517 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/functionOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaterialArtifact> .

_:a9bbd3a5197f4d479f29d036f159f0af520 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af521 .

_:a9bbd3a5197f4d479f29d036f159f0af521 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000035>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af524 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af525 .

_:a9bbd3a5197f4d479f29d036f159f0af525 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af526;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af556 .

_:a9bbd3a5197f4d479f29d036f159f0af526 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af527 .

_:a9bbd3a5197f4d479f29d036f159f0af556 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af557;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af527 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af528;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af554 .

_:a9bbd3a5197f4d479f29d036f159f0af528 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000199>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af529 .

_:a9bbd3a5197f4d479f29d036f159f0af554 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af555;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af529 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af530 .

_:a9bbd3a5197f4d479f29d036f159f0af530 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af531 .

_:a9bbd3a5197f4d479f29d036f159f0af531 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af532;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af532 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af533 .

_:a9bbd3a5197f4d479f29d036f159f0af533 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af534;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af540 .

_:a9bbd3a5197f4d479f29d036f159f0af534 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/meets>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af535 .

_:a9bbd3a5197f4d479f29d036f159f0af540 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af541;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af547 .

_:a9bbd3a5197f4d479f29d036f159f0af535 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af536 .

_:a9bbd3a5197f4d479f29d036f159f0af536 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af537 .

_:a9bbd3a5197f4d479f29d036f159f0af537 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af538;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af538 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af539;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000023> .

_:a9bbd3a5197f4d479f29d036f159f0af539 <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000108> .

_:a9bbd3a5197f4d479f29d036f159f0af541 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/temporallyOverlaps>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af542 .

_:a9bbd3a5197f4d479f29d036f159f0af547 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af548;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af542 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af543 .

_:a9bbd3a5197f4d479f29d036f159f0af543 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af544 .

_:a9bbd3a5197f4d479f29d036f159f0af544 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af545;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af545 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af546;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000023> .

_:a9bbd3a5197f4d479f29d036f159f0af546 <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000108> .

_:a9bbd3a5197f4d479f29d036f159f0af548 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/temporallyStarts>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af549 .

_:a9bbd3a5197f4d479f29d036f159f0af549 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af550 .

_:a9bbd3a5197f4d479f29d036f159f0af550 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af551 .

_:a9bbd3a5197f4d479f29d036f159f0af551 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af552;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af552 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af553;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000023> .

_:a9bbd3a5197f4d479f29d036f159f0af553 <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000108> .

_:a9bbd3a5197f4d479f29d036f159f0af555 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasOutput>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000023> .

_:a9bbd3a5197f4d479f29d036f159f0af557 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000167>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af558 .

_:a9bbd3a5197f4d479f29d036f159f0af558 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af559 .

_:a9bbd3a5197f4d479f29d036f159f0af559 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af560 .

_:a9bbd3a5197f4d479f29d036f159f0af560 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af561;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af561 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af563 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000027>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af564 .

_:a9bbd3a5197f4d479f29d036f159f0af564 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af565;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af566 .

_:a9bbd3a5197f4d479f29d036f159f0af565 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000115>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Agent> .

_:a9bbd3a5197f4d479f29d036f159f0af566 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af567;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af567 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000115>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Agent> .

_:a9bbd3a5197f4d479f29d036f159f0af569 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000027>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af570 .

_:a9bbd3a5197f4d479f29d036f159f0af570 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af571;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af572 .

_:a9bbd3a5197f4d479f29d036f159f0af571 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000115>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Person> .

_:a9bbd3a5197f4d479f29d036f159f0af572 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af573;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af573 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000115>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Person> .

_:a9bbd3a5197f4d479f29d036f159f0af576 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af577 .

_:a9bbd3a5197f4d479f29d036f159f0af577 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af578;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af608 .

_:a9bbd3a5197f4d479f29d036f159f0af578 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af579 .

_:a9bbd3a5197f4d479f29d036f159f0af608 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af609;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af579 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af580;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af606 .

_:a9bbd3a5197f4d479f29d036f159f0af580 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000199>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af581 .

_:a9bbd3a5197f4d479f29d036f159f0af606 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af607;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af581 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af582 .

_:a9bbd3a5197f4d479f29d036f159f0af582 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af583 .

_:a9bbd3a5197f4d479f29d036f159f0af583 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af584;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af584 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af585 .

_:a9bbd3a5197f4d479f29d036f159f0af585 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af586;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af592 .

_:a9bbd3a5197f4d479f29d036f159f0af586 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isTemporallyOverlappedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af587 .

_:a9bbd3a5197f4d479f29d036f159f0af592 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af593;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af599 .

_:a9bbd3a5197f4d479f29d036f159f0af587 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af588 .

_:a9bbd3a5197f4d479f29d036f159f0af588 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af589 .

_:a9bbd3a5197f4d479f29d036f159f0af589 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af590;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af590 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af591;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000023> .

_:a9bbd3a5197f4d479f29d036f159f0af591 <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000108> .

_:a9bbd3a5197f4d479f29d036f159f0af593 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/metBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af594 .

_:a9bbd3a5197f4d479f29d036f159f0af599 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af600;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af594 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af595 .

_:a9bbd3a5197f4d479f29d036f159f0af595 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af596 .

_:a9bbd3a5197f4d479f29d036f159f0af596 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af597;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af597 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af598;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000023> .

_:a9bbd3a5197f4d479f29d036f159f0af598 <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000108> .

_:a9bbd3a5197f4d479f29d036f159f0af600 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/temporallyFinishes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af601 .

_:a9bbd3a5197f4d479f29d036f159f0af601 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af602 .

_:a9bbd3a5197f4d479f29d036f159f0af602 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000202>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af603 .

_:a9bbd3a5197f4d479f29d036f159f0af603 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af604;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af604 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af605;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000023> .

_:a9bbd3a5197f4d479f29d036f159f0af605 <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000108> .

_:a9bbd3a5197f4d479f29d036f159f0af607 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasInput>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000023> .

_:a9bbd3a5197f4d479f29d036f159f0af609 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000167>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af610 .

_:a9bbd3a5197f4d479f29d036f159f0af610 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af611 .

_:a9bbd3a5197f4d479f29d036f159f0af611 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af612 .

_:a9bbd3a5197f4d479f29d036f159f0af612 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af613;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af613 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af615 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af616;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af619 .

_:a9bbd3a5197f4d479f29d036f159f0af616 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af617 .

_:a9bbd3a5197f4d479f29d036f159f0af619 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af620;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af617 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/EngineeredSystem>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af618 .

_:a9bbd3a5197f4d479f29d036f159f0af618 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/MaterialArtifact>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af620 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaintainableMaterialItemRole> .

_:a9bbd3a5197f4d479f29d036f159f0af622 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af623 .

_:a9bbd3a5197f4d479f29d036f159f0af623 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af624;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af624 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ManufacturerRole> .

_:a9bbd3a5197f4d479f29d036f159f0af626 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af627 .

_:a9bbd3a5197f4d479f29d036f159f0af627 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af628 .

_:a9bbd3a5197f4d479f29d036f159f0af628 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af629;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af629 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000056>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ProductProductionProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af631 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af632 .

_:a9bbd3a5197f4d479f29d036f159f0af632 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Agent>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af633 .

_:a9bbd3a5197f4d479f29d036f159f0af633 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af634;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af634 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000101>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af637 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af638 .

_:a9bbd3a5197f4d479f29d036f159f0af638 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/MaterialArtifact>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af639 .

_:a9bbd3a5197f4d479f29d036f159f0af639 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af640;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af640 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af641 .

_:a9bbd3a5197f4d479f29d036f159f0af641 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af642 .

_:a9bbd3a5197f4d479f29d036f159f0af642 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af643;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af643 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/DesignSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af645 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000030>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af646 .

_:a9bbd3a5197f4d479f29d036f159f0af646 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af647;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af647 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000196>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/DesignedFunction> .

_:a9bbd3a5197f4d479f29d036f159f0af649 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af650 .

_:a9bbd3a5197f4d479f29d036f159f0af650 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af651;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af651 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaterialComponentRole> .

_:a9bbd3a5197f4d479f29d036f159f0af654 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af655 .

_:a9bbd3a5197f4d479f29d036f159f0af655 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af656 .

_:a9bbd3a5197f4d479f29d036f159f0af656 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af657;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af674 .

_:a9bbd3a5197f4d479f29d036f159f0af657 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af658;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af659 .

_:a9bbd3a5197f4d479f29d036f159f0af674 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af675;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af658 <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000170> .

_:a9bbd3a5197f4d479f29d036f159f0af659 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af660 .

_:a9bbd3a5197f4d479f29d036f159f0af660 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af661 .

_:a9bbd3a5197f4d479f29d036f159f0af661 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af662;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af663 .

_:a9bbd3a5197f4d479f29d036f159f0af662 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000082>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000029> .

_:a9bbd3a5197f4d479f29d036f159f0af663 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af664;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af664 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000108>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af665 .

_:a9bbd3a5197f4d479f29d036f159f0af665 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af666 .

_:a9bbd3a5197f4d479f29d036f159f0af666 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000203>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af667 .

_:a9bbd3a5197f4d479f29d036f159f0af667 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af668;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af668 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af669 .

_:a9bbd3a5197f4d479f29d036f159f0af669 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af670;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af671 .

_:a9bbd3a5197f4d479f29d036f159f0af670 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000221>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000008> .

_:a9bbd3a5197f4d479f29d036f159f0af671 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af672;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af672 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af673;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af673 <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000199> .

_:a9bbd3a5197f4d479f29d036f159f0af675 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af676;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af677 .

_:a9bbd3a5197f4d479f29d036f159f0af676 <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000170> .

_:a9bbd3a5197f4d479f29d036f159f0af677 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af678 .

_:a9bbd3a5197f4d479f29d036f159f0af678 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af679 .

_:a9bbd3a5197f4d479f29d036f159f0af679 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af680;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af681 .

_:a9bbd3a5197f4d479f29d036f159f0af680 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000082>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000029> .

_:a9bbd3a5197f4d479f29d036f159f0af681 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af682;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af682 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000108>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af683 .

_:a9bbd3a5197f4d479f29d036f159f0af683 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af684 .

_:a9bbd3a5197f4d479f29d036f159f0af684 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000203>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af685 .

_:a9bbd3a5197f4d479f29d036f159f0af685 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af686;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af686 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000223>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af687 .

_:a9bbd3a5197f4d479f29d036f159f0af687 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af688 .

_:a9bbd3a5197f4d479f29d036f159f0af688 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000008>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af689 .

_:a9bbd3a5197f4d479f29d036f159f0af689 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af690;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af690 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af691;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af691 <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000199> .

_:a9bbd3a5197f4d479f29d036f159f0af693 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af694 .

_:a9bbd3a5197f4d479f29d036f159f0af694 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af695;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af695 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaterialProductRole> .

_:a9bbd3a5197f4d479f29d036f159f0af697 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af698 .

_:a9bbd3a5197f4d479f29d036f159f0af698 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af699 .

_:a9bbd3a5197f4d479f29d036f159f0af699 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af700;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af700 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000056>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af701 .

_:a9bbd3a5197f4d479f29d036f159f0af701 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af702 .

_:a9bbd3a5197f4d479f29d036f159f0af702 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/BuyingBusinessProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af703 .

_:a9bbd3a5197f4d479f29d036f159f0af703 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/SellingBusinessProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af704 .

_:a9bbd3a5197f4d479f29d036f159f0af704 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/SupplyingBusinessProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af706 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af707 .

_:a9bbd3a5197f4d479f29d036f159f0af707 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af708;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af708 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaterialResourceRole> .

_:a9bbd3a5197f4d479f29d036f159f0af710 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af711 .

_:a9bbd3a5197f4d479f29d036f159f0af711 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af712 .

_:a9bbd3a5197f4d479f29d036f159f0af712 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af713;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af713 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isAvailableToAtSomeTime>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af714 .

_:a9bbd3a5197f4d479f29d036f159f0af714 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af715 .

_:a9bbd3a5197f4d479f29d036f159f0af715 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/EngineeredSystem>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af716 .

_:a9bbd3a5197f4d479f29d036f159f0af716 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/GroupOfAgents>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af717 .

_:a9bbd3a5197f4d479f29d036f159f0af717 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af719 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af720 .

_:a9bbd3a5197f4d479f29d036f159f0af720 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af721;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af721 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isMeasuredValueOfAtSomeTime>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af722 .

_:a9bbd3a5197f4d479f29d036f159f0af722 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af723 .

_:a9bbd3a5197f4d479f29d036f159f0af723 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000008>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af724 .

_:a9bbd3a5197f4d479f29d036f159f0af724 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af725 .

_:a9bbd3a5197f4d479f29d036f159f0af725 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ProcessCharacteristic>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af729 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af730 .

_:a9bbd3a5197f4d479f29d036f159f0af730 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af731;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af732 .

_:a9bbd3a5197f4d479f29d036f159f0af731 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000110>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MeasuredValueExpression> .

_:a9bbd3a5197f4d479f29d036f159f0af732 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af733;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af738 .

_:a9bbd3a5197f4d479f29d036f159f0af733 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/describes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af734 .

_:a9bbd3a5197f4d479f29d036f159f0af738 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af739;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af748 .

_:a9bbd3a5197f4d479f29d036f159f0af734 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af735 .

_:a9bbd3a5197f4d479f29d036f159f0af735 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000008>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af736 .

_:a9bbd3a5197f4d479f29d036f159f0af736 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af737 .

_:a9bbd3a5197f4d479f29d036f159f0af737 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ProcessCharacteristic>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af739 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isAbout>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af740 .

_:a9bbd3a5197f4d479f29d036f159f0af748 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af749;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af740 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af741 .

_:a9bbd3a5197f4d479f29d036f159f0af741 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af742 .

_:a9bbd3a5197f4d479f29d036f159f0af742 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000035>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af743 .

_:a9bbd3a5197f4d479f29d036f159f0af743 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af744;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af744 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af745 .

_:a9bbd3a5197f4d479f29d036f159f0af745 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af746 .

_:a9bbd3a5197f4d479f29d036f159f0af746 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af747;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af747 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <http://purl.obolibrary.org/obo/BFO_0000006> .

_:a9bbd3a5197f4d479f29d036f159f0af749 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isOutputOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MeasurementProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af751 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af752 .

_:a9bbd3a5197f4d479f29d036f159f0af752 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af753;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af757 .

_:a9bbd3a5197f4d479f29d036f159f0af753 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af754 .

_:a9bbd3a5197f4d479f29d036f159f0af757 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af758;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af754 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af755 .

_:a9bbd3a5197f4d479f29d036f159f0af755 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af756;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af756 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasCapability>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MeasurementCapability> .

_:a9bbd3a5197f4d479f29d036f159f0af758 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/measuresAtSomeTime>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af759 .

_:a9bbd3a5197f4d479f29d036f159f0af759 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af760 .

_:a9bbd3a5197f4d479f29d036f159f0af760 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000008>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af761 .

_:a9bbd3a5197f4d479f29d036f159f0af761 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af762 .

_:a9bbd3a5197f4d479f29d036f159f0af762 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ProcessCharacteristic>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af765 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/OrganizedGroupOfAgents>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af766 .

_:a9bbd3a5197f4d479f29d036f159f0af766 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af767;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af768 .

_:a9bbd3a5197f4d479f29d036f159f0af767 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000172>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Person> .

_:a9bbd3a5197f4d479f29d036f159f0af768 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af769;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af769 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/designatedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/OrganizationIdentifier> .

_:a9bbd3a5197f4d479f29d036f159f0af771 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af772 .

_:a9bbd3a5197f4d479f29d036f159f0af772 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af773 .

_:a9bbd3a5197f4d479f29d036f159f0af773 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af776 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Identifier>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af777 .

_:a9bbd3a5197f4d479f29d036f159f0af777 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af778;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af778 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/designates>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Organization> .

_:a9bbd3a5197f4d479f29d036f159f0af780 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/GroupOfAgents>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af781 .

_:a9bbd3a5197f4d479f29d036f159f0af781 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af782;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af782 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000196>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af783 .

_:a9bbd3a5197f4d479f29d036f159f0af783 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af784 .

_:a9bbd3a5197f4d479f29d036f159f0af784 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000034>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af785 .

_:a9bbd3a5197f4d479f29d036f159f0af785 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af786;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af786 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/DirectiveInformationContentEntity> .

_:a9bbd3a5197f4d479f29d036f159f0af788 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Identifier>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af789 .

_:a9bbd3a5197f4d479f29d036f159f0af789 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af790;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af790 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/designates>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000029> .

_:a9bbd3a5197f4d479f29d036f159f0af792 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/MaterialArtifact>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af793 .

_:a9bbd3a5197f4d479f29d036f159f0af793 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af794;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af794 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/EquipmentRole> .

_:a9bbd3a5197f4d479f29d036f159f0af798 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af799 .

_:a9bbd3a5197f4d479f29d036f159f0af799 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af800;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af800 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af802 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/BusinessProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af803 .

_:a9bbd3a5197f4d479f29d036f159f0af803 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af804;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af805 .

_:a9bbd3a5197f4d479f29d036f159f0af804 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000117>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/BuyingBusinessProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af805 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af806;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af806 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000117>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af807 .

_:a9bbd3a5197f4d479f29d036f159f0af807 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af808 .

_:a9bbd3a5197f4d479f29d036f159f0af808 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/SellingBusinessProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af809 .

_:a9bbd3a5197f4d479f29d036f159f0af809 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/SupplyingBusinessProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af811 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/BusinessProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af812 .

_:a9bbd3a5197f4d479f29d036f159f0af812 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af813;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af814 .

_:a9bbd3a5197f4d479f29d036f159f0af813 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000117>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ManufacturingProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af814 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af815;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af822 .

_:a9bbd3a5197f4d479f29d036f159f0af815 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000199>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af816 .

_:a9bbd3a5197f4d479f29d036f159f0af822 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af823;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af816 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af817 .

_:a9bbd3a5197f4d479f29d036f159f0af817 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000008>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af818 .

_:a9bbd3a5197f4d479f29d036f159f0af818 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af819;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af819 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/temporallyOverlaps>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af820 .

_:a9bbd3a5197f4d479f29d036f159f0af820 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> _:a9bbd3a5197f4d479f29d036f159f0af821;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaterialProduct> .

_:a9bbd3a5197f4d479f29d036f159f0af821 <http://www.w3.org/2002/07/owl#inverseOf> <http://purl.obolibrary.org/obo/BFO_0000108> .

_:a9bbd3a5197f4d479f29d036f159f0af823 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasSpecifiedOutput>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaterialProduct> .

_:a9bbd3a5197f4d479f29d036f159f0af825 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af826 .

_:a9bbd3a5197f4d479f29d036f159f0af826 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af827;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af827 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/RawMaterialRole> .

_:a9bbd3a5197f4d479f29d036f159f0af829 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af830 .

_:a9bbd3a5197f4d479f29d036f159f0af830 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000040>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af831 .

_:a9bbd3a5197f4d479f29d036f159f0af831 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af832;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af832 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000056>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af833 .

_:a9bbd3a5197f4d479f29d036f159f0af833 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af834 .

_:a9bbd3a5197f4d479f29d036f159f0af834 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/BuyingBusinessProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af835 .

_:a9bbd3a5197f4d479f29d036f159f0af835 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af836;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af836 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af837 .

_:a9bbd3a5197f4d479f29d036f159f0af837 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af838 .

_:a9bbd3a5197f4d479f29d036f159f0af838 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af839 .

_:a9bbd3a5197f4d479f29d036f159f0af839 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af840;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af840 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/BuyerRole> .

_:a9bbd3a5197f4d479f29d036f159f0af842 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af843 .

_:a9bbd3a5197f4d479f29d036f159f0af843 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ProductProductionProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af844 .

_:a9bbd3a5197f4d479f29d036f159f0af844 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af845;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af845 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af846 .

_:a9bbd3a5197f4d479f29d036f159f0af846 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ManufacturingProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af847 .

_:a9bbd3a5197f4d479f29d036f159f0af847 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af848;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af848 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000132>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ProductProductionProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af852 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af853 .

_:a9bbd3a5197f4d479f29d036f159f0af853 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/CommercialServiceAgreement>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af854 .

_:a9bbd3a5197f4d479f29d036f159f0af854 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/MaterialProduct>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af856 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af857;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af860 .

_:a9bbd3a5197f4d479f29d036f159f0af857 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af858 .

_:a9bbd3a5197f4d479f29d036f159f0af860 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af861;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af858 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af859 .

_:a9bbd3a5197f4d479f29d036f159f0af859 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af861 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ServiceProviderRole> .

_:a9bbd3a5197f4d479f29d036f159f0af863 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af864 .

_:a9bbd3a5197f4d479f29d036f159f0af864 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af865;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af868 .

_:a9bbd3a5197f4d479f29d036f159f0af865 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af866 .

_:a9bbd3a5197f4d479f29d036f159f0af868 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af869;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af866 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af867 .

_:a9bbd3a5197f4d479f29d036f159f0af867 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af869 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000056>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af870 .

_:a9bbd3a5197f4d479f29d036f159f0af870 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af871 .

_:a9bbd3a5197f4d479f29d036f159f0af871 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/CommercialService>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af872 .

_:a9bbd3a5197f4d479f29d036f159f0af872 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af873;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af873 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af874 .

_:a9bbd3a5197f4d479f29d036f159f0af874 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/SellingBusinessProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af875 .

_:a9bbd3a5197f4d479f29d036f159f0af875 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af876;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af876 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/CommercialServiceAgreement> .

_:a9bbd3a5197f4d479f29d036f159f0af878 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af879;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af882 .

_:a9bbd3a5197f4d479f29d036f159f0af879 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af880 .

_:a9bbd3a5197f4d479f29d036f159f0af882 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af883;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af880 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af881 .

_:a9bbd3a5197f4d479f29d036f159f0af881 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af883 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/hasRole>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/SupplierRole> .

_:a9bbd3a5197f4d479f29d036f159f0af885 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af886 .

_:a9bbd3a5197f4d479f29d036f159f0af886 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af887;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af890 .

_:a9bbd3a5197f4d479f29d036f159f0af887 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af888 .

_:a9bbd3a5197f4d479f29d036f159f0af890 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af891;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af888 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af889 .

_:a9bbd3a5197f4d479f29d036f159f0af889 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af891 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000056>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af892 .

_:a9bbd3a5197f4d479f29d036f159f0af892 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af893 .

_:a9bbd3a5197f4d479f29d036f159f0af893 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/SellingBusinessProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af894 .

_:a9bbd3a5197f4d479f29d036f159f0af894 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/SupplyingBusinessProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af896 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af897;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af898 .

_:a9bbd3a5197f4d479f29d036f159f0af897 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000057>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaterialProduct> .

_:a9bbd3a5197f4d479f29d036f159f0af898 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af899;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af899 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000132>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/CommercialService> .

_:a9bbd3a5197f4d479f29d036f159f0af902 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af903 .

_:a9bbd3a5197f4d479f29d036f159f0af903 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af904;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af904 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isValueExpressionOfAtAllTimes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000202> .

_:a9bbd3a5197f4d479f29d036f159f0af906 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ValueExpression>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af907 .

_:a9bbd3a5197f4d479f29d036f159f0af907 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af908;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af908 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isValueExpressionOfAtAllTimes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000203> .

_:a9bbd3a5197f4d479f29d036f159f0af911 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#complementOf> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailureProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af914 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af915 .

_:a9bbd3a5197f4d479f29d036f159f0af915 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/DegradedState>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af916 .

_:a9bbd3a5197f4d479f29d036f159f0af916 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/OperatingState>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af919 <http://www.w3.org/2002/07/owl#inverseOf> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/initiates> .

_:a9bbd3a5197f4d479f29d036f159f0af921 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af922 .

_:a9bbd3a5197f4d479f29d036f159f0af922 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailureEvent>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af923 .

_:a9bbd3a5197f4d479f29d036f159f0af923 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailureProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af927 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af928 .

_:a9bbd3a5197f4d479f29d036f159f0af928 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af929;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af929 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000055>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/DispositionToFail> .

_:a9bbd3a5197f4d479f29d036f159f0af931 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af932 .

_:a9bbd3a5197f4d479f29d036f159f0af932 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af933;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af933 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000055>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000034> .

_:a9bbd3a5197f4d479f29d036f159f0af938 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/DegradedState>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af939 .

_:a9bbd3a5197f4d479f29d036f159f0af939 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailedState>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af940 .

_:a9bbd3a5197f4d479f29d036f159f0af940 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/OperatingState>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af942 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af943 .

_:a9bbd3a5197f4d479f29d036f159f0af943 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af944;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af945 .

_:a9bbd3a5197f4d479f29d036f159f0af944 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/describes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af945 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af946;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af946 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isInputOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af948 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Person>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af949 .

_:a9bbd3a5197f4d479f29d036f159f0af949 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af950;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af951 .

_:a9bbd3a5197f4d479f29d036f159f0af950 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000056>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceActivity> .

_:a9bbd3a5197f4d479f29d036f159f0af951 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af952;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af952 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/satisfiesRequirement>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af953 .

_:a9bbd3a5197f4d479f29d036f159f0af953 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af954 .

_:a9bbd3a5197f4d479f29d036f159f0af954 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/QualificationSpecification>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af955 .

_:a9bbd3a5197f4d479f29d036f159f0af955 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af956;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af956 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceActivity> .

_:a9bbd3a5197f4d479f29d036f159f0af958 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af959;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af960 .

_:a9bbd3a5197f4d479f29d036f159f0af959 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000056>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FunctioningProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af960 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af961;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af961 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/functionOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/MaintainableMaterialItem> .

_:a9bbd3a5197f4d479f29d036f159f0af963 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/DispositionToExhibitUndesirableBehavior>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af964 .

_:a9bbd3a5197f4d479f29d036f159f0af964 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/DispositionToFail>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af965 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af966 .

_:a9bbd3a5197f4d479f29d036f159f0af966 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000031>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af967 .

_:a9bbd3a5197f4d479f29d036f159f0af967 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af968;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af968 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isAbout>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000001> .

_:a9bbd3a5197f4d479f29d036f159f0af969 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/BusinessFunction>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af970 .

_:a9bbd3a5197f4d479f29d036f159f0af970 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000034>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af971 .

_:a9bbd3a5197f4d479f29d036f159f0af971 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af972;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af973 .

_:a9bbd3a5197f4d479f29d036f159f0af972 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000054>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/BusinessProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af973 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af974;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af975 .

_:a9bbd3a5197f4d479f29d036f159f0af974 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/functionOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Organization> .

_:a9bbd3a5197f4d479f29d036f159f0af975 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af976;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af976 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af977 .

_:a9bbd3a5197f4d479f29d036f159f0af977 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af978 .

_:a9bbd3a5197f4d479f29d036f159f0af978 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ObjectiveSpecification>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af979 .

_:a9bbd3a5197f4d479f29d036f159f0af979 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af980;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af980 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000084>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/Organization> .

_:a9bbd3a5197f4d479f29d036f159f0af981 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/CommercialServiceAgreement>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af982 .

_:a9bbd3a5197f4d479f29d036f159f0af982 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Agreement>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af983 .

_:a9bbd3a5197f4d479f29d036f159f0af983 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af984;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af985 .

_:a9bbd3a5197f4d479f29d036f159f0af984 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isAbout>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/CommercialService> .

_:a9bbd3a5197f4d479f29d036f159f0af985 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af986;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af987 .

_:a9bbd3a5197f4d479f29d036f159f0af986 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/CustomerRole> .

_:a9bbd3a5197f4d479f29d036f159f0af987 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af988;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af988 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ServiceProviderRole> .

_:a9bbd3a5197f4d479f29d036f159f0af989 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af990 .

_:a9bbd3a5197f4d479f29d036f159f0af990 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af991 .

_:a9bbd3a5197f4d479f29d036f159f0af991 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af992;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af993 .

_:a9bbd3a5197f4d479f29d036f159f0af992 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000110>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ActionSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af993 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af994;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af995 .

_:a9bbd3a5197f4d479f29d036f159f0af994 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <http://purl.obolibrary.org/obo/BFO_0000110>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ObjectiveSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af995 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af996;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af996 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af997 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/ObjectiveSpecification>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af998 .

_:a9bbd3a5197f4d479f29d036f159f0af998 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af999 .

_:a9bbd3a5197f4d479f29d036f159f0af999 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1000;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1001 .

_:a9bbd3a5197f4d479f29d036f159f0af1000 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isAchievedByAtSomeTime>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000015> .

_:a9bbd3a5197f4d479f29d036f159f0af1001 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1002;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1002 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> _:a9bbd3a5197f4d479f29d036f159f0af1003 .

_:a9bbd3a5197f4d479f29d036f159f0af1003 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#unionOf> _:a9bbd3a5197f4d479f29d036f159f0af1004 .

_:a9bbd3a5197f4d479f29d036f159f0af1004 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Capability>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1005 .

_:a9bbd3a5197f4d479f29d036f159f0af1005 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/ProcessCharacteristic>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1006 .

_:a9bbd3a5197f4d479f29d036f159f0af1006 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1007;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1007 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af1008 .

_:a9bbd3a5197f4d479f29d036f159f0af1008 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000002>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1009 .

_:a9bbd3a5197f4d479f29d036f159f0af1009 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1010;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1010 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isOutputOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000015> .

_:a9bbd3a5197f4d479f29d036f159f0af1011 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/DesignSpecification>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af1012 .

_:a9bbd3a5197f4d479f29d036f159f0af1012 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1013 .

_:a9bbd3a5197f4d479f29d036f159f0af1013 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1014;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1015 .

_:a9bbd3a5197f4d479f29d036f159f0af1014 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000002> .

_:a9bbd3a5197f4d479f29d036f159f0af1015 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1016;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1017 .

_:a9bbd3a5197f4d479f29d036f159f0af1016 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/satisfiesRequirement>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/RequirementSpecification> .

_:a9bbd3a5197f4d479f29d036f159f0af1017 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1018;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1018 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#allValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000002> .

_:a9bbd3a5197f4d479f29d036f159f0af1019 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/ActionSpecification>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af1020 .

_:a9bbd3a5197f4d479f29d036f159f0af1020 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1021 .

_:a9bbd3a5197f4d479f29d036f159f0af1021 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1022;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1022 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000015> .

_:a9bbd3a5197f4d479f29d036f159f0af1023 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Algorithm>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af1024 .

_:a9bbd3a5197f4d479f29d036f159f0af1024 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1025 .

_:a9bbd3a5197f4d479f29d036f159f0af1025 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1026;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1026 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/EncodedAlgorithm> .

_:a9bbd3a5197f4d479f29d036f159f0af1027 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/RequirementSpecification>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af1028 .

_:a9bbd3a5197f4d479f29d036f159f0af1028 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/InformationContentEntity>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1029 .

_:a9bbd3a5197f4d479f29d036f159f0af1029 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1030;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1030 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/requirementSatisfiedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <http://purl.obolibrary.org/obo/BFO_0000001> .

_:a9bbd3a5197f4d479f29d036f159f0af1031 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Assembly>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af1032 .

_:a9bbd3a5197f4d479f29d036f159f0af1032 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/MaterialArtifact>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1033 .

_:a9bbd3a5197f4d479f29d036f159f0af1033 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1034;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1034 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/isSpecifiedOutputOf>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/AssemblyProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af1035 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/CommercialServiceSpecification>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af1036 .

_:a9bbd3a5197f4d479f29d036f159f0af1036 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1037 .

_:a9bbd3a5197f4d479f29d036f159f0af1037 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1038;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1038 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/CommercialService> .

_:a9bbd3a5197f4d479f29d036f159f0af1039 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/EncodedAlgorithm>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af1040 .

_:a9bbd3a5197f4d479f29d036f159f0af1040 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1041 .

_:a9bbd3a5197f4d479f29d036f159f0af1041 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1042;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1042 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/core/Core/ComputingProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af1043 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceStrategy>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af1044 .

_:a9bbd3a5197f4d479f29d036f159f0af1044 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/PlanSpecification>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1045 .

_:a9bbd3a5197f4d479f29d036f159f0af1045 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1046;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1046 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribes>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceProcess> .

_:a9bbd3a5197f4d479f29d036f159f0af1047 a <http://www.w3.org/2002/07/owl#Class>;
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceProcess>;
  <http://www.w3.org/2002/07/owl#intersectionOf> _:a9bbd3a5197f4d479f29d036f159f0af1048 .

_:a9bbd3a5197f4d479f29d036f159f0af1048 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/PlannedProcess>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1049 .

_:a9bbd3a5197f4d479f29d036f159f0af1049 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    _:a9bbd3a5197f4d479f29d036f159f0af1050;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1050 a <http://www.w3.org/2002/07/owl#Restriction>;
  <http://www.w3.org/2002/07/owl#onProperty> <https://spec.industrialontologies.org/ontology/core/Core/prescribedBy>;
  <http://www.w3.org/2002/07/owl#someValuesFrom> <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/MaintenanceStrategy> .

_:a9bbd3a5197f4d479f29d036f159f0af1051 a <http://www.w3.org/2002/07/owl#AllDisjointClasses>;
  <http://www.w3.org/2002/07/owl#members> _:a9bbd3a5197f4d479f29d036f159f0af1052 .

_:a9bbd3a5197f4d479f29d036f159f0af1052 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000004>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1053 .

_:a9bbd3a5197f4d479f29d036f159f0af1053 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000020>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1054 .

_:a9bbd3a5197f4d479f29d036f159f0af1054 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000031>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1055 a <http://www.w3.org/2002/07/owl#AllDisjointClasses>;
  <http://www.w3.org/2002/07/owl#members> _:a9bbd3a5197f4d479f29d036f159f0af1056 .

_:a9bbd3a5197f4d479f29d036f159f0af1056 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000006>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1057 .

_:a9bbd3a5197f4d479f29d036f159f0af1057 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000029>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1058 .

_:a9bbd3a5197f4d479f29d036f159f0af1058 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000140>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1059 a <http://www.w3.org/2002/07/owl#AllDisjointClasses>;
  <http://www.w3.org/2002/07/owl#members> _:a9bbd3a5197f4d479f29d036f159f0af1060 .

_:a9bbd3a5197f4d479f29d036f159f0af1060 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000008>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1061 .

_:a9bbd3a5197f4d479f29d036f159f0af1061 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000011>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1062 .

_:a9bbd3a5197f4d479f29d036f159f0af1062 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000015>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1063 .

_:a9bbd3a5197f4d479f29d036f159f0af1063 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000035>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1064 a <http://www.w3.org/2002/07/owl#AllDisjointClasses>;
  <http://www.w3.org/2002/07/owl#members> _:a9bbd3a5197f4d479f29d036f159f0af1065 .

_:a9bbd3a5197f4d479f29d036f159f0af1065 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000009>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1066 .

_:a9bbd3a5197f4d479f29d036f159f0af1066 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000018>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1067 .

_:a9bbd3a5197f4d479f29d036f159f0af1067 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000026>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1068 .

_:a9bbd3a5197f4d479f29d036f159f0af1068 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000028>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1069 a <http://www.w3.org/2002/07/owl#AllDisjointClasses>;
  <http://www.w3.org/2002/07/owl#members> _:a9bbd3a5197f4d479f29d036f159f0af1070 .

_:a9bbd3a5197f4d479f29d036f159f0af1070 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000142>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1071 .

_:a9bbd3a5197f4d479f29d036f159f0af1071 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000146>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1072 .

_:a9bbd3a5197f4d479f29d036f159f0af1072 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <http://purl.obolibrary.org/obo/BFO_0000147>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1073 a <http://www.w3.org/2002/07/owl#AllDisjointClasses>;
  <http://www.w3.org/2002/07/owl#members> _:a9bbd3a5197f4d479f29d036f159f0af1074 .

_:a9bbd3a5197f4d479f29d036f159f0af1074 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/EngineeredSystem>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1075 .

_:a9bbd3a5197f4d479f29d036f159f0af1075 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/MaterialArtifact>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1076 .

_:a9bbd3a5197f4d479f29d036f159f0af1076 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/core/Core/Organization>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

_:a9bbd3a5197f4d479f29d036f159f0af1077 a <http://www.w3.org/2002/07/owl#AllDisjointClasses>;
  <http://www.w3.org/2002/07/owl#members> _:a9bbd3a5197f4d479f29d036f159f0af1078 .

_:a9bbd3a5197f4d479f29d036f159f0af1078 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/DegradedState>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1079 .

_:a9bbd3a5197f4d479f29d036f159f0af1079 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/FailedState>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:a9bbd3a5197f4d479f29d036f159f0af1080 .

_:a9bbd3a5197f4d479f29d036f159f0af1080 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
    <https://spec.industrialontologies.org/ontology/maintenance/Maintenance/OperatingState>;
  <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .

<https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology#CircuitCardAssembly1>
  a <http://www.w3.org/2002/07/owl#NamedIndividual>, <https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology/CircuitCardAssembly>;
  <http://purl.org/dc/terms/title> "Circuit Card Assembly 1" .

<https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology#CircuitCardAssemblyIdentifier>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://purl.org/dc/terms/title> "Circuit Card Assembly Identifier";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/Identifier> .

<https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology#IntegratedProductTeam>
  a <http://www.w3.org/2002/07/owl#Class>;
  <http://purl.org/dc/terms/title> "Integrated Product Team";
  <http://www.w3.org/2000/01/rdf-schema#subClassOf> <https://spec.industrialontologies.org/ontology/core/Core/BusinessOrganization> .

<https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology#IntegratedProductTeam1>
  a <http://www.w3.org/2002/07/owl#NamedIndividual>, <https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology#IntegratedProductTeam>;
  <http://purl.org/dc/terms/title> "Integrated Product Team 1" .

<https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology#DCLP22>
  a <http://www.w3.org/2002/07/owl#NamedIndividual>, <https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology#CircuitCardAssemblyIdentifier>;
  <http://purl.org/dc/terms/title> "DCLP22" .

<https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology#FLSYSNAV>
  a <http://www.w3.org/2002/07/owl#NamedIndividual>, <https://spec.industrialontologies.org/ontology/core/Core/OrganizationIdentifier>;
  <http://purl.org/dc/terms/title> "FLSYSNAV" .


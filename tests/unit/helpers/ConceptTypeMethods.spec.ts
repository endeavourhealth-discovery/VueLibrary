import { describe, expect, it } from "vitest";

import { IM } from "../../../src/enums";
import { entityIsProperty, entityIsValueSet, isOfTypes } from "../../../src/helpers/ConceptTypeMethods";

describe("ConceptTypeMethods", () => {
  const testConceptType = [{ iri: "http://endhealth.info/im#Concept", name: "Concept" }];
  const testSetType = [{ iri: "http://endhealth.info/im#ValueSet", name: "Value set" }];
  const testDataModelType = [
    { iri: "http://www.w3.org/2000/01/rdf-schema#Class", name: "Class" },
    { iri: "http://www.w3.org/ns/shacl#NodeShape", name: "Node shape" }
  ];
  const testPropertyType = [
    {
      iri: "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
      name: "Property"
    }
  ];

  describe("isOfTypes", () => {
    it("returns false if no conceptTypeElements", () => {
      expect(isOfTypes([], IM.CONCEPT)).toBe(false);
    });

    it("returns true when type found", () => {
      expect(isOfTypes(testConceptType, IM.CONCEPT)).toBe(true);
    });
  });

  describe("isValueSet", () => {
    it("returns true if valueset", () => {
      expect(entityIsValueSet(testSetType)).toBe(true);
    });

    it("returns false if not valueset", () => {
      expect(entityIsValueSet(testDataModelType)).toBe(false);
    });
  });

  describe("isProperty", () => {
    it("returns true if property", () => {
      expect(entityIsProperty(testPropertyType)).toBe(true);
    });

    it("returns false if not property", () => {
      expect(entityIsValueSet(testDataModelType)).toBe(false);
    });
  });
});

// Categories
// Set, Query Set, Value Set
// Class, Record Type
// Everything else
import { IM, OWL, RDF, SHACL } from "../enums";
import { TTIriRef } from "../models";

export function isOfTypes(conceptTypeElements: TTIriRef[], ...types: string[]): boolean {
  if (!conceptTypeElements?.length) {
    return false;
  }
  let found = false;
  let index = 0;
  while (!found && index < types.length) {
    if (conceptTypeElements.some((e: any) => e.iri === types[index] || e[IM.IRI] === types[index])) {
      found = true;
    }
    index++;
  }
  return found;
}

export function entityIsValueSet(conceptTypes: TTIriRef[]): boolean {
  return isOfTypes(conceptTypes, IM.SET, IM.QUERY_SET, IM.VALUE_SET, IM.CONCEPT_SET, IM.CONCEPT_SET_GROUP);
}

export function entityIsTask(conceptTypes: TTIriRef[]): boolean {
  return isOfTypes(conceptTypes, IM.TASK) || isOfTypes(conceptTypes, IM.MAPPING_TASK) || isOfTypes(conceptTypes, IM.UPDATE_TASK);
}

export function entityIsProperty(conceptTypes: TTIriRef[]): boolean {
  return isOfTypes(conceptTypes, RDF.PROPERTY, SHACL.PROPERTY, IM.DATA_PROPERTY, IM.TARGET_PROPERTY, IM.FUNCTION_PROPERTY, OWL.ANNOTATION_PROPERTY);
}

export function entityIsFunctionalProperty(conceptTypes: TTIriRef[]): boolean {
  return entityIsProperty(conceptTypes) && isOfTypes(conceptTypes, SHACL.FUNCTION);
}

export function entityIsConcept(conceptTypes: TTIriRef[]): boolean {
  return isOfTypes(conceptTypes, IM.CONCEPT);
}

export function entityIsQuery(entityTypes: TTIriRef[]): boolean {
  return isOfTypes(entityTypes, IM.QUERY);
}

export function entityIsIndicator(entityTypes: TTIriRef[]): boolean {
  return isOfTypes(entityTypes, IM.INDICATOR);
}

export function entityIsRecordModel(entityTypes: TTIriRef[]): boolean {
  return isOfTypes(entityTypes, SHACL.NODESHAPE);
}

export function entityIsFolder(entityTypes: TTIriRef[]): boolean {
  return isOfTypes(entityTypes, IM.FOLDER);
}

export function entityIsFeature(entityTypes: TTIriRef[]): boolean {
  return isOfTypes(entityTypes, IM.FEATURE);
}

export function entityIsFunction(entityTypes: TTIriRef[]): boolean {
  return isOfTypes(entityTypes, SHACL.FUNCTION);
}

export function getNamesAsStringFromTypes(typeList: TTIriRef[]) {
  return typeList
    .map(type => {
      if (type.iri === SHACL.NODESHAPE) {
        return "Data model";
      } else return type.name;
    })
    .join(", ");
}

export default {
  isOfTypes,
  entityIsProperty,
  entityIsValueSet,
  entityIsConcept,
  entityIsFolder,
  entityIsQuery,
  entityIsRecordModel,
  entityIsFeature,
  entityIsFunction,
  getNamesAsStringFromTypes
};

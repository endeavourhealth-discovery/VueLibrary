// Categories
// Set, Query Set, Value Set
// Class, Record Type
// Everything else
import palette from "google-palette";

import { IM } from "../enums";
import {
  entityIsFeature,
  entityIsFolder,
  entityIsFunction,
  entityIsIndicator,
  entityIsProperty,
  entityIsQuery,
  entityIsRecordModel,
  entityIsTask,
  entityIsValueSet
} from "../helpers/ConceptTypeMethods";
import { Node, TTIriRef } from "../models";

export function getFAIconFromType(conceptTypes: TTIriRef[]): string[] {
  if (entityIsRecordModel(conceptTypes)) return ["fa-duotone", "fa-diagram-project"];
  else if (entityIsTask(conceptTypes)) return ["fa-duotone", "fa-clipboard-check"];
  else if (entityIsProperty(conceptTypes)) return ["fa-duotone", "fa-pen-to-square"];
  else if (entityIsValueSet(conceptTypes)) return ["fa-duotone", "fa-list-check"];
  else if (entityIsFolder(conceptTypes)) return ["fa-duotone", "fa-folder"];
  else if (entityIsQuery(conceptTypes)) return ["fa-duotone", "fa-magnifying-glass"];
  else if (entityIsFeature(conceptTypes)) return ["fa-duotone", "fa-filter-list"];
  else if (entityIsFunction(conceptTypes)) return ["fa-duotone", "fa-function"];
  else if (entityIsIndicator(conceptTypes)) return ["fa-sharp-duotone", "fa-solid", "fa-traffic-light-go"];
  else return ["fa-duotone", "fa-lightbulb"];
}

export function getColourFromType(conceptTypes: TTIriRef[]): string {
  const bgs = palette("tol-rainbow", 10);
  const bgsFixed = bgs.map((color: string) => "#" + color + "88");
  if (entityIsRecordModel(conceptTypes)) return bgsFixed[0];
  else if (entityIsTask(conceptTypes)) return bgsFixed[6];
  else if (entityIsProperty(conceptTypes)) return bgsFixed[4];
  else if (entityIsValueSet(conceptTypes)) return bgsFixed[2];
  else if (entityIsFolder(conceptTypes)) return bgsFixed[1];
  else if (entityIsQuery(conceptTypes)) return bgsFixed[3];
  else if (entityIsFeature(conceptTypes)) return bgsFixed[7];
  else if (entityIsFunction(conceptTypes)) return bgsFixed[9];
  else if (entityIsIndicator(conceptTypes)) return bgsFixed[5];
  else return bgsFixed[8];
}
export function getTypeIcon(is: Node) {
  if (is.memberOf) {
    return getFAIconFromType([{ iri: IM.CONCEPT_SET }]);
  } else return getFAIconFromType([{ iri: IM.CONCEPT }]);
}

export function getIconColor(is: Node) {
  if (is.memberOf) {
    return getColourFromType([{ iri: IM.CONCEPT_SET }]);
  } else return getColourFromType([{ iri: IM.CONCEPT }]);
}

export default {
  getColourFromType,
  getFAIconFromType,
  getTypeIcon,
  getIconColor
};

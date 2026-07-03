import { GRAPH } from "@/enums";

import { TTEntity } from "./TTEntity";

export interface EntityValidationRequest {
  entity?: TTEntity;
  validationIri?: string;
  graph?: GRAPH;
}

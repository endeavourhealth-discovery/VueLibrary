import { GRAPH } from "@/enums";

import { TTIriRef } from "./TTIriRef";

export interface SetDistillationRequest {
  conceptList?: TTIriRef[];
  graph?: GRAPH;
}

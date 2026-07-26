import { GRAPH } from "@/enums";

import { Query } from "./Query";

export interface MatchDisplayRequest {
  match?: Query;
  graph?: GRAPH;
}

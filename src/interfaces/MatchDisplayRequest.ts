import { GRAPH } from "@/enums";

import { Match } from "./Match";

export interface MatchDisplayRequest {
  match?: Match;
  graph?: GRAPH;
}

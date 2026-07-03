import { GRAPH } from "@/enums";

import { Argument } from "./Argument";
import { Page } from "./Page";

export interface FunctionRequest {
  functionIri?: string;
  arguments?: Argument[];
  page?: Page;
  graph?: GRAPH;
}

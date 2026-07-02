import { Context } from "./Context";

export interface ConceptContextMap {
  id?: string;
  node?: string;
  value?: string;
  regex?: string;
  property?: string;
  context?: Context[];
}

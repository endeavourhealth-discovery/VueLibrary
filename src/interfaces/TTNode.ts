import { TTArray } from "./TTArray";
import { TTValue } from "./TTValue";

export interface TTNode extends TTValue {
  iri?: string;
  predicateMap?: { [index: string]: TTArray };
}

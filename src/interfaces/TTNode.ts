import { TTArray } from "./TTArray";

export interface TTNode {
  iri?: string;
  predicateMap?: { [index: string]: TTArray };
}

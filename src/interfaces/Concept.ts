import { Entity } from "./Entity";
import { TTIriRef } from "./TTIriRef";

export interface Concept extends Entity {
  subClassOf?: TTIriRef[];
  code?: string;
  im1Id?: string;
  matchedFrom?: Concept[];
  usage?: number;
  codeId?: string;
  alternativeCode?: string;
  subsumed?: boolean;
}

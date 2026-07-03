import { Entity } from "./Entity";
import { Query } from "./Query";
import { TTIriRef } from "./TTIriRef";

export interface ConceptSet extends Entity {
  definition?: Query;
  hasMember?: TTIriRef[];
  usedIn?: TTIriRef[];
  avoidReplacedBy?: boolean;
}

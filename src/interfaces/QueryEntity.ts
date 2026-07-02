import { Entity } from "./Entity";
import { Query } from "./Query";

export interface QueryEntity extends Entity {
  definition?: Query;
}

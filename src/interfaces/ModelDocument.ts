import { ConceptSet } from "./ConceptSet";
import { Entity } from "./Entity";
import { MapFunction } from "./MapFunction";
import { QueryEntity } from "./QueryEntity";
import { TTContext } from "./TTContext";

export interface ModelDocument {
  context?: TTContext;
  query?: QueryEntity[];
  folder?: Entity[];
  conceptSet?: ConceptSet[];
  function?: MapFunction[];
}

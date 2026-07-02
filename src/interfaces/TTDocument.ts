import { TTContext } from "./TTContext";
import { TTEntity } from "./TTEntity";
import { TTIriRef } from "./TTIriRef";
import { TTNode } from "./TTNode";
import { TTPrefix } from "./TTPrefix";

export interface TTDocument extends TTNode {
  context?: TTContext;
  entities?: TTEntity[];
  crud?: TTIriRef;
  predicates?: { [index: string]: string };
  prefixes?: TTPrefix[];
}

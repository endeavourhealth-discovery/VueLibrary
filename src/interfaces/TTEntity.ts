import { TTArray } from "./TTArray";
import { TTContext } from "./TTContext";
import { TTIriRef } from "./TTIriRef";
import { TTNode } from "./TTNode";
import { TTPrefix } from "./TTPrefix";

export interface TTEntity extends TTNode {
  context?: TTContext;
  crud?: TTIriRef;
  type?: TTArray;
  status?: TTIriRef;
  name?: string;
  scheme?: TTIriRef;
  version?: number;
  description?: string;
  code?: string;
  types?: TTIriRef[];
  prefixes?: TTPrefix[];
}

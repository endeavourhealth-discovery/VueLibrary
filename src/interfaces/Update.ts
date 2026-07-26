import { Delete } from "./Delete";
import { Query } from "./Query";
import { TTIriRef } from "./TTIriRef";

export interface Update extends TTIriRef {
  match?: Query[];
  delete?: Delete[];
}

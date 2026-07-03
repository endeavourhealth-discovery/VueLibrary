import { Delete } from "./Delete";
import { Match } from "./Match";
import { TTIriRef } from "./TTIriRef";

export interface Update extends TTIriRef {
  match?: Match[];
  delete?: Delete[];
}

import { TTIriRef } from "./TTIriRef";

export interface PathQuery extends TTIriRef {
  source?: TTIriRef;
  target?: TTIriRef;
  depth?: number;
}

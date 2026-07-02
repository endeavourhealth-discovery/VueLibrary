import { PropertyShape } from "./PropertyShape";
import { TTIriRef } from "./TTIriRef";

export interface NodeShape extends TTIriRef {
  property?: PropertyShape[];
  subType?: TTIriRef[];
  definingProperty?: TTIriRef;
  inverseProperty?: TTIriRef;
  folder?: NodeShape[];
  type?: NodeShape[];
}

import { TTIriRef } from "./TTIriRef";

export interface Indicator extends TTIriRef {
  isSubIndicatorOf?: TTIriRef[];
  numerator?: TTIriRef;
  dataset?: TTIriRef;
  actionIfFalse?: TTIriRef[];
  actionIfTrue?: TTIriRef[];
  denominator?: TTIriRef;
}

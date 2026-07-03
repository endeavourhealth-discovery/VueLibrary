import { Node } from "./Node";
import { Where } from "./Where";

export interface Delete {
  property?: Where;
  subject?: Node;
  inverse?: boolean;
  predicate?: Node;
  object?: Node;
  delete?: Delete[];
}

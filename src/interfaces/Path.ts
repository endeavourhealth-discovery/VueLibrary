import { Element } from "./Element";
import { Node } from "./Node";
import { TTIriRef } from "./TTIriRef";

export interface Path extends Element {
  inverse?: boolean;
  optional?: boolean;
  path?: Path[];
  pathVariable?: string;
  typeOf?: Node;
  qualifier?: TTIriRef;
  node?: string;
}

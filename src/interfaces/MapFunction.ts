import { Argument } from "./Argument";
import { TTIriRef } from "./TTIriRef";

export interface MapFunction extends TTIriRef {
  argument?: Argument[];
  conceptMap?: { [index: string]: string };
  defaultValue?: TTIriRef;
}

import { IriLD } from "./IriLD";
import { TTIriRef } from "./TTIriRef";

export interface Instance extends IriLD {
  entailment?: TTIriRef;
}

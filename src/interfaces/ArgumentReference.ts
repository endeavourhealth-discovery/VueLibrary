import { TTIriRef } from "./TTIriRef";

export interface ArgumentReference {
  parameter?: string;
  referenceIri?: TTIriRef;
  dataType?: TTIriRef;
}

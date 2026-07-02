import { TTEntity } from "./TTEntity";
import { TTIriRef } from "./TTIriRef";

export interface Entity {
  iri?: string;
  type?: TTIriRef[];
  status?: TTIriRef;
  scheme?: TTIriRef;
  isContainedIn?: TTEntity[];
  name?: string;
  description?: string;
}

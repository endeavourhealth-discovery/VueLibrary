import { PropertyShape } from "./PropertyShape";
import { TTEntity } from "./TTEntity";
import { TTIriRef } from "./TTIriRef";

export interface FormGenerator {
  iri?: string;
  status?: TTIriRef;
  label?: string;
  comment?: string;
  targetShape?: TTIriRef;
  type?: TTIriRef[];
  isContainedIn?: TTEntity[];
  subClassOf?: TTIriRef[];
  scheme?: TTIriRef;
  property?: PropertyShape[];
}

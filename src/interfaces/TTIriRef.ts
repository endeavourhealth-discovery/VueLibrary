import { TTValue } from "./TTValue";

export interface TTIriRef extends TTValue {
  name?: string;
  description?: string;
  iri: string;
}

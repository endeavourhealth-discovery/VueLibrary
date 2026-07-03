import { SearchTermCode } from "./SearchTermCode";
import { TTIriRef } from "./TTIriRef";

export interface EntityDocument {
  id?: number;
  iri?: string;
  name?: string;
  length?: number;
  preferredName?: string;
  code?: string;
  alternativeCode?: string;
  scheme?: TTIriRef;
  type?: TTIriRef[];
  status?: TTIriRef;
  termCode?: SearchTermCode[];
  usageTotal?: number;
  match?: string;
  isA?: TTIriRef[];
  memberOf?: TTIriRef[];
  subsumptionCount?: number;
  binding?: string[];
  isDescendentOf?: TTIriRef[];
}

import { SearchTermCode } from "./SearchTermCode";
import { TTIriRef } from "./TTIriRef";

export interface SearchResultSummary {
  name?: string;
  code?: string;
  description?: string;
  status: TTIriRef;
  scheme: TTIriRef;
  type: TTIriRef[];
  usageTotal?: number;
  bestMatch?: string;
  preferredName?: string;
  key?: string[];
  isA?: TTIriRef[];
  termCode?: SearchTermCode[];
  unit?: TTIriRef[];
  qualifier?: TTIriRef[];
  iri: string;
}

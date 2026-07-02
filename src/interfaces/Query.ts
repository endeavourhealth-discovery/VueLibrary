import { IMQType } from "@/enums";

import { Match } from "./Match";
import { Prefix } from "./Prefix";
import { TTIriRef } from "./TTIriRef";

export interface Query extends Match {
  prefixes?: Prefix[];
  description?: string;
  columnGroup?: Match[];
  imQuery?: string;
  parentResult?: any;
  persistentIri?: TTIriRef;
  bindAs?: string;
  queryType?: IMQType;
  iri?: string;
  name?: string;
}

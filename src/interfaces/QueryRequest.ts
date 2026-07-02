import { TextSearchStyle } from "@/enums";
import { DatabaseOption } from "@/enums";

import { Argument } from "./Argument";
import { ContextMap } from "./ContextMap";
import { Page } from "./Page";
import { PathQuery } from "./PathQuery";
import { Query } from "./Query";
import { TTIriRef } from "./TTIriRef";
import { Update } from "./Update";

export interface QueryRequest extends ContextMap {
  textSearch?: string;
  argument?: Argument[];
  query: Query;
  pathQuery?: PathQuery;
  update?: Update;
  name?: string;
  page?: Page;
  queryStringDefinition?: string;
  askIri?: string;
  timings?: { [index: string]: string }[];
  cohort?: TTIriRef[];
  includeNames?: boolean;
  textSearchStyle?: TextSearchStyle;
  language?: DatabaseOption;
}

import { TextSearchStyle } from "@/enums";
import { DatabaseOption } from "@/enums";

import { Argument } from "./Argument";
import { Page } from "./Page";
import { PathQuery } from "./PathQuery";
import { Query } from "./Query";
import { TTIriRef } from "./TTIriRef";
import { Update } from "./Update";

export interface QueryRequest {
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
  context?: { [index: string]: string };
}

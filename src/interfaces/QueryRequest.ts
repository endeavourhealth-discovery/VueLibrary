import z from "zod";

import { TextSearchStyle } from "@/enums";
import { DatabaseOption } from "@/enums";

import { Argument, ArgumentSchema } from "./Argument";
import { Page, PageSchema } from "./Page";
import { PathQuery, PathQuerySchema } from "./PathQuery";
import { Query, QuerySchema } from "./Query";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";
import { Update, UpdateSchema } from "./Update";

// export interface QueryRequest {
//   textSearch?: string;
//   argument?: Argument[];
//   query: Query;
//   pathQuery?: PathQuery;
//   update?: Update;
//   name?: string;
//   page?: Page;
//   queryStringDefinition?: string;
//   askIri?: string;
//   timings?: { [index: string]: string }[];
//   cohort?: TTIriRef[];
//   includeNames?: boolean;
//   textSearchStyle?: TextSearchStyle;
//   language?: DatabaseOption;
//   context?: { [index: string]: string };
// }

export const QueryRequestSchema = z.strictObject({
  textSearch: z.string().optional(),
  argument: z.array(ArgumentSchema).prefault([]),
  query: QuerySchema.optional(),
  pathQuery: PathQuerySchema.optional(),
  update: UpdateSchema.optional(),
  name: z.string().optional(),
  page: PageSchema.optional(),
  queryStringDefinition: z.string().optional(),
  askIri: z.url().optional(),
  timings: z.array(z.map(z.string(), z.string())).prefault([]),
  cohort: z.array(TTIriRefSchema).prefault([]),
  includeNames: z.boolean().default(false),
  textSearchStyle: z.enum(TextSearchStyle).optional(),
  language: z.enum(DatabaseOption).optional(),
  context: z.map(z.string(), z.string()).default(new Map())
});

export type QueryRequest = z.output<typeof QueryRequestSchema>;

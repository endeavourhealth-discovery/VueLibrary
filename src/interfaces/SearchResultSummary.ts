import z from "zod";

import { SearchTermCodeSchema } from "./SearchTermCode";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface SearchResultSummary {
//   name?: string;
//   code?: string;
//   description?: string;
//   status: TTIriRef;
//   scheme: TTIriRef;
//   type: TTIriRef[];
//   usageTotal?: number;
//   bestMatch?: string;
//   preferredName?: string;
//   key?: string[];
//   isA?: TTIriRef[];
//   termCode?: SearchTermCode[];
//   unit?: TTIriRef[];
//   qualifier?: TTIriRef[];
//   iri: string;
// }

export const SearchResultSummarySchema = z.strictObject({
  name: z.string().optional(),
  code: z.string().optional(),
  description: z.string().optional(),
  status: TTIriRefSchema,
  scheme: TTIriRefSchema,
  type: z.array(TTIriRefSchema).prefault([]),
  usageTotal: z.number().optional(),
  bestMatch: z.string().optional(),
  preferredName: z.string().optional(),
  key: z.array(z.string()).prefault([]),
  isA: z.array(TTIriRefSchema).prefault([]),
  termCode: z.array(SearchTermCodeSchema).prefault([]),
  unit: z.array(TTIriRefSchema).prefault([]),
  qualifier: z.array(TTIriRefSchema).prefault([]),
  iri: z.url()
});

export type SearchResultSummary = z.output<typeof SearchResultSummarySchema>;

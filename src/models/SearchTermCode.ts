import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface SearchTermCode {
//   term?: string;
//   code?: string;
//   status?: TTIriRef;
//   length?: number;
//   keyTerm?: string;
// }

export const SearchTermCodeSchema = z.strictObject({
  term: z.string().optional(),
  code: z.string().optional(),
  status: TTIriRefSchema.optional(),
  length: z.number().optional(),
  keyTerm: z.string().optional()
});

export type SearchTermCode = z.output<typeof SearchTermCodeSchema>;

export function isSearchTermCode(value: unknown): value is SearchTermCode {
  return SearchTermCodeSchema.safeParse(value).success;
}

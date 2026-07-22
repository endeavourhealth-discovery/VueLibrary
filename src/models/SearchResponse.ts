import z from "zod";

import { SearchResultSummarySchema } from "./SearchResultSummary";

// export interface SearchResponse {
//   page?: number;
//   count?: number;
//   totalCount?: number;
//   highestUsage?: number;
//   term?: string;
//   entities?: SearchResultSummary[];
//   exactMatch?: boolean;
// }

export const SearchResponseSchema = z.strictObject({
  page: z.number().optional(),
  count: z.number().optional(),
  totalCount: z.number().optional(),
  highestUsage: z.number().optional(),
  term: z.string().optional(),
  entities: z.array(SearchResultSummarySchema).optional(),
  exactMatch: z.boolean().optional()
});

export type SearchResponse = z.output<typeof SearchResponseSchema>;

export function isSearchResponse(value: unknown): value is SearchResponse {
  return SearchResponseSchema.safeParse(value).success;
}

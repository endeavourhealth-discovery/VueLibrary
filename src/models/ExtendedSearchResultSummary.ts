import z from "zod";

import { SearchResultSummarySchema } from "./SearchResultSummary";

// export interface ExtendedSearchResultSummary extends SearchResultSummary {
//   icon: string[];
//   color: string;
//   typeNames: string;
//   favourite: boolean;
// }

export const ExtendedSearchResultSummarySchema = z.strictObject({
  ...SearchResultSummarySchema.shape,
  icon: z.array(z.string()),
  color: z.string(),
  typeNames: z.string(),
  favourite: z.boolean().default(false)
});

export type ExtendedSearchResultSummary = z.output<typeof ExtendedSearchResultSummarySchema>;

export function isExtendedSearchResultSummary(value: unknown): value is ExtendedSearchResultSummary {
  return ExtendedSearchResultSummarySchema.safeParse(value).success;
}

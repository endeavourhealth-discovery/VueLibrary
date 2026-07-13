import z from "zod";

import { Filter, FilterSchema } from "./Filter";
import { OrderBy, OrderBySchema } from "./OrderBy";
import { SearchBinding, SearchBindingSchema } from "./SearchBinding";

// export interface SearchRequest {
//   termFilter?: string;
//   index?: string;
//   statusFilter?: string[];
//   typeFilter?: string[];
//   schemeFilter?: string[];
//   bindingFilter?: SearchBinding[];
//   markIfDescendentOf?: string[];
//   isA?: string[];
//   memberOf?: string[];
//   page?: number;
//   size?: number;
//   from?: number;
//   select?: string[];
//   orderBy?: OrderBy[];
//   filter?: Filter[];
//   timings?: { [index: string]: string }[];
// }

export const SearchRequestSchema = z.strictObject({
  termFilter: z.string().optional(),
  index: z.string().optional(),
  statusFilter: z.array(z.string()).prefault([]),
  typeFilter: z.array(z.string()).prefault([]),
  schemeFilter: z.array(z.string()).prefault([]),
  bindingFilter: z.array(SearchBindingSchema).prefault([]),
  markIfDescendantOf: z.array(z.string()).prefault([]),
  isA: z.array(z.string()).prefault([]),
  memberOf: z.array(z.string()).prefault([]),
  page: z.number().default(1),
  size: z.number().default(20),
  from: z.number().optional(),
  select: z.array(z.string()).prefault([]),
  orderBy: z.array(OrderBySchema).prefault([]),
  filter: z.array(FilterSchema).prefault([]),
  timings: z.array(z.map(z.string(), z.string())).prefault([])
});

export type SearchRequest = z.output<typeof SearchRequestSchema>;

export function isSearchRequest(value: unknown): value is SearchRequest {
  return SearchRequestSchema.safeParse(value).success;
}

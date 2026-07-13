import z from "zod";

import { FilterOptions, FilterOptionsSchema } from "./FilterOptions";
import { Page, PageSchema } from "./Page";
import { SearchBinding, SearchBindingSchema } from "./SearchBinding";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface SearchOptions extends FilterOptions {
//   isA?: TTIriRef[];
//   binding?: SearchBinding[];
//   page?: Page;
//   textSearch?: string;
// }

export const SearchOptionsSchema = FilterOptionsSchema.extend({
  isA: z.array(TTIriRefSchema).prefault([]),
  binding: z.array(SearchBindingSchema).prefault([]),
  page: PageSchema.optional(),
  textSearch: z.string().optional()
});

export type SearchOptions = z.output<typeof SearchOptionsSchema>;

export function isSearchOptions(value: unknown): value is SearchOptions {
  return SearchOptionsSchema.safeParse(value).success;
}

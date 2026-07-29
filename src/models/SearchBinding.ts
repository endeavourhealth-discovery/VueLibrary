import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface SearchBinding {
//   path?: TTIriRef;
//   node?: TTIriRef;
// }

export const SearchBindingSchema = z.strictObject({
  path: TTIriRefSchema.optional(),
  node: TTIriRefSchema.optional()
});

export type SearchBinding = z.output<typeof SearchBindingSchema>;

export function isSearchBinding(value: unknown): value is SearchBinding {
  return SearchBindingSchema.safeParse(value).success;
}

import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface FilterOptions {
//   status: TTIriRef[];
//   schemes: TTIriRef[];
//   types: TTIriRef[];
//   typeSchemes?: Record<string, TTIriRef[]>;
// }

export const FilterOptionsSchema = z.strictObject({
  status: z.array(TTIriRefSchema).prefault([]),
  schemes: z.array(TTIriRefSchema).prefault([]),
  types: z.array(TTIriRefSchema).prefault([]),
  typeSchemes: z.record(z.string(), z.array(TTIriRefSchema).prefault([])).optional()
});

export type FilterOptions = z.output<typeof FilterOptionsSchema>;

export function isFilterOptions(value: unknown): value is FilterOptions {
  return FilterOptionsSchema.safeParse(value).success;
}

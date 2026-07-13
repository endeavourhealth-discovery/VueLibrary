import z from "zod";

// export interface FiltersAsIris {
//   types: string[];
//   schemes: string[];
//   status: string[];
// }

export const FiltersAsIrisSchema = z.strictObject({
  types: z.array(z.string()).prefault([]),
  schemes: z.array(z.string()).prefault([]),
  status: z.array(z.string()).prefault([])
});

export type FiltersAsIris = z.output<typeof FiltersAsIrisSchema>;

export function isFiltersAsIris(value: unknown): value is FiltersAsIris {
  return FiltersAsIrisSchema.safeParse(value).success;
}

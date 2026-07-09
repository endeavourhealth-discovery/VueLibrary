import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface Filter {
//   field?: string;
//   iriValue?: TTIriRef[];
//   and?: Filter[];
//   not?: boolean;
//   textValue?: string[];
//   startsWithTerm?: boolean;
// }

export const FilterSchema = z.strictObject({
  field: z.string().optional(),
  iriValue: z.array(TTIriRefSchema).prefault([]),
  get and() {
    return z.array(FilterSchema);
  },
  not: z.boolean().default(false),
  textValue: z.array(z.string()).prefault([]),
  startsWithTerm: z.boolean().default(false)
});

export type Filter = z.output<typeof FilterSchema>;

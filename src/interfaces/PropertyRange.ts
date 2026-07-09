import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface PropertyRange extends TTIriRef {
//   pattern?: string;
//   intervalUnit?: TTIriRef;
//   qualifier?: PropertyRange[];
//   type?: TTIriRef;
//   units?: TTIriRef;
//   operator?: TTIriRef;
//   relativeValue?: boolean;
// }

export const PropertyRangeSchema = TTIriRefSchema.extend({
  pattern: z.string().optional(),
  intervalUnit: TTIriRefSchema.optional(),

  get qualifier(): z.ZodPrefault<z.ZodArray<typeof PropertyRangeSchema>> {
    return z.array(PropertyRangeSchema).prefault([]);
  },

  type: TTIriRefSchema.optional(),
  units: TTIriRefSchema.optional(),
  operator: TTIriRefSchema.optional(),
  relativeValue: z.boolean().default(false)
});

export type PropertyRange = z.output<typeof PropertyRangeSchema>;

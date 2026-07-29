import z from "zod";

import { Value, ValueSchema } from "./Value";

// export interface Range {
//   from: Value;
//   to: Value;
// }

export const RangeSchema = z.strictObject({
  from: ValueSchema,
  to: ValueSchema
});

export type Range = z.output<typeof RangeSchema>;

export function isRange(value: unknown): value is Range {
  return RangeSchema.safeParse(value).success;
}

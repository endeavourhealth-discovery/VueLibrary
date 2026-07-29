import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";
import { ValueSource, ValueSourceSchema } from "./ValueSource";

// export interface Compare {
//   left?: ValueSource;
//   right?: ValueSource;
//   units?: TTIriRef;
// }

export const CompareSchema = z.strictObject({
  left: ValueSourceSchema.optional(),
  right: ValueSourceSchema.optional(),
  units: TTIriRefSchema.optional()
});

export type Compare = z.output<typeof CompareSchema>;

export function isCompare(value: unknown): value is Compare {
  return CompareSchema.safeParse(value).success;
}

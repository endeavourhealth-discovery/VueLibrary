import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface Indicator extends TTIriRef {
//   isSubIndicatorOf?: TTIriRef[];
//   numerator?: TTIriRef;
//   dataset?: TTIriRef;
//   actionIfFalse?: TTIriRef[];
//   actionIfTrue?: TTIriRef[];
//   denominator?: TTIriRef;
// }

export const IndicatorSchema = z.strictObject({
  ...TTIriRefSchema.shape,
  isSubIndicatorOf: z.array(TTIriRefSchema).prefault([]),
  numerator: TTIriRefSchema.optional(),
  dataset: TTIriRefSchema.optional(),
  actionIfFalse: z.array(TTIriRefSchema).prefault([]),
  actionIfTrue: z.array(TTIriRefSchema).prefault([]),
  denominator: TTIriRefSchema.optional()
});

export type Indicator = z.output<typeof IndicatorSchema>;

export function isIndicator(value: unknown): value is Indicator {
  return IndicatorSchema.safeParse(value).success;
}

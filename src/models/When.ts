import z from "zod";

import { Expression, ExpressionSchema } from "./Expression";
import { WhereSchema } from "./Where";

// export interface When extends Where {
//   then?: Expression;
// }

export const WhenSchema = z.strictObject({
  ...WhereSchema.shape,
  then: ExpressionSchema.optional()
});

export type When = z.output<typeof WhenSchema>;

export function isWhen(value: unknown): value is When {
  return WhenSchema.safeParse(value).success;
}

import z from "zod";

import { ArgumentSchema } from "./Argument";
import { IriLD, IriLDSchema } from "./IriLD";

// export interface FunctionClause extends IriLD {
//   argument?: Argument[];
// }

export const FunctionClauseSchema = z.strictObject({
  ...IriLDSchema.shape,
  get argument(): z.ZodOptional<z.ZodArray<typeof ArgumentSchema>> {
    return z.array(ArgumentSchema).optional();
  }
});

export type FunctionClause = z.output<typeof FunctionClauseSchema>;

export function isFunctionClause(value: unknown): value is FunctionClause {
  return FunctionClauseSchema.safeParse(value).success;
}

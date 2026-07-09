import z from "zod";

import { ArgumentSchema } from "./Argument";
import { IriLD, IriLDSchema } from "./IriLD";

// export interface FunctionClause extends IriLD {
//   argument?: Argument[];
// }

export const FunctionClauseSchema = z.strictObject({
  ...IriLDSchema.shape,
  argument: z.array(ArgumentSchema).optional()
});

export type FunctionClause = z.output<typeof FunctionClauseSchema>;

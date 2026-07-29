import z from "zod";

import { ExpressionSchema } from "./Expression";
import { WhenSchema } from "./When";

// export interface Case {
//   nodeRef?: string;
//   when?: When[];
//   else?: Expression;
// }

export const CaseSchema = z.strictObject({
  nodeRef: z.string().optional(),
  when: z.array(WhenSchema).optional(),
  else: ExpressionSchema.optional()
});

export type Case = z.output<typeof CaseSchema>;

export function isCase(value: unknown): value is Case {
  return CaseSchema.safeParse(value).success;
}

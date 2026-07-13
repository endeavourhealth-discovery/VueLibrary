import z from "zod";

import { Operator } from "@/enums";

import { Compare, CompareSchema } from "./Compare";
import { FunctionClause, FunctionClauseSchema } from "./FunctionClause";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface Value {
//   operator?: Operator;
//   value?: string;
//   valueLabel?: string;
//   valueParameter?: string;
//   function?: FunctionClause;
//   description?: string;
//   units?: TTIriRef;
//   invalid?: boolean;
//   valueTerm?: string;
//   compare?: Compare;
// }

export const ValueSchema = z.strictObject({
  operator: z.enum(Operator).optional(),
  value: z.string().optional(),
  valueLabel: z.string().optional(),
  valueParameter: z.string().optional(),
  function: FunctionClauseSchema.optional(),
  description: z.string().optional(),
  units: TTIriRefSchema.optional(),
  invalid: z.boolean().default(false),
  valueTerm: z.string().optional(),
  compare: CompareSchema.optional()
});

export type Value = z.output<typeof ValueSchema>;

export function isValue(value: unknown): value is Value {
  return ValueSchema.safeParse(value).success;
}

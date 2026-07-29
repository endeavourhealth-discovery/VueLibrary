import z from "zod";

import { CaseSchema } from "./Case";
import { FunctionClause, FunctionClauseSchema } from "./FunctionClause";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface Return {
//   iri?: string;
//   name?: string;
//   function?: FunctionClause;
//   as?: string;
//   nodeRef?: string;
//   propertyRef?: string;
//   pathRef?: string;
//   inverse?: boolean;
//   units?: TTIriRef;
//   dataType?: TTIriRef;
//   semanticMap?: TTIriRef;
//   description?: string;
//   value?: string;
//   case?: Case;
//   return?: Return[];
// }

export const ReturnSchema = z.strictObject({
  iri: z.url().optional(),
  name: z.string().optional(),
  function: FunctionClauseSchema.optional(),
  as: z.string().optional(),
  nodeRef: z.string().optional(),
  propertyRef: z.string().optional(),
  pathRef: z.string().optional(),
  inverse: z.boolean().optional(),
  units: TTIriRefSchema.optional(),
  dataType: TTIriRefSchema.optional(),
  semanticMap: TTIriRefSchema.optional(),
  description: z.string().optional(),
  value: z.string().optional(),
  case: CaseSchema.optional(),
  get return(): z.ZodOptional<z.ZodArray<typeof ReturnSchema>> {
    return z.array(ReturnSchema).optional();
  }
});

export type Return = z.output<typeof ReturnSchema>;

export function isReturn(value: unknown): value is Return {
  return ReturnSchema.safeParse(value).success;
}

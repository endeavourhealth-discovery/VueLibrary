import z from "zod";

import { Operator } from "@/enums";

import { CompareSchema } from "./Compare";
import { ElementSchema } from "./Element";
import { FunctionClauseSchema } from "./FunctionClause";
import { IriLDSchema } from "./IriLD";
import { NodeSchema } from "./Node";
import { RangeSchema } from "./Range";
import { TTIriRefSchema } from "./TTIriRef";

export const WhereSchema = ElementSchema.extend({
  operator: z.enum(Operator).optional(),
  value: z.string().optional(),
  valueLabel: z.string().optional(),
  units: TTIriRefSchema.optional(),
  function: FunctionClauseSchema.optional(),
  valueTerm: z.string().optional(),
  compare: CompareSchema.optional(),
  nodeRef: z.string().optional(),
  range: RangeSchema.optional(),
  isNull: z.boolean().optional(),
  is: z.lazy(() => z.array(NodeSchema)).optional(),
  anyRoleGroup: z.boolean().optional(),
  inverse: z.boolean().optional(),
  typeOf: z.lazy(() => NodeSchema).optional(),
  subjectVariable: z.string().optional(),
  subjectParameter: z.string().optional(),
  not: z.boolean().optional(),
  roleGroup: z.boolean().optional(),
  isNotNull: z.boolean().optional(),
  get or(): z.ZodOptional<z.ZodArray<typeof WhereSchema>> {
    return z.array(WhereSchema).optional();
  },
  get and(): z.ZodOptional<z.ZodArray<typeof WhereSchema>> {
    return z.array(WhereSchema).optional();
  },
  propertyRef: z.string().optional(),
  shortLabel: z.string().optional(),
  qualifier: TTIriRefSchema.optional(),
  propertyList: z.lazy(() => z.array(NodeSchema)).optional(),
  propertyVariable: z.string().optional(),
  node: z.string().optional(),
  excludeProperty: z.array(IriLDSchema).optional(),
  exists: z.boolean().optional(),
  linked: z.boolean().optional(),
  notNull: z.boolean().optional()
});

export interface Where extends z.output<typeof WhereSchema> {}

export function isWhere(value: unknown): value is Where {
  return WhereSchema.safeParse(value).success;
}

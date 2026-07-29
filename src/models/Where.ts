import z, { boolean } from "zod";

import { Operator } from "@/enums";

import { Compare, CompareSchema } from "./Compare";
import { Element, ElementSchema } from "./Element";
import { FunctionClause, FunctionClauseSchema } from "./FunctionClause";
import { IriLD, IriLDSchema } from "./IriLD";
import { Node, NodeSchema } from "./Node";
import { Range, RangeSchema } from "./Range";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface Where extends Element {
//   operator?: Operator;
//   value?: string;
//   valueLabel?: string;
//   units?: TTIriRef;
//   function?: FunctionClause;
//   valueTerm?: string;
//   compare?: Compare;
//   range?: Range;
//   isNull?: boolean;
//   is?: Node[];
//   anyRoleGroup?: boolean;
//   inverse?: boolean;
//   typeOf?: Node;
//   subjectVariable?: string;
//   subjectParameter?: string;
//   not?: boolean;
//   roleGroup?: boolean;
//   isNotNull?: boolean;
//   or?: Where[];
//   and?: Where[];
//   propertyRef?: string;
//   shortLabel?: string;
//   qualifier?: TTIriRef;
//   propertyList?: Node[];
//   propertyVariable?: string;
//   node?: string;
//   excludeProperty?: IriLD[];
//   exists?: boolean;
//   linked?: boolean;
//   notNull?: boolean;
// }

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

export type Where = z.output<typeof WhereSchema>;

export function isWhere(value: unknown): value is Where {
  return WhereSchema.safeParse(value).success;
}

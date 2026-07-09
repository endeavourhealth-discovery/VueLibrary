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
  isNull: z.boolean().default(false),
  is: z.array(NodeSchema).optional(),
  anyRoleGroup: z.boolean().default(false),
  inverse: z.boolean().default(false),
  typeOf: NodeSchema.optional(),
  subjectVariable: z.string().optional(),
  subjectParameter: z.string().optional(),
  not: z.boolean().default(false),
  roleGroup: z.boolean().default(false),
  isNotNull: z.boolean().default(false),
  get or(): z.ZodPrefault<z.ZodArray<typeof WhereSchema>> {
    return z.array(WhereSchema).prefault([]);
  },
  get and(): z.ZodPrefault<z.ZodArray<typeof WhereSchema>> {
    return z.array(WhereSchema).prefault([]);
  },
  propertyRef: z.string().optional(),
  shortLabel: z.string().optional(),
  qualifier: TTIriRefSchema.optional(),
  propertyList: z.array(NodeSchema).optional(),
  propertyVariable: z.string().optional(),
  node: z.string().optional(),
  excludeProperty: z.array(IriLDSchema),
  exists: z.boolean().default(false),
  linked: z.boolean().default(false),
  notNull: z.boolean().default(false)
});

export type Where = z.output<typeof WhereSchema>;

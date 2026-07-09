import z from "zod";

import { RuleAction } from "@/enums";
import { Entail } from "@/enums";

import { FunctionClause, FunctionClauseSchema } from "./FunctionClause";
import { GroupBy, GroupBySchema } from "./GroupBy";
import { Having, HavingSchema } from "./Having";
import { IriLD, IriLDSchema } from "./IriLD";
import { Node, NodeSchema } from "./Node";
import { OrderLimit, OrderLimitSchema } from "./OrderLimit";
import { Path, PathSchema } from "./Path";
import { Return, ReturnSchema } from "./Return";
import { Where, WhereSchema } from "./Where";

// export interface Match extends IriLD {
//   notExists?: boolean;
//   ifTrue?: RuleAction;
//   ifFalse?: RuleAction;
//   nodeRef?: string;
//   typeOf?: Node;
//   is?: Node;
//   and?: Match[];
//   or?: Match[];
//   where?: Where;
//   then?: Match;
//   graph?: Node;
//   optional?: boolean;
//   parameter?: string;
//   function?: FunctionClause;
//   entailment?: Entail;
//   baseRule?: boolean;
//   ruleNumber?: number;
//   inverse?: boolean;
//   activeOnly?: boolean;
//   rule?: Match[];
// any?: Match[];
//   libraryItem?: string;
//   invalid?: boolean;
//   groupBy?: GroupBy[];
//   orderBy?: OrderLimit;
//   asDescription?: string;
//   errorMessage?: string;
//   draft?: boolean;
//   having?: Having;
//   description?: string;
//   path?: Path[];
//   node?: string;
//   return?: Return[];
// }

export const MatchSchema = IriLDSchema.extend({
  notExists: z.boolean().default(false),
  ifTrue: z.enum(RuleAction).optional(),
  ifFalse: z.enum(RuleAction).optional(),
  nodeRef: z.string().optional(),
  get typeOf(): z.ZodOptional<typeof NodeSchema> {
    return NodeSchema.optional();
  },
  get is(): z.ZodOptional<typeof NodeSchema> {
    return NodeSchema.optional();
  },
  get and(): z.ZodPrefault<z.ZodArray<typeof MatchSchema>> {
    return z.array(MatchSchema).prefault([]);
  },
  get or(): z.ZodPrefault<z.ZodArray<typeof MatchSchema>> {
    return z.array(MatchSchema).prefault([]);
  },
  get where(): z.ZodOptional<typeof WhereSchema> {
    return WhereSchema.optional();
  },
  get then(): z.ZodOptional<typeof MatchSchema> {
    return MatchSchema.optional();
  },
  get graph(): z.ZodOptional<typeof NodeSchema> {
    return NodeSchema.optional();
  },
  optional: z.boolean().default(false),
  parameter: z.string(),
  function: FunctionClauseSchema.optional(),
  entailment: z.enum(Entail).optional(),
  baseRule: z.boolean().default(false),
  ruleNumber: z.number().optional(),
  inverse: z.boolean().default(false),
  activeOnly: z.boolean().default(false),
  get rule(): z.ZodPrefault<z.ZodArray<typeof MatchSchema>> {
    return z.array(MatchSchema).prefault([]);
  },
  get any(): z.ZodPrefault<z.ZodArray<typeof MatchSchema>> {
    return z.array(MatchSchema).prefault([]);
  },
  libraryItem: z.string().optional(),
  invalid: z.boolean().default(false),
  groupBy: z.array(GroupBySchema).optional(),
  orderBy: OrderLimitSchema.optional(),
  asDescription: z.string().optional(),
  errorMessage: z.string().optional(),
  draft: z.boolean().default(false),
  having: HavingSchema,
  description: z.string().optional(),
  path: z.array(PathSchema).optional(),
  node: z.string().optional(),
  return: z.array(ReturnSchema)
});

export type Match = z.output<typeof MatchSchema>;

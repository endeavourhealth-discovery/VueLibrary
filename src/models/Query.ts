import z from "zod";

import { Entail, IMQType, RuleAction } from "@/enums";

import { FunctionClause, FunctionClauseSchema } from "./FunctionClause";
import { GroupBy, GroupBySchema } from "./GroupBy";
import { Having, HavingSchema } from "./Having";
import { IriLD, IriLDSchema } from "./IriLD";
import { Node, NodeSchema } from "./Node";
import { OrderLimit, OrderLimitSchema } from "./OrderLimit";
import { Path, PathSchema } from "./Path";
import { Prefix, PrefixSchema } from "./Prefix";
import { Return, ReturnSchema } from "./Return";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";
import { Where, WhereSchema } from "./Where";

// Declared explicitly (rather than inferred via z.output) because the schema is self-referential:
// inferring the type from the recursive schema triggers TS2589 "Type instantiation is excessively deep".
export interface Query extends IriLD {
  notExists?: boolean;
  referenced?: boolean;
  ifTrue?: RuleAction;
  ifFalse?: RuleAction;
  nodeRef?: string;
  typeOf?: Node;
  from?: string;
  is?: Node;
  then?: Query;
  and?: Query[];
  or?: Query[];
  with?: Query[];
  union?: Query[];
  where?: Where;
  graph?: Node;
  optional?: boolean;
  parameter?: string;
  function?: FunctionClause;
  entailment?: Entail;
  baseRule?: boolean;
  ruleNumber?: number;
  inverse?: boolean;
  activeOnly?: boolean;
  rule?: Query[];
  libraryItem?: string;
  invalid?: boolean;
  groupBy?: GroupBy[];
  orderBy?: OrderLimit;
  asDescription?: string;
  errorMessage?: string;
  draft?: boolean;
  having?: Having;
  path?: Path[];
  return?: Return[];
  prefixes?: Prefix[];
  columnGroup?: Query[];
  each?: Query[];
  imQuery?: string;
  parentResult?: any;
  fromTypeIri?: string;
  persistentIri?: TTIriRef;
  bindAs?: string;
  queryType?: IMQType;
  as?: string;
}

export const QuerySchema: z.ZodType<Query> = IriLDSchema.extend({
  notExists: z.boolean().optional(),
  referenced: z.boolean().optional(),
  ifTrue: z.enum(RuleAction).optional(),
  ifFalse: z.enum(RuleAction).optional(),
  nodeRef: z.string().optional(),
  get typeOf(): z.ZodOptional<z.ZodLazy<typeof NodeSchema>> {
    return z.lazy(() => NodeSchema).optional();
  },
  from: z.string().optional(),
  get is(): z.ZodOptional<z.ZodLazy<typeof NodeSchema>> {
    return z.lazy(() => NodeSchema).optional();
  },
  get then(): z.ZodOptional<z.ZodLazy<typeof QuerySchema>> {
    return z.lazy(() => QuerySchema).optional();
  },
  get and(): z.ZodOptional<z.ZodArray<typeof QuerySchema>> {
    return z.array(QuerySchema).optional();
  },
  get or(): z.ZodOptional<z.ZodArray<typeof QuerySchema>> {
    return z.array(QuerySchema).optional();
  },
  get with(): z.ZodOptional<z.ZodArray<typeof QuerySchema>> {
    return z.array(QuerySchema).optional();
  },
  get union(): z.ZodOptional<z.ZodArray<typeof QuerySchema>> {
    return z.array(QuerySchema).optional();
  },
  get where(): z.ZodOptional<typeof WhereSchema> {
    return WhereSchema.optional();
  },

  get graph(): z.ZodOptional<z.ZodLazy<typeof NodeSchema>> {
    return z.lazy(() => NodeSchema).optional();
  },
  optional: z.boolean().optional(),
  parameter: z.string().optional(),
  function: FunctionClauseSchema.optional(),
  entailment: z.enum(Entail).optional(),
  baseRule: z.boolean().optional(),
  ruleNumber: z.number().optional(),
  inverse: z.boolean().optional(),
  activeOnly: z.boolean().optional(),
  get rule(): z.ZodOptional<z.ZodArray<typeof QuerySchema>> {
    return z.array(QuerySchema).optional();
  },
  libraryItem: z.string().optional(),
  invalid: z.boolean().optional(),
  groupBy: z.array(GroupBySchema).optional(),
  orderBy: OrderLimitSchema.optional(),
  asDescription: z.string().optional(),
  errorMessage: z.string().optional(),
  draft: z.boolean().optional(),
  having: HavingSchema.optional(),
  get path(): z.ZodOptional<z.ZodArray<z.ZodLazy<typeof PathSchema>>> {
    return z.array(z.lazy(() => PathSchema)).optional();
  },
  return: z.array(ReturnSchema).optional(),
  prefixes: z.array(PrefixSchema).optional(),
  get columnGroup(): z.ZodOptional<z.ZodArray<typeof QuerySchema>> {
    return z.array(QuerySchema).optional();
  },
  get each(): z.ZodOptional<z.ZodArray<typeof QuerySchema>> {
    return z.array(QuerySchema).optional();
  },
  imQuery: z.string().optional(),
  parentResult: z.any().optional(),
  fromTypeIri: z.string().optional(),
  persistentIri: TTIriRefSchema.optional(),
  bindAs: z.string().optional(),
  queryType: z.enum(IMQType).optional(),
  as: z.string().optional()
});

export function isQuery(value: unknown): value is Query {
  return QuerySchema.safeParse(value).success;
}

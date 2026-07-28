import z from "zod";

import { IMQType } from "@/enums";
import { RuleAction } from "@/enums";
import { Entail } from "@/enums";

import { FunctionClause, FunctionClauseSchema } from "./FunctionClause";
import { GroupBy, GroupBySchema } from "./GroupBy";
import { Having, HavingSchema } from "./Having";
import { IriLD, IriLDSchema } from "./IriLD";
import { Node, NodeSchema } from "./Node";
import { OrderLimit, OrderLimitSchema } from "./OrderLimit";
import { Path, PathSchema } from "./Path";
import { PrefixSchema } from "./Prefix";
import { Return, ReturnSchema } from "./Return";
import { TTIriRefSchema } from "./TTIriRef";
import { Where, WhereSchema } from "./Where";

// export interface Query extends Match {
//   prefixes?: Prefix[];
//   description?: string;
//   columnGroup?: Match[];
//   imQuery?: string;
//   parentResult?: any;
//   persistentIri?: TTIriRef;
//   bindAs?: string;
//   queryType?: IMQType;
//   iri?: string;
//   name?: string;
// }

export const QuerySchema = IriLDSchema.extend({
  notExists: z.boolean().optional(),
  ifTrue: z.enum(RuleAction).optional(),
  ifFalse: z.enum(RuleAction).optional(),
  nodeRef: z.string().optional(),
  get typeOf(): z.ZodOptional<z.ZodLazy<typeof NodeSchema>> {
    return z.lazy(() => NodeSchema).optional();
  },
  get is(): z.ZodOptional<z.ZodLazy<typeof NodeSchema>> {
    return z.lazy(() => NodeSchema).optional();
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
  get where(): z.ZodOptional<typeof WhereSchema> {
    return WhereSchema.optional();
  },
  get then(): z.ZodOptional<typeof QuerySchema> {
    return QuerySchema.optional();
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
  path: z.array(PathSchema).optional(),
  node: z.string().optional(),
  return: z.array(ReturnSchema).optional(),
  prefixes: z.array(PrefixSchema).optional(),
  description: z.string().optional(),
  get columnGroup(): z.ZodOptional<z.ZodArray<typeof QuerySchema>> {
    return z.array(QuerySchema).optional();
  },
  imQuery: z.string().optional(),
  parentResult: z.any().optional(),
  persistentIri: TTIriRefSchema.optional(),
  bindAs: z.string().optional(),
  queryType: z.enum(IMQType).optional(),
  iri: z.url().optional(),
  name: z.string().optional()
});

export type Query = z.output<typeof QuerySchema>;

export function isQuery(value: unknown): value is Query {
  return QuerySchema.safeParse(value).success;
}

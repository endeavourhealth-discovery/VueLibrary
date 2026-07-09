import z from "zod";

import { Element, ElementSchema } from "./Element";
import { Match, MatchSchema } from "./Match";

// export interface Node extends Element {
//   parameter?: string;
//   type?: string;
//   qualifier?: string;
//   match?: Match;
//   childOrSelfOf: boolean;
//   childOf: boolean;
//   cohort: boolean;
//   nodeRef?: string;
//   invalid: boolean;
//   resultSet: boolean;
//   exclude: boolean;
//   code?: string;
//   inverse: boolean;
//   node?: string;
//   isCohort: boolean;
//   isResultSet: boolean;
// }

export const NodeSchema = ElementSchema.extend({
  parameter: z.string().optional(),
  type: z.string().optional(),
  qualifier: z.string().optional(),
  get match(): z.ZodOptional<typeof MatchSchema> {
    return MatchSchema.optional();
  },
  childOrSelfOf: z.boolean().default(false),
  childOf: z.boolean().default(false),
  cohort: z.boolean().default(false),
  nodeRef: z.string().optional(),
  invalid: z.boolean().default(false),
  resultSet: z.boolean().default(false),
  exclude: z.boolean().default(false),
  code: z.string().optional(),
  inverse: z.boolean().default(false),
  node: z.string().optional(),
  isCohort: z.boolean().default(false),
  isResultSet: z.boolean().default(false)
});

export type Node = z.output<typeof NodeSchema>;

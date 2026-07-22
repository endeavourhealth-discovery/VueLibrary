import z from "zod";

import { Element, ElementSchema } from "./Element";
import { Match, MatchSchema } from "./Match";

export interface Node extends Element {
  parameter?: string;
  type?: string;
  qualifier?: string;
  match?: Match;
  childOrSelfOf?: boolean;
  childOf?: boolean;
  cohort?: boolean;
  nodeRef?: string;
  invalid?: boolean;
  resultSet?: boolean;
  exclude?: boolean;
  code?: string;
  inverse?: boolean;
  node?: string;
  isCohort?: boolean;
  isResultSet?: boolean;
}

export const NodeSchema: z.ZodType<Node> = ElementSchema.extend({
  parameter: z.string().optional(),
  type: z.string().optional(),
  qualifier: z.string().optional(),
  get match(): z.ZodOptional<z.ZodLazy<typeof MatchSchema>> {
    return z.lazy(() => MatchSchema).optional();
  },
  childOrSelfOf: z.boolean().optional(),
  childOf: z.boolean().optional(),
  cohort: z.boolean().optional(),
  nodeRef: z.string().optional(),
  invalid: z.boolean().optional(),
  resultSet: z.boolean().optional(),
  exclude: z.boolean().optional(),
  code: z.string().optional(),
  inverse: z.boolean().optional(),
  node: z.string().optional(),
  isCohort: z.boolean().optional(),
  isResultSet: z.boolean().optional()
});

// export type Node = z.output<typeof NodeSchema>;

export function isNode(value: unknown): value is Node {
  return NodeSchema.safeParse(value).success;
}

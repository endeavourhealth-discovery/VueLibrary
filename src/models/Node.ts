import z from "zod";

import { IriLD, IriLDSchema } from "@/models/IriLD";

import { Element, ElementSchema } from "./Element";
import { Query, QuerySchema } from "./Query";

export interface Node extends Element {
  parameter?: string;
  type?: string;
  qualifier?: string;
  query?: Query;
  cohort?: boolean;
  nodeRef?: string;
  invalid?: boolean;
  exclude?: boolean;
  code?: string;
  inverse?: boolean;
  node?: string;
  in?: IriLD[];
}

export const NodeSchema: z.ZodType<Node> = ElementSchema.extend({
  parameter: z.string().optional(),
  type: z.string().optional(),
  qualifier: z.string().optional(),
  get query(): z.ZodOptional<z.ZodLazy<typeof QuerySchema>> {
    return z.lazy(() => QuerySchema).optional();
  },
  cohort: z.boolean().optional(),
  nodeRef: z.string().optional(),
  invalid: z.boolean().optional(),
  exclude: z.boolean().optional(),
  code: z.string().optional(),
  inverse: z.boolean().optional(),
  node: z.string().optional(),
  isCohort: z.boolean().optional(),
  get in(): z.ZodOptional<z.ZodArray<typeof IriLDSchema>> {
    return z.array(IriLDSchema).optional();
  }
});

// export type Node = z.output<typeof NodeSchema>;

export function isNode(value: unknown): value is Node {
  return NodeSchema.safeParse(value).success;
}

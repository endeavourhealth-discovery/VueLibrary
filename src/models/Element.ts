import z from "zod";

import { IriLDSchema } from "./IriLD";

export const ElementSchema = IriLDSchema.extend({
  parameter: z.string().optional(),
  ancestorsOf: z.boolean().optional(),
  descendantsOrSelfOf: z.boolean().optional(),
  memberOf: z.boolean().optional(),
  descendantsOf: z.boolean().optional(),
  childOrSelfOf: z.boolean().optional(),
  childOf: z.boolean().optional(),
  cohort: z.boolean().optional(),
  nodeRef: z.string().optional(),
  invalid: z.boolean().optional(),
  resultSet: z.boolean().optional()
});

export type Element = z.output<typeof ElementSchema>;

export function isElement(value: unknown): value is Element {
  return ElementSchema.safeParse(value).success;
}

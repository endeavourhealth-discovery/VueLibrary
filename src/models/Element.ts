import z from "zod";

import { IriLDSchema } from "./IriLD";

export const ElementSchema = IriLDSchema.extend({
  parameter: z.string().optional(),
  ancestorsOf: z.boolean().default(false),
  descendantsOrSelfOf: z.boolean().default(false),
  memberOf: z.boolean().default(false),
  descendantsOf: z.boolean().default(false),
  childOrSelfOf: z.boolean().default(false),
  childOf: z.boolean().default(false),
  cohort: z.boolean().default(false),
  nodeRef: z.string().optional(),
  invalid: z.boolean().default(false),
  resultSet: z.boolean().default(false)
});

export type Element = z.output<typeof ElementSchema>;

export function isElement(value: unknown): value is Element {
  return ElementSchema.safeParse(value).success;
}

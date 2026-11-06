import z from "zod";

import { Entail } from "@/enums";

import { IriLDSchema } from "./IriLD";

export const ElementSchema = IriLDSchema.extend({
  parameter: z.string().optional(),
  entails: z.enum(Entail).optional(),
  cohort: z.boolean().optional(),
  nodeRef: z.string().optional(),
  invalid: z.boolean().optional()
});

export type Element = z.output<typeof ElementSchema>;

export function isElement(value: unknown): value is Element {
  return ElementSchema.safeParse(value).success;
}

import z from "zod";

import { Entity } from "./Entity";
import { ValueTemplateSchema } from "./ValueTemplate";

// export interface ParameterTemplate extends Entity {
//   label?: string;
//   order?: number;
//   valueTemplate?: ValueTemplate[];
// }

export const ParameterTemplateSchema = z.strictObject({
  label: z.string().optional(),
  order: z.string().optional(),
  valueTemplate: z.array(ValueTemplateSchema).prefault([])
});

export type ParameterTemplate = z.output<typeof ParameterTemplateSchema>;

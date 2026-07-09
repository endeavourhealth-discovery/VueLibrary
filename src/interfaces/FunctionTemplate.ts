import z from "zod";

import { Entity, EntitySchema } from "./Entity";
import { ParameterTemplateSchema } from "./ParameterTemplate";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface FunctionTemplate extends Entity {
//   function?: TTIriRef;
//   parameterTemplate?: ParameterTemplate[];
// }

export const FunctionTemplateSchema = z.strictObject({
  ...EntitySchema.shape,
  function: TTIriRefSchema.optional(),
  parameterTemplate: z.array(ParameterTemplateSchema).prefault([])
});

export type FunctionTemplate = z.output<typeof FunctionTemplateSchema>;

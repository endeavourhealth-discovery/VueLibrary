import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface ParameterShape {
//   label?: string;
//   type?: TTIriRef;
//   parameterSubType?: TTIriRef[];
// }

export const ParameterShapeSchema = z.strictObject({
  label: z.string().optional(),
  type: TTIriRefSchema.optional(),
  parameterSubType: z.array(TTIriRefSchema).optional()
});

export type ParameterShape = z.output<typeof ParameterShapeSchema>;

export function isParameterShape(value: unknown): value is ParameterShape {
  return ParameterShapeSchema.safeParse(value).success;
}

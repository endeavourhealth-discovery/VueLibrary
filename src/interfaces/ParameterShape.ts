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
  parameterSubType: z.array(TTIriRefSchema).prefault([])
});

export type ParameterShape = z.output<typeof ParameterShapeSchema>;

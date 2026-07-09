import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface TransformRequest {
//   transformMap?: TTIriRef;
//   sourceFormat?: string;
//   targetFormat?: string;
//   source?: { [index: string]: any[] };
// }

export const TransformRequestSchema = z.strictObject({
  transformMap: TTIriRefSchema.optional(),
  sourceFormat: z.string().optional(),
  targetFormat: z.string().optional(),
  source: z.map(z.string(), z.array(z.any()))
});

export type TransformRequest = z.output<typeof TransformRequestSchema>;

import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface PathQuery extends TTIriRef {
//   source?: TTIriRef;
//   target?: TTIriRef;
//   depth?: number;
// }

export const PathQuerySchema = z.strictObject({
  ...TTIriRefSchema.shape,
  source: TTIriRefSchema.optional(),
  target: TTIriRefSchema.optional(),
  depth: z.number().optional()
});

export type PathQuery = z.output<typeof PathQuerySchema>;

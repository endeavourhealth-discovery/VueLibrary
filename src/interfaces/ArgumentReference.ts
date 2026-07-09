import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface ArgumentReference {
//   parameter?: string;
//   referenceIri?: TTIriRef;
//   dataType?: TTIriRef;
// }

export const ArgumentReferenceSchema = z.strictObject({
  parameter: z.string().optional(),
  referenceIri: TTIriRefSchema.optional(),
  dataType: TTIriRefSchema.optional()
});

export type ArgumentReference = z.output<typeof ArgumentReferenceSchema>;

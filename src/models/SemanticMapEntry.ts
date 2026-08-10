import z from "zod";

import { TTIriRefSchema } from "@/models/TTIriRef";

export const SemanticMapEntrySchema = z.strictObject({
  iri: z.string().optional(),
  name: z.string().optional(),
  sourceEntity: TTIriRefSchema.optional(),
  targetText: z.string(),
  targetValue: z.number().optional(),
  rangeFrom: z.number().optional(),
  rangeTo: z.number().optional(),
  order: z.number().optional()
});

export type SemanticMapEntry = z.output<typeof SemanticMapEntrySchema>;

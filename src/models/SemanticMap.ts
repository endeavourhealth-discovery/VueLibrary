import z from "zod";

import { SemanticMapEntrySchema } from "@/models/SemanticMapEntry";
import { TTIriRefSchema } from "@/models/TTIriRef";

export const SemanticMapSchema = {
  iri: z.string().optional(),
  name: z.string().optional(),
  defaultValue: z.number().optional(),
  defaultText: z.string().optional(),
  sourceType: TTIriRefSchema.optional(),
  sourceEntityProperty: TTIriRefSchema.optional(),
  sourceValueProperty: TTIriRefSchema.optional(),
  get entries(): z.ZodOptional<z.ZodArray<typeof SemanticMapEntrySchema>> {
    return z.array(SemanticMapEntrySchema).optional();
  }
};

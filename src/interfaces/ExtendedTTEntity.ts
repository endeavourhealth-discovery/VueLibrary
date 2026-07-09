import z from "zod";

import { GenericObject, GenericObjectSchema } from "./GenericObject";
import { TTEntity, TTEntitySchema } from "./TTEntity";

// export interface ExtendedTTEntity extends TTEntity, GenericObject {}

export const ExtendedTTEntitySchema = z.object({
  ...TTEntitySchema.shape
});

export type ExtendedTTEntity = z.output<typeof ExtendedTTEntitySchema>;

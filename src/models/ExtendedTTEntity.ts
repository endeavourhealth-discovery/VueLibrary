import z from "zod";

import { GenericObject, GenericObjectSchema } from "./GenericObject";
import { TTEntity, TTEntitySchema } from "./TTEntity";

// export interface ExtendedTTEntity extends TTEntity, GenericObject {}

export const ExtendedTTEntitySchema = z.looseObject({
  ...TTEntitySchema.shape
});

export type ExtendedTTEntity = z.output<typeof ExtendedTTEntitySchema>;

export function isExtendedTTEntity(value: unknown): value is ExtendedTTEntity {
  return ExtendedTTEntitySchema.safeParse(value).success;
}

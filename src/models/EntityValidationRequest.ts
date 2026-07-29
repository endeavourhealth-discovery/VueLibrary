import z from "zod";

import { GRAPH } from "@/enums";

import { TTEntitySchema } from "./TTEntity";

// export interface EntityValidationRequest {
//   entity?: TTEntity;
//   validationIri?: string;
//   graph?: GRAPH;
// }

export const EntityValidationRequestSchema = z.strictObject({
  entity: TTEntitySchema.optional(),
  validationIri: z.string().optional(),
  graph: z.enum(GRAPH).optional()
});

export type EntityValidationRequest = z.output<typeof EntityValidationRequestSchema>;

export function isEntityValidationRequest(value: unknown): value is EntityValidationRequest {
  return EntityValidationRequestSchema.safeParse(value).success;
}

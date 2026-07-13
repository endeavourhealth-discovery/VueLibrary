import z from "zod";

import { TTEntitySchema } from "./TTEntity";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface Entity {
//   iri?: string;
//   type?: TTIriRef[];
//   status?: TTIriRef;
//   scheme?: TTIriRef;
//   isContainedIn?: TTEntity[];
//   name?: string;
//   description?: string;
// }

export const EntitySchema = z.strictObject({
  iri: z.url(),
  type: z.array(TTIriRefSchema).prefault([]),
  status: TTIriRefSchema,
  scheme: TTIriRefSchema,
  isContainedIn: z.array(TTEntitySchema).prefault([]),
  name: z.string(),
  description: z.string().optional()
});

export type Entity = z.output<typeof EntitySchema>;

export function isEntity(value: unknown): value is Entity {
  return EntitySchema.safeParse(value).success;
}

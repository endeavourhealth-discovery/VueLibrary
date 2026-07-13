import z from "zod";

import { Entity, EntitySchema } from "./Entity";
import { Query } from "./Query";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface ConceptSet extends Entity {
//   definition?: Query;
//   hasMember?: TTIriRef[];
//   usedIn?: TTIriRef[];
//   avoidReplacedBy?: boolean;
// }

export const ConceptSetSchema = z.strictObject({
  ...EntitySchema.shape,
  hasMember: z.array(TTIriRefSchema).prefault([]),
  usedIn: z.array(TTIriRefSchema).prefault([]),
  avoidReplacedBy: z.boolean().default(false)
});

export type ConceptSet = z.output<typeof ConceptSetSchema>;

export function isConceptSet(value: unknown): value is ConceptSet {
  return ConceptSetSchema.safeParse(value).success;
}

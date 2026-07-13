import z from "zod";

import { Entity, EntitySchema } from "./Entity";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface Concept extends Entity {
//   subClassOf?: TTIriRef[];
//   code?: string;
//   im1Id?: string;
//   matchedFrom?: Concept[];
//   usage?: number;
//   codeId?: string;
//   alternativeCode?: string;
//   subsumed?: boolean;
// }

export const ConceptSchema = EntitySchema.extend({
  subClassOf: z.array(TTIriRefSchema).prefault([]),
  code: z.string().optional(),
  im1Id: z.string().optional(),
  get matchedFrom(): z.ZodPrefault<z.ZodArray<typeof ConceptSchema>> {
    return z.array(ConceptSchema).prefault([]);
  },
  usage: z.number().optional(),
  codeId: z.string().optional(),
  alternativeCode: z.string().optional(),
  subsumed: z.boolean().default(false)
});

export type Concept = z.output<typeof ConceptSchema>;

export function isConcept(value: unknown): value is Concept {
  return ConceptSchema.safeParse(value).success;
}

import z from "zod";

import { TTEntitySchema } from "./TTEntity";

// export interface ConceptAggregate {
//   children: ExtendedTTEntity[];
//   concept: ExtendedTTEntity;
//   parents: ExtendedTTEntity[];
// }

export const ConceptAggregateSchema = z.strictObject({
  children: z.array(TTEntitySchema).optional(),
  concept: z.array(TTEntitySchema).optional(),
  parents: z.array(TTEntitySchema).optional()
});

export type ConceptAggregate = z.output<typeof ConceptAggregateSchema>;

export function isConceptAaggregate(value: unknown): value is ConceptAggregate {
  return ConceptAggregateSchema.safeParse(value).success;
}

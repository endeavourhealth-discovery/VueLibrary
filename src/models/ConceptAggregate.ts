import z from "zod";

import { TTEntitySchema } from "./TTEntity";

// export interface ConceptAggregate {
//   children: ExtendedTTEntity[];
//   concept: ExtendedTTEntity;
//   parents: ExtendedTTEntity[];
// }

export const ConceptAggregateSchema = z.strictObject({
  children: z.array(TTEntitySchema),
  concept: TTEntitySchema,
  parents: z.array(TTEntitySchema)
});

export type ConceptAggregate = z.output<typeof ConceptAggregateSchema>;

export function isConceptAaggregate(value: unknown): value is ConceptAggregate {
  return ConceptAggregateSchema.safeParse(value).success;
}

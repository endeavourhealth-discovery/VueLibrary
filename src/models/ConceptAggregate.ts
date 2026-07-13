import z from "zod";

import { ExtendedTTEntitySchema } from "./ExtendedTTEntity";

// export interface ConceptAggregate {
//   children: ExtendedTTEntity[];
//   concept: ExtendedTTEntity;
//   parents: ExtendedTTEntity[];
// }

export const ConceptAggregateSchema = z.strictObject({
  children: z.array(ExtendedTTEntitySchema).prefault([]),
  concept: z.array(ExtendedTTEntitySchema).prefault([]),
  parents: z.array(ExtendedTTEntitySchema).prefault([])
});

export type ConceptAggregate = z.output<typeof ConceptAggregateSchema>;

export function isConceptAaggregate(value: unknown): value is ConceptAggregate {
  return ConceptAggregateSchema.safeParse(value).success;
}

import z from "zod";

import { ExtendedTTEntity, ExtendedTTEntitySchema } from "./ExtendedTTEntity";

// export interface ValidatedEntity extends ExtendedTTEntity {
//   validationCode?: string;
//   validationLabel?: string;
// }

export const ValidatedEntitySchema = ExtendedTTEntitySchema.extend({
  validationCode: z.string().optional(),
  validationLabel: z.string().optional()
});

export type ValidatedEntity = z.output<typeof ValidatedEntitySchema>;

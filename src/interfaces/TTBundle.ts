import z from "zod";

import { ExtendedTTEntity, ExtendedTTEntitySchema } from "./ExtendedTTEntity";

// export interface TTBundle {
//   entity: ExtendedTTEntity;
//   predicates: { [index: string]: string };
// }

export const TTBundleSchema = z.strictObject({
  entity: ExtendedTTEntitySchema,
  predicates: z.map(z.string(), z.string()).prefault(new Map())
});

export type TTBundle = z.output<typeof TTBundleSchema>;

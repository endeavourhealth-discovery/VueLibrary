import z from "zod";

import { EntityReferenceNode, EntityReferenceNodeSchema } from "./EntityReferenceNode";

// export interface ExtendedEntityReferenceNode extends EntityReferenceNode {
//   name: string;
//   icon: string[];
//   hasGrandChildren?: boolean;
// }

export const ExtendedEntityReferenceNodeSchema = z.strictObject({
  ...EntityReferenceNodeSchema.shape,
  name: z.string(),
  icon: z.array(z.string()),
  hasGrandChildren: z.boolean().default(false)
});

export type ExtendedEntityReferenceNode = z.output<typeof EntityReferenceNodeSchema>;

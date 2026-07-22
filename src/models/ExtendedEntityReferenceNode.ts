import z from "zod";

import { EntityReferenceNode, EntityReferenceNodeSchema } from "./EntityReferenceNode";

// export interface ExtendedEntityReferenceNode extends EntityReferenceNode {
//   name: string;
//   icon: string[];
//   hasGrandChildren?: boolean;
// }

export const ExtendedEntityReferenceNodeSchema = EntityReferenceNodeSchema.extend({
  name: z.string(),
  icon: z.array(z.string()).prefault([]),
  hasGrandChildren: z.boolean().default(false)
});

export type ExtendedEntityReferenceNode = z.output<typeof ExtendedEntityReferenceNodeSchema>;

export function isExtendedEntityReferenceNode(value: unknown): value is ExtendedEntityReferenceNode {
  return ExtendedEntityReferenceNodeSchema.safeParse(value).success;
}

import z from "zod";

import { TTArraySchema } from "./TTArray";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";
import { TTLiteralSchema } from "./TTLiteral";
import { TTNodeSchema } from "./TTNode";

// export interface EntityReferenceNode extends TTIriRef {
//   parents?: EntityReferenceNode[];
//   children?: EntityReferenceNode[];
//   moduleId?: string;
//   hasChildren?: boolean;
//   hasGrandChildren?: boolean;
//   type?: TTArray;
//   orderNumber?: number;
// }

export const EntityReferenceNodeSchema = TTIriRefSchema.extend({
  get parents(): z.ZodPrefault<z.ZodArray<typeof EntityReferenceNodeSchema>> {
    return z.array(EntityReferenceNodeSchema).prefault([]);
  },

  get children(): z.ZodPrefault<z.ZodArray<typeof EntityReferenceNodeSchema>> {
    return z.array(EntityReferenceNodeSchema).prefault([]);
  },

  moduleId: z.string().optional(),
  hasChildren: z.boolean().default(false),
  hasGrandChildren: z.boolean().default(false),
  type: TTArraySchema,
  orderNumber: z.number().optional()
});

export type EntityReferenceNode = z.infer<typeof EntityReferenceNodeSchema>;

export function isEntityReferenceNode(value: unknown): value is EntityReferenceNode {
  return EntityReferenceNodeSchema.safeParse(value).success;
}

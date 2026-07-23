import z from "zod";

import { TTArraySchema } from "./TTArray";
import { TTIriRefSchema } from "./TTIriRef";

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
  get parents(): z.ZodOptional<z.ZodArray<typeof EntityReferenceNodeSchema>> {
    return z.array(EntityReferenceNodeSchema).optional();
  },

  get children(): z.ZodOptional<z.ZodArray<typeof EntityReferenceNodeSchema>> {
    return z.array(EntityReferenceNodeSchema).optional();
  },

  moduleId: z.string().optional(),
  hasChildren: z.boolean().optional(),
  hasGrandChildren: z.boolean().optional(),
  type: TTArraySchema,
  orderNumber: z.number().optional(),
  status: TTIriRefSchema.optional()
});

export type EntityReferenceNode = z.infer<typeof EntityReferenceNodeSchema>;

export function isEntityReferenceNode(value: unknown): value is EntityReferenceNode {
  return EntityReferenceNodeSchema.safeParse(value).success;
}

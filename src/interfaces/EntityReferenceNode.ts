import z from "zod";

import { TTArray, TTArraySchema } from "./TTArray";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

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
  type: TTArraySchema.optional(),
  orderNumber: z.number().optional()
});

export type EntityReferenceNode = z.infer<typeof EntityReferenceNodeSchema>;

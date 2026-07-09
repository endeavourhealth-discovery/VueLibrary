import z from "zod";

import { Node, NodeSchema } from "./Node";
import { Where, WhereSchema } from "./Where";

// export interface Delete {
//   property?: Where;
//   subject?: Node;
//   inverse?: boolean;
//   predicate?: Node;
//   object?: Node;
//   delete?: Delete[];
// }

export const DeleteSchema = z.strictObject({
  property: WhereSchema.optional(),
  subject: NodeSchema.optional(),
  inverse: z.boolean().default(false),
  predicate: NodeSchema.optional(),
  object: NodeSchema.optional(),
  get delete() {
    return z.array(DeleteSchema).optional();
  }
});

export type Delete = z.output<typeof DeleteSchema>;

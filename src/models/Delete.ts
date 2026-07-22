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
  subject: z.lazy(() => NodeSchema).optional(),
  inverse: z.boolean().optional(),
  predicate: z.lazy(() => NodeSchema).optional(),
  object: z.lazy(() => NodeSchema).optional(),
  get delete() {
    return z.array(DeleteSchema).optional();
  }
});

export type Delete = z.output<typeof DeleteSchema>;

export function isDelete(value: unknown): value is Delete {
  return DeleteSchema.safeParse(value).success;
}

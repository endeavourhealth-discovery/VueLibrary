import z from "zod";

import { TTIriRefSchema } from "./TTIriRef";
import { TTLiteralSchema } from "./TTLiteral";
import { TTNodeSchema } from "./TTNode";

// export interface TTArray {
//   elements?: TTValue[];
//   list?: boolean;
// }

export const TTArraySchema = z.strictObject({
  get elements() {
    return z.array(z.union([TTLiteralSchema, TTIriRefSchema, TTNodeSchema])).prefault([]);
  },
  list: z.boolean().default(false)
});

export type TTArray = z.output<typeof TTArraySchema>;

import z from "zod";

import { TTIriRefSchema } from "./TTIriRef";
import { TTLiteralSchema } from "./TTLiteral";
import { TTNodeSchema } from "./TTNode";

// export interface TTArray {
//   elements?: TTValue[];
//   list?: boolean;
// }

export const TTArraySchema: z.ZodPrefault<z.ZodArray<z.ZodUnion<readonly [typeof TTLiteralSchema, typeof TTIriRefSchema, typeof TTNodeSchema]>>> = z
  .array(z.union([TTLiteralSchema, TTIriRefSchema, TTNodeSchema]))
  .prefault([]);

export type TTArray = z.output<typeof TTArraySchema>;

export function isTTArray(value: unknown): value is TTArray {
  return TTArraySchema.safeParse(value).success;
}

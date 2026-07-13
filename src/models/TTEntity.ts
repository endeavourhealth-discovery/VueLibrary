import z from "zod";

import { TTArraySchema } from "./TTArray";
import { TTContextSchema } from "./TTContext";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";
import { TTLiteralSchema } from "./TTLiteral";
import { TTNodeSchema } from "./TTNode";
import { TTPrefixSchema } from "./TTPrefix";

// export interface TTEntity extends TTNode {
//   context?: TTContext;
//   crud?: TTIriRef;
//   type?: TTArray;
//   status?: TTIriRef;
//   name?: string;
//   scheme?: TTIriRef;
//   version?: number;
//   description?: string;
//   code?: string;
//   types?: TTIriRef[];
//   prefixes?: TTPrefix[];
// }

export const TTEntitySchema = z.strictObject({
  ...TTNodeSchema.shape,
  context: TTContextSchema.optional(),
  crud: TTIriRefSchema.optional()
});

export type TTEntity = z.output<typeof TTEntitySchema>;

export function isTTEntity(value: unknown): value is TTEntity {
  return TTEntitySchema.safeParse(value).success;
}

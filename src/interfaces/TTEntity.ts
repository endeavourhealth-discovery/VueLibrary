import z from "zod";

import { TTArraySchema } from "./TTArray";
import { TTContextSchema } from "./TTContext";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";
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
  crud: TTIriRefSchema.optional(),
  type: TTArraySchema.optional(),
  status: TTIriRefSchema.optional(),
  name: z.string().optional(),
  scheme: TTIriRefSchema.optional(),
  version: z.number().optional(),
  description: z.string().optional(),
  code: z.string().optional(),
  types: z.array(TTIriRefSchema).prefault([]),
  prefixes: z.array(TTPrefixSchema).prefault([])
});

export type TTEntity = z.output<typeof TTEntitySchema>;

import z from "zod";

import { TTArraySchema } from "./TTArray";
import { TTIriRefSchema } from "./TTIriRef";
import { TTLiteralSchema } from "./TTLiteral";

// export interface TTNode {
//   iri?: string;
//   predicateMap?: { [index: string]: TTArray };
// }

export const TTNodeSchema = z.strictObject({
  iri: z.url().optional(),
  get predicateMap(): z.ZodDefault<z.ZodMap<z.ZodString, typeof TTArraySchema>> {
    return z.map(z.string(), TTArraySchema).default(new Map());
  }
});

export type TTNode = z.output<typeof TTNodeSchema>;

export function isTTNode(value: unknown): value is TTNode {
  return TTNodeSchema.safeParse(value).success;
}

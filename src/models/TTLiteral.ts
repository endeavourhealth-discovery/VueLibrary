import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface TTLiteral {
//   value?: string;
//   type?: TTIriRef;
// }

export const TTLiteralSchema = z.union([z.string(), z.boolean(), z.number(), z.strictObject({ value: z.string(), type: z.string() })]);

export type TTLiteral = z.output<typeof TTLiteralSchema>;

export function isTTLiteral(value: unknown): value is TTLiteral {
  return TTLiteralSchema.safeParse(value).success;
}

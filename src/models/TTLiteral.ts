import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface TTLiteral {
//   value?: string;
//   type?: TTIriRef;
// }

export const TTLiteralSchema = z.strictObject({
  value: z.string().optional(),
  type: TTIriRefSchema.optional()
});

export type TTLiteral = z.output<typeof TTLiteralSchema>;

export function isTTLiteral(value: unknown): value is TTLiteral {
  return TTLiteralSchema.safeParse(value).success;
}

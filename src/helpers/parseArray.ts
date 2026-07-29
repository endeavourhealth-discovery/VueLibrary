import z from "zod";

export function parseArray<T>(value: unknown, schema: z.ZodType<T>): T[] {
  return z.array(schema).parse(value);
}

import z from "zod";

export function parseApiResponse<T>(data: unknown, schema: z.ZodType<T>): T;

export function parseApiResponse<T>(data: unknown, schema: z.ZodType<T>, isArrayOf: true): T[];

export function parseApiResponse<T>(data: unknown, schema: z.ZodType<T>, isArrayOf = false): T | T[] {
  const parser = isArrayOf ? z.array(schema) : schema;

  if (import.meta.env.VITE_SAFE_PARSE_API_RESPONSE === "true") {
    const parsed = parser.safeParse(data);

    if (parsed.success) {
      return parsed.data;
    }

    console.error(parsed.error);
    return data as T | T[];
  }

  return parser.parse(data);
}

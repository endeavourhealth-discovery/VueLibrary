import z from "zod";

export function parseApiResponse<T>(data: unknown, schema: z.ZodType<T>): T {
  if (import.meta.env.VITE_SAFE_PARSE_API_RESPONSE !== "true") {
    return schema.parse(data);
  } else {
    const parsed = schema.safeParse(data);
    if (parsed.success) {
      return parsed.data;
    }
    console.error(parsed.error);
    return data as T;
  }
}

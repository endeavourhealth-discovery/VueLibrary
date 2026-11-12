import z from "zod";

let safeParse = false;

/**
 * Sets how parseApiResponse behaves for the whole app. Call once at startup.
 * false (default): invalid data throws a ZodError.
 * true: invalid data is logged with console.error and returned unchanged.
 */
export function setSafeParseApiResponse(safe: boolean): void {
  console.warn("Switching parse mode to", safe ? "safe" : "strict");
  safeParse = safe;
}

export function parseApiResponse<T>(data: unknown, schema: z.ZodType<T>): T {
  if (!safeParse) {
    console.warn("Parsing in strict mode");
    return schema.parse(data);
  } else {
    console.warn("Parsing in safe mode");
    const parsed = schema.safeParse(data);
    if (parsed.success) {
      return parsed.data;
    }
    console.error(parsed.error);
    return data as T;
  }
}

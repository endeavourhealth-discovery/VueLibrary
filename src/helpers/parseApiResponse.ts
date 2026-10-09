import z from "zod";

let safeParse = false;

/**
 * Sets how parseApiResponse behaves for the whole app. Call once at startup.
 * false (default): invalid data throws a ZodError.
 * true: invalid data is logged with console.error and returned unchanged.
 */
export function setSafeParseApiResponse(safe: boolean): void {
  safeParse = safe;
}

export function parseApiResponse<T>(data: unknown, schema: z.ZodType<T>): T {
  if (!safeParse) {
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

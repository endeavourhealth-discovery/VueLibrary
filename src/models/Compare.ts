import z from "zod";

import { ValueSourceSchema } from "./ValueSource";

export const CompareSchema = ValueSourceSchema.extend({});

export type Compare = z.output<typeof CompareSchema>;

export function isCompare(value: unknown): value is Compare {
  return CompareSchema.safeParse(value).success;
}

import z from "zod";

import { NodeSchema } from "@/models/Node";

export const FromSchema = z.strictObject({
  get typeOf(): z.ZodOptional<z.ZodLazy<typeof NodeSchema>> {
    return z.lazy(() => NodeSchema).optional();
  },
  alias: z.string().optional()
});

export type From = z.output<typeof FromSchema>;

export function isFrom(value: unknown): value is From {
  return FromSchema.safeParse(value).success;
}

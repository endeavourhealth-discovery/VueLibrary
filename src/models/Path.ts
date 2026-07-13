import z from "zod";

import { ElementSchema } from "./Element";
import { NodeSchema } from "./Node";
import { TTIriRefSchema } from "./TTIriRef";

export const PathSchema = z.strictObject({
  inverse: z.boolean().default(false),
  optional: z.boolean().default(false),
  get path(): z.ZodPrefault<z.ZodArray<typeof PathSchema>> {
    return z.array(PathSchema).prefault([]);
  },
  pathVariable: z.string().optional(),
  get typeOf(): typeof NodeSchema {
    return NodeSchema;
  },
  qualifier: TTIriRefSchema,
  node: z.string()
});

export type Path = z.output<typeof PathSchema>;

export function isPath(value: unknown): value is Path {
  return PathSchema.safeParse(value).success;
}

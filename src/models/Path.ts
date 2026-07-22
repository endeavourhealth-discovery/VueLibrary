import z from "zod";

import { ElementSchema } from "./Element";
import { NodeSchema } from "./Node";
import { TTIriRefSchema } from "./TTIriRef";

export const PathSchema = ElementSchema.extend({
  inverse: z.boolean().optional(),
  optional: z.boolean().optional(),
  get path(): z.ZodOptional<z.ZodArray<typeof PathSchema>> {
    return z.array(PathSchema).optional();
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

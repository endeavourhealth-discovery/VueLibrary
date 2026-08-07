import z from "zod";

import { ElementSchema } from "./Element";
import { NodeSchema } from "./Node";
import { TTIriRefSchema } from "./TTIriRef";
import { WhereSchema } from "./Where";

export const PathSchema = ElementSchema.extend({
  inverse: z.boolean().optional(),
  optional: z.boolean().optional(),
  get path(): z.ZodOptional<z.ZodArray<z.ZodLazy<typeof PathSchema>>> {
    return z.array(z.lazy(() => PathSchema)).optional();
  },
  pathVariable: z.string().optional(),
  get typeOf(): z.ZodOptional<z.ZodLazy<typeof NodeSchema>> {
    return z.lazy(() => NodeSchema).optional();
  },
  get where(): z.ZodOptional<z.ZodLazy<typeof WhereSchema>> {
    return z.lazy(() => WhereSchema).optional();
  },
  qualifier: TTIriRefSchema.optional(),
  node: z.string().optional()
});

export type Path = z.output<typeof PathSchema>;

export function isPath(value: unknown): value is Path {
  return PathSchema.safeParse(value).success;
}

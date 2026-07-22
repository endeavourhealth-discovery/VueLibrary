import z from "zod";

import { PropertyShape, PropertyShapeSchema } from "./PropertyShape";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface NodeShape extends TTIriRef {
//   property?: PropertyShape[];
//   subType?: TTIriRef[];
//   definingProperty?: TTIriRef;
//   inverseProperty?: TTIriRef;
//   folder?: NodeShape[];
//   type?: NodeShape[];
// }

export const NodeShapeSchema = TTIriRefSchema.extend({
  get property(): z.ZodOptional<z.ZodArray<typeof PropertyShapeSchema>> {
    return z.array(PropertyShapeSchema).optional();
  },
  subType: z.array(TTIriRefSchema).optional(),
  definingProperty: TTIriRefSchema.optional(),
  inverseProperty: TTIriRefSchema.optional(),

  get folder(): z.ZodOptional<z.ZodArray<typeof NodeShapeSchema>> {
    return z.array(NodeShapeSchema).optional();
  },

  get type(): z.ZodOptional<z.ZodArray<typeof NodeShapeSchema>> {
    return z.array(NodeShapeSchema).optional();
  }
});

export type NodeShape = z.output<typeof NodeShapeSchema>;

export function isNodeShape(value: unknown): value is NodeShape {
  return NodeShapeSchema.safeParse(value).success;
}

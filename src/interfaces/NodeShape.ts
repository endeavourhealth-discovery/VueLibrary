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
  get property(): z.ZodPrefault<z.ZodArray<typeof PropertyShapeSchema>> {
    return z.array(PropertyShapeSchema).prefault([]);
  },
  subType: z.array(TTIriRefSchema).prefault([]),
  definingProperty: TTIriRefSchema.optional(),
  inverseProperty: TTIriRefSchema.optional(),

  get folder(): z.ZodPrefault<z.ZodArray<typeof NodeShapeSchema>> {
    return z.array(NodeShapeSchema).prefault([]);
  },

  get type(): z.ZodPrefault<z.ZodArray<typeof NodeShapeSchema>> {
    return z.array(NodeShapeSchema).prefault([]);
  }
});

export type NodeShape = z.output<typeof NodeShapeSchema>;

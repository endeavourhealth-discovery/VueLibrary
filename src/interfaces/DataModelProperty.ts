import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface DataModelProperty {
//   property?: TTIriRef;
//   type?: TTIriRef;
//   minInclusive?: string;
//   minExclusive?: string;
//   maxInclusive?: string;
//   maxExclusive?: string;
//   pattern?: string;
//   inheritedFrom?: TTIriRef;
//   order?: number;
// }

export const DataModelPropertySchema = z.strictObject({
  property: TTIriRefSchema.optional(),
  type: TTIriRefSchema.optional(),
  minInclusive: z.string().optional(),
  minExclusive: z.string().optional(),
  maxInclusive: z.string().optional(),
  maxExclusive: z.string().optional(),
  pattern: z.string().optional(),
  inheritedFrom: TTIriRefSchema.optional(),
  order: z.number().optional()
});

export type DataModelProperty = z.output<typeof DataModelPropertySchema>;

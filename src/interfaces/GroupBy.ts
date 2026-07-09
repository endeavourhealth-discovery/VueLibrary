import z from "zod";

import { IriLD, IriLDSchema } from "./IriLD";

// export interface GroupBy extends IriLD {
//   nodeRef?: string;
//   valueRef?: string;
//   propertyRef?: string;
// }

export const GroupBySchema = z.strictObject({
  ...IriLDSchema.shape,
  nodeRef: z.string().optional(),
  valueRef: z.string().optional(),
  propertyRef: z.string().optional()
});

export type GroupBy = z.output<typeof GroupBySchema>;

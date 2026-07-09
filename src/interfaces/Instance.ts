import z from "zod";

import { IriLD, IriLDSchema } from "./IriLD";
import { TTIriRefSchema } from "./TTIriRef";

// export interface Instance extends IriLD {
//   entailment?: TTIriRef;
// }

export const InstanceSchema = z.strictObject({
  ...IriLDSchema.shape,
  entailment: TTIriRefSchema.optional()
});

export type Instance = z.output<typeof InstanceSchema>;

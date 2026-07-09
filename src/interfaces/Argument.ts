import { z } from "zod";

import { PathSchema } from "./Path";
import { TTIriRefSchema } from "./TTIriRef";

// export interface Argument {
//   parameter?: string;
//   valueData?: string;
//   valueParameter?: string;
//   valueIri?: TTIriRef;
//   valueIriList?: TTIriRef[];
//   valueDataList?: string[];
//   valuePath?: Path;
//   valueNodeRef?: string;
//   dataType?: TTIriRef;
//   valueObject?: any;
//   valueVariable?: string;
//   qualifier?: TTIriRef;
// }

export const ArgumentSchema = z.object({
  parameter: z.string(),
  valueData: z.string(),
  valueParameter: z.string(),
  valueIri: TTIriRefSchema,
  valueIriList: z.array(TTIriRefSchema),
  valueDataList: z.array(z.string()),
  valuePath: PathSchema,
  valueNodeRef: z.string(),
  dataType: TTIriRefSchema,
  valueObject: z.any(),
  valueVariable: z.string().optional(),
  qualifier: TTIriRefSchema
});

export type Argument = z.output<typeof ArgumentSchema>;

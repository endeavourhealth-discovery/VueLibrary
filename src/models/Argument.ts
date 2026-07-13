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
  parameter: z.string().optional(),
  valueData: z.string().optional(),
  valueParameter: z.string().optional(),
  valueIri: TTIriRefSchema.optional(),
  valueIriList: z.array(TTIriRefSchema).prefault([]),
  valueDataList: z.array(z.string()).prefault([]),
  valuePath: PathSchema.optional(),
  valueNodeRef: z.string().optional(),
  dataType: TTIriRefSchema.optional(),
  valueObject: z.any().optional(),
  valueVariable: z.string().optional(),
  qualifier: TTIriRefSchema.optional()
});

export type Argument = z.output<typeof ArgumentSchema>;

export function isArgument(value: unknown): value is Argument {
  return ArgumentSchema.safeParse(value).success;
}

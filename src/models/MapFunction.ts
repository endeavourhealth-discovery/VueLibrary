import z from "zod";

import { ArgumentSchema } from "./Argument";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface MapFunction extends TTIriRef {
//   argument?: Argument[];
//   conceptMap?: { [index: string]: string };
//   defaultValue?: TTIriRef;
// }

export const MapFunctionSchema = z.strictObject({
  ...TTIriRefSchema.shape,
  argument: z.array(ArgumentSchema).prefault([]),
  conceptMap: z.record(z.string(), z.string()).optional(),
  defaultValue: TTIriRefSchema.optional()
});

export type MapFunction = z.output<typeof MapFunctionSchema>;

export function isMapFunction(value: unknown): value is MapFunction {
  return MapFunctionSchema.safeParse(value).success;
}

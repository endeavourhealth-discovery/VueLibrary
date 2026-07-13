import z from "zod";

import { GRAPH } from "@/enums";

import { Argument, ArgumentSchema } from "./Argument";
import { PageSchema } from "./Page";

// export interface FunctionRequest {
//   functionIri?: string;
//   arguments?: Argument[];
//   page?: Page;
//   graph?: GRAPH;
// }

export const FunctionRequestSchema = z.strictObject({
  functionIri: z.url(),
  arguments: z.array(ArgumentSchema).prefault([]),
  page: PageSchema.optional(),
  graph: z.enum(GRAPH).optional()
});

export type FunctionRequest = z.output<typeof FunctionRequestSchema>;

export function isFunctionRequest(value: unknown): value is FunctionRequest {
  return FunctionRequestSchema.safeParse(value).success;
}

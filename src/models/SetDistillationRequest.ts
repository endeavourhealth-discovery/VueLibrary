import z from "zod";

import { GRAPH } from "@/enums";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface SetDistillationRequest {
//   conceptList?: TTIriRef[];
//   graph?: GRAPH;
// }

export const SetDistillationRequestSchema = z.strictObject({
  conceptList: z.array(TTIriRefSchema).optional(),
  graph: z.enum(GRAPH).optional()
});

export type SetDistillationRequest = z.output<typeof SetDistillationRequestSchema>;

export function isSetDistillationRequest(value: unknown): value is SetDistillationRequest {
  return SetDistillationRequestSchema.safeParse(value).success;
}

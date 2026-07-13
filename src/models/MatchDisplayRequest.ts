import z from "zod";

import { GRAPH } from "@/enums";

import { MatchSchema } from "./Match";

// export interface MatchDisplayRequest {
//   match?: Match;
//   graph?: GRAPH;
// }

export const MatchDisplayRequestSchema = z.strictObject({
  match: MatchSchema.optional(),
  graph: z.enum(GRAPH).optional()
});

export type MatchDisplayRequest = z.output<typeof MatchDisplayRequestSchema>;

export function isMatchDisplayRequest(value: unknown): value is MatchDisplayRequest {
  return MatchDisplayRequestSchema.safeParse(value).success;
}

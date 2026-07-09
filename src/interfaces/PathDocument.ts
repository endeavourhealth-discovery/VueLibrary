import z from "zod";

import { Match, MatchSchema } from "./Match";

// export interface PathDocument {
//   match?: Match[];
// }

export const PathDocumentSchema = z.strictObject({
  match: z.array(MatchSchema).prefault([])
});

export type PathDocument = z.output<typeof PathDocumentSchema>;

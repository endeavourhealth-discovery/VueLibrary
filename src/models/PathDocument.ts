import z from "zod";

import { QuerySchema } from "./Query";

// export interface PathDocument {
//   match?: Match[];
// }

export const PathDocumentSchema = z.strictObject({
  match: z.array(QuerySchema).optional()
});

export type PathDocument = z.output<typeof PathDocumentSchema>;

export function isPathDocument(value: unknown): value is PathDocument {
  return PathDocumentSchema.safeParse(value).success;
}

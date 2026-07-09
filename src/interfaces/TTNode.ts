import z from "zod";

import { TTArraySchema } from "./TTArray";

// export interface TTNode {
//   iri?: string;
//   predicateMap?: { [index: string]: TTArray };
// }

export const TTNodeSchema = z.strictObject({
  iri: z.url().optional(),
  predicateMap: z.map(z.string(), TTArraySchema).default(new Map())
});

export type TTNode = z.output<typeof TTNodeSchema>;

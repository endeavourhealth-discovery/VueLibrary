import z from "zod";

import { SearchTermCodeSchema } from "./SearchTermCode";
import { TTIriRefSchema } from "./TTIriRef";

// export interface EntityDocument {
//   id?: number;
//   iri?: string;
//   name?: string;
//   length?: number;
//   preferredName?: string;
//   code?: string;
//   alternativeCode?: string;
//   scheme?: TTIriRef;
//   type?: TTIriRef[];
//   status?: TTIriRef;
//   termCode?: SearchTermCode[];
//   usageTotal?: number;
//   match?: string;
//   isA?: TTIriRef[];
//   memberOf?: TTIriRef[];
//   subsumptionCount?: number;
//   binding?: string[];
//   isDescendentOf?: TTIriRef[];
// }

export const EntityDocumentSchema = z.strictObject({
  id: z.number().optional(),
  iri: z.url().optional(),
  name: z.string().optional(),
  length: z.number().optional(),
  preferredName: z.string().optional(),
  code: z.string().optional(),
  alternativeCode: z.string().optional(),
  scheme: TTIriRefSchema.optional(),
  type: z.array(TTIriRefSchema).prefault([]),
  status: TTIriRefSchema.optional(),
  termCode: z.array(SearchTermCodeSchema).prefault([]),
  usageTotal: z.number().optional(),
  match: z.string().optional(),
  isA: z.array(TTIriRefSchema).prefault([]),
  memberOf: z.array(TTIriRefSchema).prefault([]),
  subsumptionCount: z.number().optional(),
  binding: z.array(z.string()).prefault([]),
  isDescendentOf: z.array(TTIriRefSchema).prefault([])
});

export type EntityDocument = z.output<typeof EntityDocumentSchema>;

export function isEntityDocument(value: unknown): value is EntityDocument {
  return EntityDocumentSchema.safeParse(value).success;
}

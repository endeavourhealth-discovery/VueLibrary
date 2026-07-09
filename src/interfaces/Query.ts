import z from "zod";

import { IMQType } from "@/enums";

import { Match, MatchSchema } from "./Match";
import { PrefixSchema } from "./Prefix";
import { TTIriRefSchema } from "./TTIriRef";

// export interface Query extends Match {
//   prefixes?: Prefix[];
//   description?: string;
//   columnGroup?: Match[];
//   imQuery?: string;
//   parentResult?: any;
//   persistentIri?: TTIriRef;
//   bindAs?: string;
//   queryType?: IMQType;
//   iri?: string;
//   name?: string;
// }

export const QuerySchema = z.strictObject({
  ...MatchSchema.shape,
  prefixes: z.array(PrefixSchema).prefault([]),
  description: z.string().optional(),
  columnGroup: z.array(MatchSchema).prefault([]),
  imQuery: z.string().optional(),
  parentResult: z.any().optional(),
  persistentIri: TTIriRefSchema.optional(),
  bindAs: z.string().optional(),
  queryType: z.enum(IMQType).optional(),
  iri: z.string().optional(),
  name: z.string().optional()
});

export type Query = z.output<typeof QuerySchema>;

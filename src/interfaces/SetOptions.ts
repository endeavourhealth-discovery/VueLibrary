import z from "zod";

// export interface SetOptions {
//   setIri?: string;
//   schemes?: string[];
//   includeIM1id?: boolean;
//   subsumptions?: string[];
//   includeDefinition?: boolean;
//   includeCore?: boolean;
//   includeLegacy?: boolean;
//   includeSubsets?: boolean;
// }

export const SetOptionsSchema = z.strictObject({
  setIri: z.string().optional(),
  schemes: z.array(z.string()).prefault([]),
  includeIM1id: z.boolean().default(false),
  subsumptions: z.array(z.string()).prefault([]),
  includeDefinition: z.boolean().default(false),
  includeCore: z.boolean().default(false),
  includeLegacy: z.boolean().default(false),
  includeSubsets: z.boolean().default(false)
});

export type SetOptions = z.output<typeof SetOptionsSchema>;

import z from "zod";

// export interface DownloadEntityOptions {
//   entityIri?: string;
//   format?: string;
//   includeHasSubtypes?: boolean;
//   includeInferred?: boolean;
//   includeProperties?: boolean;
//   includeMembers?: boolean;
//   expandMembers?: boolean;
//   expandSubsets?: boolean;
//   includeTerms?: boolean;
//   includeIsChildOf?: boolean;
//   includeHasChildren?: boolean;
//   includeInactive?: boolean;
// }

export const DownloadEntityOptionsSchema = z.strictObject({
  entityIri: z.url(),
  format: z.string().optional(),
  includeHasSubtypes: z.boolean().default(false),
  includeInferred: z.boolean().default(false),
  includeProperties: z.boolean().default(false),
  includeMembers: z.boolean().default(false),
  expandMembers: z.boolean().default(false),
  expandSubsets: z.boolean().default(false),
  includeTerms: z.boolean().default(false),
  includeIsChildOf: z.boolean().default(false),
  includeHasChildren: z.boolean().default(false),
  includeInactive: z.boolean().default(false)
});

export type DownloadEntityOptions = z.output<typeof DownloadEntityOptionsSchema>;

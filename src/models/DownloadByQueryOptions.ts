import z from "zod";

import { ECLQueryRequestSchema } from "./ECLQueryRequest";
import { QueryRequestSchema } from "./QueryRequest";

// export interface DownloadByQueryOptions {
//   queryRequest?: QueryRequest;
//   eclSearchRequest?: ECLQueryRequest;
//   totalCount?: number;
//   format?: string;
//   includeDefinition?: boolean;
//   includeCore?: boolean;
//   includeLegacy?: boolean;
//   includeSubsets?: boolean;
//   subsetsOnOwnRow?: boolean;
//   im1id?: boolean;
// }

export const DownloadByQueryOptionsSchema = z.strictObject({
  queryRequest: QueryRequestSchema.optional(),
  eclSearchRequest: ECLQueryRequestSchema.optional(),
  totalCount: z.number().optional(),
  format: z.string().optional(),

  includeDefinition: z.boolean().default(false),
  includeCore: z.boolean().default(false),
  includeLegacy: z.boolean().default(false),
  includeSubsets: z.boolean().default(false),
  subsetsOnOwnRow: z.boolean().default(false),
  im1id: z.boolean().default(false)
});

export type DownloadByQueryOptions = z.output<typeof DownloadByQueryOptionsSchema>;

export function isDownloadByQueryOptions(value: unknown): value is DownloadByQueryOptions {
  return DownloadByQueryOptionsSchema.safeParse(value).success;
}

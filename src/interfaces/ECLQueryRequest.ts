// export interface ECLQueryRequest {
//   ecl?: string;
//   query?: Query;
//   showNames?: boolean;
//   status?: ECLStatus;
//   includeLegacy?: boolean;
//   limit?: number;
//   statusFilter?: TTIriRef[];
//   page?: number;
//   size?: number;
// }
import z from "zod";

import { ECLStatusSchema } from "./ECLStatus";
import { QuerySchema } from "./Query";
import { TTIriRefSchema } from "./TTIriRef";

export const ECLQueryRequestSchema = z.strictObject({
  ecl: z.string().optional(),
  query: QuerySchema.optional(),
  showNames: z.boolean().default(false),
  status: ECLStatusSchema.optional(),
  includeLegacy: z.boolean().default(false),
  limit: z.number().default(1000),
  statusFilter: z.array(TTIriRefSchema).prefault([]),
  page: z.number().default(1),
  size: z.number().default(20)
});

export type ECLQueryRequest = z.output<typeof ECLQueryRequestSchema>;

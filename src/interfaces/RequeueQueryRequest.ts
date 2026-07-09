import z from "zod";

import { QueryRequest, QueryRequestSchema } from "./QueryRequest";

// export interface RequeueQueryRequest {
//   queueId?: string;
//   queryRequest?: QueryRequest;
// }

export const RequeueQueryRequestSchema = z.strictObject({
  queryId: z.string(),
  queryRequest: QueryRequestSchema
});

export type RequeueQueryRequest = z.output<typeof RequeueQueryRequestSchema>;

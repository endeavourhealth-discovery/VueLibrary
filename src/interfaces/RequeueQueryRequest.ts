import { QueryRequest } from "./QueryRequest";

export interface RequeueQueryRequest {
  queueId?: string;
  queryRequest?: QueryRequest;
}

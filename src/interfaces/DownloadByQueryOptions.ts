import { ECLQueryRequest } from "./ECLQueryRequest";
import { QueryRequest } from "./QueryRequest";

export interface DownloadByQueryOptions {
  queryRequest?: QueryRequest;
  eclSearchRequest?: ECLQueryRequest;
  totalCount?: number;
  format?: string;
  includeDefinition?: boolean;
  includeCore?: boolean;
  includeLegacy?: boolean;
  includeSubsets?: boolean;
  subsetsOnOwnRow?: boolean;
  im1id?: boolean;
}

import { ECLStatus } from "./ECLStatus";
import { Query } from "./Query";
import { TTIriRef } from "./TTIriRef";

export interface ECLQueryRequest {
  ecl?: string;
  query?: Query;
  showNames?: boolean;
  status?: ECLStatus;
  includeLegacy?: boolean;
  limit?: number;
  statusFilter?: TTIriRef[];
  page?: number;
  size?: number;
}

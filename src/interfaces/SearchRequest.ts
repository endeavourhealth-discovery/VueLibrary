import { Filter } from "./Filter";
import { OrderBy } from "./OrderBy";
import { SearchBinding } from "./SearchBinding";

export interface SearchRequest {
  termFilter?: string;
  index?: string;
  statusFilter?: string[];
  typeFilter?: string[];
  schemeFilter?: string[];
  bindingFilter?: SearchBinding[];
  markIfDescendentOf?: string[];
  isA?: string[];
  memberOf?: string[];
  page?: number;
  size?: number;
  from?: number;
  select?: string[];
  orderBy?: OrderBy[];
  filter?: Filter[];
  timings?: { [index: string]: string }[];
}

import { SearchResultSummary } from "./SearchResultSummary";

export interface SearchResponse {
  page?: number;
  count?: number;
  totalCount?: number;
  highestUsage?: number;
  term?: string;
  entities?: SearchResultSummary[];
  exactMatch?: boolean;
}

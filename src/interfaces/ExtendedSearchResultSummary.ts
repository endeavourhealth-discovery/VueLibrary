import { SearchResultSummary } from "./SearchResultSummary";

export interface ExtendedSearchResultSummary extends SearchResultSummary {
  icon: string[];
  color: string;
  typeNames: string;
  favourite: boolean;
}

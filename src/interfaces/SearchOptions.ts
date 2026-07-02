import { FilterOptions } from "./FilterOptions";
import { Page } from "./Page";
import { SearchBinding } from "./SearchBinding";
import { TTIriRef } from "./TTIriRef";

export interface SearchOptions extends FilterOptions {
  isA?: TTIriRef[];
  binding?: SearchBinding[];
  page?: Page;
  textSearch?: string;
}

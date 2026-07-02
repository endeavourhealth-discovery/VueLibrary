import { TTIriRef } from "./TTIriRef";

export interface FilterOptions {
  status: TTIriRef[];
  schemes: TTIriRef[];
  types: TTIriRef[];
  typeSchemes?: Record<string, TTIriRef[]>;
}

import { TTIriRef } from "./TTIriRef";

export interface Filter {
  field?: string;
  iriValue?: TTIriRef[];
  and?: Filter[];
  not?: boolean;
  textValue?: string[];
  startsWithTerm?: boolean;
}

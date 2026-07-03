import { Order } from "@/enums";

import { TTIriRef } from "./TTIriRef";

export interface OrderBy {
  field?: string;
  direction?: Order;
  iriValue?: TTIriRef[];
  and?: OrderBy[];
  textValue?: string[];
  not?: boolean;
  startsWithTerm?: boolean;
}

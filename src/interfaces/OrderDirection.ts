import { Order } from "@/enums";

import { FunctionClause } from "./FunctionClause";
import { IriLD } from "./IriLD";

export interface OrderDirection extends IriLD {
  direction?: Order;
  function?: FunctionClause;
  nodeRef?: string;
  variable?: string;
}

import { Aggregate } from "@/enums";
import { Operator } from "@/enums";

import { Range } from "./Range";

export interface Having {
  function?: Aggregate;
  identifier?: string;
  range?: Range;
  operator?: Operator;
  value?: string;
  and?: Having[];
  or?: Having[];
  not?: boolean;
}

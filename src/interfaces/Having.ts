import { Aggregate } from "@/enums";
import { Operator } from "@/enums";

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

import { RuleAction } from "@/enums";
import { Entail } from "@/enums";

import { FunctionClause } from "./FunctionClause";
import { GroupBy } from "./GroupBy";
import { HasPaths } from "./HasPaths";
import { Having } from "./Having";
import { IriLD } from "./IriLD";
import { OrderLimit } from "./OrderLimit";
import { Returnable } from "./Returnable";
import { Where } from "./Where";

export interface Match extends IriLD, HasPaths, Returnable {
  notExists?: boolean;
  ifTrue?: RuleAction;
  ifFalse?: RuleAction;
  nodeRef?: string;
  typeOf?: Node;
  is?: Node;
  and?: Match[];
  or?: Match[];
  where?: Where;
  then?: Match;
  graph?: Node;
  optional?: boolean;
  parameter?: string;
  function?: FunctionClause;
  entailment?: Entail;
  baseRule?: boolean;
  ruleNumber?: number;
  inverse?: boolean;
  activeOnly?: boolean;
  rule?: Match[];
  any?: Match[];
  libraryItem?: string;
  invalid?: boolean;
  groupBy?: GroupBy[];
  orderBy?: OrderLimit;
  asDescription?: string;
  errorMessage?: string;
  draft?: boolean;
  having?: Having;
}

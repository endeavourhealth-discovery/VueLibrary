import { Operator } from "@/enums";

import { Compare } from "./Compare";
import { FunctionClause } from "./FunctionClause";
import { TTIriRef } from "./TTIriRef";

export interface Value {
  operator?: Operator;
  value?: string;
  valueLabel?: string;
  valueParameter?: string;
  function?: FunctionClause;
  description?: string;
  units?: TTIriRef;
  invalid?: boolean;
  valueTerm?: string;
  compare?: Compare;
}

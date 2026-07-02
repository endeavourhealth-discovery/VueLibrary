import { Argument } from "./Argument";
import { IriLD } from "./IriLD";

export interface FunctionClause extends IriLD {
  argument?: Argument[];
}

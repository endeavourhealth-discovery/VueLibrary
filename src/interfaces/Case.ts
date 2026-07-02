import { Expression } from "./Expression";
import { When } from "./When";

export interface Case {
  nodeRef?: string;
  when?: When[];
  else?: Expression;
}

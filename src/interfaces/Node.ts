import { Element } from "./Element";
import { Match } from "./Match";

export interface Node extends Element {
  parameter?: string;
  type?: string;
  qualifier?: string;
  match?: Match;
  childOrSelfOf?: boolean;
  childOf?: boolean;
  cohort?: boolean;
  nodeRef?: string;
  invalid?: boolean;
  resultSet?: boolean;
  exclude?: boolean;
  code?: string;
  inverse?: boolean;
  node?: string;
  isCohort?: boolean;
  isResultSet?: boolean;
}

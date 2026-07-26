import { Element } from "./Element";
import { Query } from "./Query";

export interface Node extends Element {
  parameter?: string;
  type?: string;
  qualifier?: string;
  match?: Query;
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

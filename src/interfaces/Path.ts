import { Element } from "./Element";
import { HasPaths } from "./HasPaths";
import { Node } from "./Node";
import { TTIriRef } from "./TTIriRef";

export interface Path extends Element, HasPaths {
  parameter?: string;
  childOrSelfOf?: boolean;
  childOf?: boolean;
  cohort?: boolean;
  nodeRef?: string;
  invalid?: boolean;
  resultSet?: boolean;
  inverse?: boolean;
  optional?: boolean;
  pathVariable?: string;
  typeOf?: Node;
  qualifier?: TTIriRef;
  isCohort?: boolean;
  isResultSet?: boolean;
}

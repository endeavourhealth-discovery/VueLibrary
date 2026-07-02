import { IriLD } from "./IriLD";

export interface Element extends IriLD {
  parameter?: string;
  ancestorsOf?: boolean;
  descendantsOrSelfOf?: boolean;
  memberOf?: boolean;
  descendantsOf?: boolean;
  childOrSelfOf?: boolean;
  childOf?: boolean;
  cohort?: boolean;
  nodeRef?: string;
  invalid?: boolean;
  resultSet?: boolean;
}

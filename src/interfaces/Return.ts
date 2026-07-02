import { Case } from "./Case";
import { FunctionClause } from "./FunctionClause";
import { TTIriRef } from "./TTIriRef";

export interface Return {
  iri?: string;
  name?: string;
  function?: FunctionClause;
  as?: string;
  nodeRef?: string;
  propertyRef?: string;
  pathRef?: string;
  inverse?: boolean;
  units?: TTIriRef;
  dataType?: TTIriRef;
  semanticMap?: TTIriRef;
  description?: string;
  value?: string;
  case?: Case;
  return?: Return[];
}

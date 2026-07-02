import { Entity } from "./Entity";
import { ParameterTemplate } from "./ParameterTemplate";
import { TTIriRef } from "./TTIriRef";

export interface FunctionTemplate extends Entity {
  function?: TTIriRef;
  parameterTemplate?: ParameterTemplate[];
}

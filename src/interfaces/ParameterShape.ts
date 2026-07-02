import { TTIriRef } from "./TTIriRef";

export interface ParameterShape {
  label?: string;
  type?: TTIriRef;
  parameterSubType?: TTIriRef[];
}

import { IriLD } from "./IriLD";

export interface GroupBy extends IriLD {
  nodeRef?: string;
  valueRef?: string;
  propertyRef?: string;
}

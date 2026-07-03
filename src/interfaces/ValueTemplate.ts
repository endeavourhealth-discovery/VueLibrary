import { Entity } from "./Entity";
import { TTIriRef } from "./TTIriRef";

export interface ValueTemplate extends Entity {
  label?: string;
  parameter?: string;
  order?: number;
  valueType?: TTIriRef;
  defaultValue?: any;
  valueOption?: any[];
}

import { Entity } from "./Entity";
import { ValueTemplate } from "./ValueTemplate";

export interface ParameterTemplate extends Entity {
  label?: string;
  order?: number;
  valueTemplate?: ValueTemplate[];
}

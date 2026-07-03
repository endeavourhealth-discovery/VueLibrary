import { ExtendedTTEntity } from "./ExtendedTTEntity";

export interface TTBundle {
  entity: ExtendedTTEntity;
  predicates: { [index: string]: string };
}

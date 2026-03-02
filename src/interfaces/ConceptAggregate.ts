import { ExtendedTTEntity } from "./ExtendedAutoGen";

export interface ConceptAggregate {
  children: ExtendedTTEntity[];
  concept: ExtendedTTEntity;
  parents: ExtendedTTEntity[];
}

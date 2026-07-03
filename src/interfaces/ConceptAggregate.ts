import { ExtendedTTEntity } from "./ExtendedTTEntity";

export interface ConceptAggregate {
  children: ExtendedTTEntity[];
  concept: ExtendedTTEntity;
  parents: ExtendedTTEntity[];
}

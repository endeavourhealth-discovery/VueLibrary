import { ExtendedTTEntity } from "./ExtendedTTEntity";

export interface ValidatedEntity extends ExtendedTTEntity {
  validationCode?: string;
  validationLabel?: string;
}

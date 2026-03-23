import { ExtendedTTEntity } from "../interfaces/ExtendedAutoGen";

export interface ValidatedEntity extends ExtendedTTEntity {
  validationCode?: string;
  validationLabel?: string;
}

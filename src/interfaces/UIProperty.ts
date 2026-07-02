import { TTIriRef } from "./TTIriRef";

export interface UIProperty {
  iri: string;
  name: string;
  propertyType: "class" | "datatype" | "node";
  valueType: string;
  maxCount: number;
  minCount: number;
  valueLabel: string;
  intervalUnitIri: string;
  intervalUnitOptions: TTIriRef[];
  unitIri: string;
  unitOptions: TTIriRef[];
  operatorIri: string;
  operatorOptions: string[];
  qualifierOptions: TTIriRef[];
  setMemberCount: number;
}

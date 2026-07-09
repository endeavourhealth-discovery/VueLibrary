// export interface UIProperty {
//   iri: string;
//   name: string;
//   propertyType: "class" | "datatype" | "node";
//   valueType: string;
//   maxCount: number;
//   minCount: number;
//   valueLabel: string;
//   intervalUnitIri: string;
//   intervalUnitOptions: TTIriRef[];
//   unitIri: string;
//   unitOptions: TTIriRef[];
//   operatorIri: string;
//   operatorOptions: string[];
//   qualifierOptions: TTIriRef[];
//   setMemberCount: number;
// }
import z from "zod";

import { TTIriRefSchema } from "./TTIriRef";

export const UIPropertySchema = z.strictObject({
  iri: z.string(),
  name: z.string(),
  propertyType: z.enum(["class", "datatype", "node"]),
  valueType: z.string(),
  maxCount: z.number(),
  minCount: z.number(),
  valueLabel: z.string(),
  intervalUnitIri: z.string(),
  intervalUnitOptions: z.array(TTIriRefSchema).prefault([]),
  unitIri: z.string(),
  unitOptions: z.array(TTIriRefSchema).prefault([]),
  operatorIri: z.string(),
  operatorOptions: z.array(z.string()).prefault([]),
  qualifierOptions: z.array(TTIriRefSchema).prefault([]),
  setMemberCount: z.number()
});

export type UIProperty = z.output<typeof UIPropertySchema>;

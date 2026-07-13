import z from "zod";

import { PropertyShapeSchema } from "./PropertyShape";
import { TTEntitySchema } from "./TTEntity";
import { TTIriRefSchema } from "./TTIriRef";

// export interface FormGenerator {
//   iri?: string;
//   status?: TTIriRef;
//   label?: string;
//   comment?: string;
//   targetShape?: TTIriRef;
//   type?: TTIriRef[];
//   isContainedIn?: TTEntity[];
//   subClassOf?: TTIriRef[];
//   scheme?: TTIriRef;
//   property?: PropertyShape[];
// }

export const FormGeneratorSchema = z.strictObject({
  iri: z.url().optional(),
  status: TTIriRefSchema.optional(),
  label: z.string().optional(),
  comment: z.string().optional(),
  targetShape: TTIriRefSchema.optional(),
  type: z.array(TTIriRefSchema).prefault([]),
  isContainedIn: z.array(TTEntitySchema).prefault([]),
  subClassOf: z.array(TTIriRefSchema).prefault([]),
  scheme: TTIriRefSchema.optional(),
  property: z.array(PropertyShapeSchema).prefault([])
});

export type FormGenerator = z.output<typeof FormGeneratorSchema>;

export function isFormGenerator(value: unknown): value is FormGenerator {
  return FormGeneratorSchema.safeParse(value).success;
}

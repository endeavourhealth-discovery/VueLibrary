import z from "zod";

import { GenericObjectSchema } from "./GenericObject";

// export interface CodeGenDto {
//   name?: string;
//   extension?: string;
//   collectionWrapper?: string;
//   datatypeMap?: { [index: string]: string };
//   template?: string;
//   complexTypes?: boolean;
// }

export const CodeGenSchema = z.strictObject({
  name: z.string(),
  extension: z.string(),
  collectionWrapper: z.string(),
  datatypeMap: GenericObjectSchema,
  template: z.string(),
  complexTypes: z.boolean().optional()
});

export type CodeGen = z.output<typeof CodeGenSchema>;

export function isCodeGen(value: unknown): value is CodeGen {
  return CodeGenSchema.safeParse(value).success;
}

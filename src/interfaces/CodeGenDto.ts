import z from "zod";

// export interface CodeGenDto {
//   name?: string;
//   extension?: string;
//   collectionWrapper?: string;
//   datatypeMap?: { [index: string]: string };
//   template?: string;
//   complexTypes?: boolean;
// }

export const CodeGenDtoSchema = z.strictObject({
  name: z.string().optional(),
  extension: z.string().optional(),
  collectionWrapper: z.string().optional(),
  datatypeMap: z.map(z.string(), z.string()).default(new Map()),
  template: z.string().optional(),
  complexTypes: z.boolean().default(false)
});

export type CodeGenDto = z.output<typeof CodeGenDtoSchema>;

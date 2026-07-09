import z from "zod";

// export interface SubQueryDependency {
//   iri?: string;
//   label?: string;
//   depth?: number;
// }

export const SubQueryDependencySchema = z.strictObject({
  iri: z.url().optional(),
  label: z.string().optional(),
  depth: z.number().optional()
});

export type SubQueryDependency = z.output<typeof SubQueryDependencySchema>;

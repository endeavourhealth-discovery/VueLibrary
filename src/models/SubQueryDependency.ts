import z from "zod";

// export interface SubQueryDependency {
//   iri?: string;
//   label?: string;
//   depth?: number;
//   parentIris?: string[] | null;
// }

export const SubQueryDependencySchema = z.strictObject({
  iri: z.url().optional(),
  label: z.string().optional(),
  depth: z.number().optional(),
  parentIris: z.array(z.string()).nullish()
});

export type SubQueryDependency = z.output<typeof SubQueryDependencySchema>;

export function isSubQueryDependency(value: unknown): value is SubQueryDependency {
  return SubQueryDependencySchema.safeParse(value).success;
}

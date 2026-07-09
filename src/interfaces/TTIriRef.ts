import z from "zod";

export const TTIriRefSchema = z.strictObject({
  iri: z.string(),
  name: z.string().optional(),
  description: z.string().optional()
});

export type TTIriRef = z.output<typeof TTIriRefSchema>;

import z from "zod";

export const TTIriRefSchema = z.strictObject({
  iri: z.url(),
  name: z.string().optional(),
  description: z.string().optional()
});

export type TTIriRef = z.output<typeof TTIriRefSchema>;

export function isTTIriRef(value: unknown): value is TTIriRef {
  return TTIriRefSchema.safeParse(value).success;
}

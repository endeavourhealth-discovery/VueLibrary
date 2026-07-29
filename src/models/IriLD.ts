import z from "zod";

export const IriLDSchema = z.strictObject({
  iri: z.url().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  uuid: z.uuid().optional()
});

export type IriLD = z.output<typeof IriLDSchema>;

export function isIriLD(value: unknown): value is IriLD {
  return IriLDSchema.safeParse(value).success;
}

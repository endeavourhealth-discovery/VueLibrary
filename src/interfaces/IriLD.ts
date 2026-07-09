import z from "zod";

export const IriLDSchema = z.strictObject({
  iri: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  uuid: z.uuid()
});

export type IriLD = z.output<typeof IriLDSchema>;

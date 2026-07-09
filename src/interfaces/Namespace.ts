import z from "zod";

// export interface Namespace {
//   iri: string;
//   name: string;
//   prefix: string;
// }

export const NamespaceSchema = z.strictObject({
  iri: z.string(),
  name: z.string(),
  prefix: z.string()
});

export type Namespace = z.output<typeof NamespaceSchema>;

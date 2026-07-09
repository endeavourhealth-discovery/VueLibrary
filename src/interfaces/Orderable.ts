import z from "zod";

// export interface Orderable {
//   iri: string;
//   name?: string;
//   ascending: string;
//   descending: string;
// }

export const OrderableSchema = z.strictObject({
  iri: z.url(),
  name: z.string().optional(),
  ascending: z.string(),
  descending: z.string()
});

export type Orderable = z.output<typeof OrderableSchema>;

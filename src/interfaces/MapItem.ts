import z from "zod";

// export interface MapItem {
//   assuranceLevel: string;
//   iri: string;
//   name: string;
//   priority: number;
// }

export const MapItemSchema = z.strictObject({
  assuranceLevel: z.string(),
  iri: z.url(),
  name: z.string(),
  priority: z.number()
});

export type MapItem = z.output<typeof MapItemSchema>;

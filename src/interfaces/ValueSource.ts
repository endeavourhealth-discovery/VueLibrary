import z from "zod";

// export interface ValueSource {
//   parameter?: string;
//   iri?: string;
//   name?: string;
//   nodeRef?: string;
//   propertyRef?: string;
// }

export const ValueSourceSchema = z.strictObject({
  parameter: z.string().optional(),
  iri: z.string().optional(),
  name: z.string().optional(),
  nodeRef: z.string().optional(),
  propertyRef: z.string().optional()
});

export type ValueSource = z.output<typeof ValueSourceSchema>;

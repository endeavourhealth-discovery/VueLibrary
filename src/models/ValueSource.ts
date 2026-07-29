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
  iri: z.url().optional(),
  name: z.string().optional(),
  nodeRef: z.string().optional(),
  propertyRef: z.string().optional()
});

export type ValueSource = z.output<typeof ValueSourceSchema>;

export function isValueSource(value: unknown): value is ValueSource {
  return ValueSourceSchema.safeParse(value).success;
}

import z from "zod";

// export interface Expression {
//   value?: string;
//   nodeRef?: string;
//   iri?: string;
//   propertyRef?: string;
// }

export const ExpressionSchema = z.strictObject({
  value: z.string().optional(),
  nodeRef: z.string().optional(),
  iri: z.string().optional(),
  propertyRef: z.string().optional()
});

export type Expression = z.output<typeof ExpressionSchema>;

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
  iri: z.url().optional(),
  propertyRef: z.string().optional()
});

export type Expression = z.output<typeof ExpressionSchema>;

export function isExpression(value: unknown): value is Expression {
  return ExpressionSchema.safeParse(value).success;
}

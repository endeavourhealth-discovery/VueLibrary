import z from "zod";

// export interface QueryResponse {
//   entities: any[];
//   context: any;
// }

export const QueryResponseSchema = z.strictObject({
  entities: z.array(z.any()),
  context: z.any()
});

export type QueryResponse = z.output<typeof QueryResponseSchema>;

import z from "zod";

// export interface Page {
//   pageNumber?: number;
//   pageSize?: number;
//   offset?: number;
// }

export const PageSchema = z.strictObject({
  pageNumber: z.number().default(1),
  pageSize: z.number().default(20),
  offset: z.number().default(0)
});

export type Page = z.output<typeof PageSchema>;

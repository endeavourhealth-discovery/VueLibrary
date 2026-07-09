import z from "zod";

// export interface Pageable<T> {
//   totalCount?: number;
//   currentPage?: number;
//   pageSize?: number;
//   result?: T[];
// }

export const PageableSchema = <T extends z.ZodType>(itemSchema: T) =>
  z.strictObject({
    totalCount: z.number().default(0),
    currentPage: z.number().default(1),
    pageSize: z.number().default(25),
    result: z.array(itemSchema).prefault([])
  });

export type Pageable<T> = z.output<typeof PageableSchema>;

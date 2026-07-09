import z from "zod";

// export interface ChartTableNode {
//   key: string;
//   type: string;
//   data: any;
// }

export const ChartTableNodeSchema = z.strictObject({
  key: z.string(),
  type: z.string(),
  data: z.any()
});
export type ChartTableNode = z.output<typeof ChartTableNodeSchema>;

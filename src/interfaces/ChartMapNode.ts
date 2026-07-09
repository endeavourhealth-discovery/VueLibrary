import z from "zod";

// export interface ChartMapNode {
//   key: string;
//   type: string;
//   data: { label: string };
//   children: any[];
// }

export const ChartMapNodeSchema = z.strictObject({
  key: z.string(),
  type: z.string(),
  data: z.strictObject({ label: z.string() }),
  children: z.array(z.any())
});

export type ChartMapNode = z.output<typeof ChartMapNodeSchema>;

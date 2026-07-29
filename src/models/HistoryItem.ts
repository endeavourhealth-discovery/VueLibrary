import z from "zod";

// export interface HistoryItem {
//   url: string;
//   conceptName: string;
//   view: string;
// }

export const HistoryItemSchema = z.strictObject({
  url: z.url(),
  conceptName: z.string(),
  view: z.string()
});

export type HistoryItem = z.output<typeof HistoryItemSchema>;

export function isHistoryItem(value: unknown): value is HistoryItem {
  return HistoryItemSchema.safeParse(value).success;
}

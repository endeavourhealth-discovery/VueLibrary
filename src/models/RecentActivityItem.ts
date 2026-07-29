import { z } from "zod";

export const RecentActivityItemSchema = z.object({
  iri: z.url(),
  dateTime: z.coerce.date(),
  action: z.string().prefault("")
});

export type RecentActivityItem = z.output<typeof RecentActivityItemSchema>;

export function isRecentActivityItem(value: unknown): value is RecentActivityItem {
  return RecentActivityItemSchema.safeParse(value).success;
}

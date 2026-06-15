import { z } from "zod";

export const RecentActivityItemSchema = z.object({
  iri: z.string(),
  dateTime: z.coerce.date(),
  action: z.string().prefault("")
});

export type RecentActivityItem = z.output<typeof RecentActivityItemSchema>;

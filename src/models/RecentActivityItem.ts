import { array, date, object, optional, type output, preprocess, string } from "zod/v4";

export const RecentActivityItemSchema = object({
  iri: string(),
  dateTime: preprocess(val => (typeof val === "number" || typeof val === "string" ? new Date(val) : val), date()),
  action: string().prefault("")
});

export type RecentActivityItem = output<typeof RecentActivityItemSchema>;

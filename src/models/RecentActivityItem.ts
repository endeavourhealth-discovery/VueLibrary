import { array, date, object, optional, type output, preprocess, string } from "zod/v4";

export const RecentActivityItemSchema = object({
  iri: string(),
  dateTime: preprocess(val => {
    if (typeof val === "number" || typeof val === "string") {
      const d = new Date(val);
      return isNaN(d.getTime()) ? val : d;
    }
    return val;
  }, date()),
  action: string().prefault("")
});

export type RecentActivityItem = output<typeof RecentActivityItemSchema>;

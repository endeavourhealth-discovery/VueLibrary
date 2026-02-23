import {
  array,
  optional,
  date,
  object,
  preprocess,
  type output,
  string,
} from "zod/v4";

export const RecentActivityItemSchema = object({
  iri: string(),
  dateTime: preprocess(
    (val) => (typeof val === "number" ? new Date(val) : val),
    date(),
  ),
  action: string().prefault(""),
});

export type RecentActivityItem = output<typeof RecentActivityItemSchema>;

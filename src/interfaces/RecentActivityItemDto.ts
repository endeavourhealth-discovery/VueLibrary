import z from "zod";

// export interface RecentActivityItemDto {
//   iri?: string;
//   dateTime?: Date;
//   action?: string;
// }

export const RecentActivityItemDtoSchema = z.strictObject({
  iri: z.string().optional(),
  dateTime: z.date().optional(),
  action: z.string().optional()
});

export type RecentActivityItemDto = z.output<typeof RecentActivityItemDtoSchema>;

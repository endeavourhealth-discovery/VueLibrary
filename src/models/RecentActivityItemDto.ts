import z from "zod";

// export interface RecentActivityItemDto {
//   iri?: string;
//   dateTime?: Date;
//   action?: string;
// }

export const RecentActivityItemDtoSchema = z.strictObject({
  iri: z.url().optional(),
  dateTime: z.date().optional(),
  action: z.string().optional()
});

export type RecentActivityItemDto = z.output<typeof RecentActivityItemDtoSchema>;

export function isRecentActivityItemDto(value: unknown): value is RecentActivityItemDto {
  return RecentActivityItemDtoSchema.safeParse(value).success;
}

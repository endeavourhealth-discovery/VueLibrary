import z from "zod";

// export interface ValidatedEntitiesRequest {
//   snomedCodes?: string[];
// }

export const ValidatedEntitiesRequestSchema = z.strictObject({
  snomedCodes: z.array(z.url()).prefault([])
});

export type ValidatedEntitiesRequest = z.output<typeof ValidatedEntitiesRequestSchema>;

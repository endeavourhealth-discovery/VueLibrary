import z from "zod";

// export interface ValidatedEntitiesRequest {
//   snomedCodes?: string[];
// }

export const ValidatedEntitiesRequestSchema = z.strictObject({
  snomedCodes: z.array(z.url()).prefault([])
});

export type ValidatedEntitiesRequest = z.output<typeof ValidatedEntitiesRequestSchema>;

export function isValidatedEntitiesRequest(value: unknown): value is ValidatedEntitiesRequest {
  return ValidatedEntitiesRequestSchema.safeParse(value).success;
}

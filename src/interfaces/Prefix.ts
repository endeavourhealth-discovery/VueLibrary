import z from "zod";

// export interface Prefix {
//   prefix?: string;
//   namespace?: string;
// }

export const PrefixSchema = z.strictObject({
  prefix: z.string().optional(),
  namespace: z.string().optional()
});

export type Prefix = z.output<typeof PrefixSchema>;

import z from "zod";

import { SetOptionsSchema } from "./SetOptions";

// export interface SetExportRequest {
//   ownRow?: boolean;
//   format?: string;
//   options?: SetOptions;
// }

export const SetExportRequestSchema = z.strictObject({
  ownRow: z.boolean().default(false),
  format: z.string().optional(),
  options: SetOptionsSchema.optional()
});

export type SetExportRequest = z.output<typeof SetExportRequestSchema>;

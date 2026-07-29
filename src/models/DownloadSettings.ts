// export interface DownloadSettings {
//   selectedFormat: string;
//   selectedContents: string[];
//   selectedSchemes: TTIriRef[];
//   includeSubsets: boolean;
//   legacyInline: boolean;
// }
import z from "zod";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

export const DownloadSettingsSchema = z.strictObject({
  selectedFormat: z.string(),
  selectedContents: z.array(z.string()).optional(),
  selectedSchemes: z.array(TTIriRefSchema).optional(),
  includeSubsets: z.boolean().optional(),
  legacyInline: z.boolean().optional()
});

export type DownloadSettings = z.output<typeof DownloadSettingsSchema>;

export function isDownloadSettings(value: unknown): value is DownloadSettings {
  return DownloadSettingsSchema.safeParse(value).success;
}

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
  selectedContents: z.array(z.string()).prefault([]),
  selectedSchemes: z.array(TTIriRefSchema).prefault([]),
  includeSubsets: z.boolean().default(false),
  legacyInline: z.boolean().default(false)
});

export type DownloadSettings = z.output<typeof DownloadSettingsSchema>;

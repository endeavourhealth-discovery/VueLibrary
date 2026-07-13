import z from "zod";

// export interface IMLLanguage {
//   text?: string;
//   lang?: string;
//   info?: { [index: string]: string };
//   definitions?: { [index: string]: string };
//   prefixes?: { [index: string]: string };
//   keywords?: string[];
//   booleans?: string[];
//   alerts?: string[];
//   iriVariables?: { [index: string]: string[] };
// }

export const IMLLanguageSchema = z.strictObject({
  text: z.string().optional(),
  lang: z.string().optional(),
  info: z.record(z.string(), z.string()).optional(),
  definitions: z.record(z.string(), z.string()).optional(),
  prefixes: z.record(z.string(), z.string()).optional(),
  keywords: z.array(z.string()).prefault([]),
  booleans: z.array(z.string()).prefault([]),
  alerts: z.array(z.string()).prefault([]),
  iriVariables: z.record(z.string(), z.array(z.string()).prefault([])).optional()
});

export type IMLLanguage = z.output<typeof IMLLanguageSchema>;

export function isIMLLanguage(value: unknown): value is IMLLanguage {
  return IMLLanguageSchema.safeParse(value).success;
}

import z from "zod";

export const GithubReleaseSchema = z.strictObject({
  version: z.string(),
  title: z.string(),
  createdDate: z.coerce.date(),
  publishedDate: z.coerce.date(),
  releaseNotes: z.array(z.string()),
  author: z.string(),
  url: z.url().optional()
});

export type GithubRelease = z.output<typeof GithubReleaseSchema>;

export function isGithubRelease(value: unknown): value is GithubRelease {
  return GithubReleaseSchema.safeParse(value).success;
}

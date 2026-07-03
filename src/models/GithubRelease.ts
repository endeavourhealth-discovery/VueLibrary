import z from "zod";

export const GithubReleaseSchema = z.object({
  version: z.string(),
  title: z.string(),
  createdDate: z.date(),
  publishedDate: z.date(),
  releaseNotes: z.array(z.string()),
  author: z.string(),
  url: z.url()
});

export type GithubRelease = z.output<typeof GithubReleaseSchema>;

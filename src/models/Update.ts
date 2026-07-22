import z from "zod";

import { Delete, DeleteSchema } from "./Delete";
import { Match, MatchSchema } from "./Match";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface Update extends TTIriRef {
//   match?: Match[];
//   delete?: Delete[];
// }

export const UpdateSchema = TTIriRefSchema.extend({
  match: z.array(MatchSchema).optional(),
  delete: z.array(DeleteSchema).optional()
});

export type Update = z.output<typeof UpdateSchema>;

export function isUpdate(value: unknown): value is Update {
  return UpdateSchema.safeParse(value).success;
}

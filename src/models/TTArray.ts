import z from "zod";

import { TTEntitySchema } from "./TTEntity";

// export interface TTArray {
//   elements?: TTValue[];
//   list?: boolean;
// }

export const TTArraySchema = z.array(z.unknown()).prefault([]);

export type TTArray = z.output<typeof TTArraySchema>;

export function isTTArray(value: unknown): value is TTArray {
  return TTArraySchema.safeParse(value).success;
}

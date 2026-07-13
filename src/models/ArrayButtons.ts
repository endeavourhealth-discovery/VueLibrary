import z from "zod";

// export interface ArrayButtons {
//   up?: boolean;
//   down?: boolean;
//   plus?: boolean;
//   minus?: boolean;
//   addOnlyIfLast?: boolean;
// }

export const ArrayButtonsSchema = z.strictObject({
  up: z.boolean().default(false),
  down: z.boolean().default(false),
  plus: z.boolean().default(false),
  minus: z.boolean().default(false),
  addOnlyIfLast: z.boolean().default(false)
});

export type ArrayButtons = z.output<typeof ArrayButtonsSchema>;

export function isArrayButtons(value: unknown): value is ArrayButtons {
  return ArrayButtonsSchema.safeParse(value).success;
}

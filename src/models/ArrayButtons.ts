import z from "zod";

// export interface ArrayButtons {
//   up?: boolean;
//   down?: boolean;
//   plus?: boolean;
//   minus?: boolean;
//   addOnlyIfLast?: boolean;
// }

export const ArrayButtonsSchema = z.strictObject({
  up: z.boolean().optional(),
  down: z.boolean().optional(),
  plus: z.boolean().optional(),
  minus: z.boolean().optional(),
  addOnlyIfLast: z.boolean().optional()
});

export type ArrayButtons = z.output<typeof ArrayButtonsSchema>;

export function isArrayButtons(value: unknown): value is ArrayButtons {
  return ArrayButtonsSchema.safeParse(value).success;
}

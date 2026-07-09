import z from "zod";

import { Aggregate } from "@/enums";
import { Operator } from "@/enums";

import { Range, RangeSchema } from "./Range";

// export interface Having {
//   function?: Aggregate;
//   identifier?: string;
//   range?: Range;
//   operator?: Operator;
//   value?: string;
//   and?: Having[];
//   or?: Having[];
//   not?: boolean;
// }

export const HavingSchema = z.strictObject({
  function: z.enum(Aggregate).optional(),
  ideintifier: z.string().optional(),
  range: RangeSchema.optional(),
  operator: z.enum(Operator).optional(),
  value: z.string().optional(),
  get and() {
    return z.array(HavingSchema);
  },
  get or() {
    return z.array(HavingSchema);
  },
  not: z.boolean().default(false)
});

export type Having = z.output<typeof HavingSchema>;

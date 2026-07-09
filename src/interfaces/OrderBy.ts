import z from "zod";

import { Order } from "@/enums";

import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface OrderBy {
//   field?: string;
//   direction?: Order;
//   iriValue?: TTIriRef[];
//   and?: OrderBy[];
//   textValue?: string[];
//   not?: boolean;
//   startsWithTerm?: boolean;
// }

export const OrderBySchema = z.strictObject({
  field: z.string().optional(),
  direction: z.enum(Order).optional(),
  iriValue: z.array(TTIriRefSchema).prefault([]),
  get and(): z.ZodPrefault<z.ZodArray<typeof OrderBySchema>> {
    return z.array(OrderBySchema).prefault([]);
  },
  textValue: z.array(z.string()).prefault([]),
  not: z.boolean().default(false),
  startWithTerm: z.boolean().default(false)
});

export type OrderBy = z.output<typeof OrderBySchema>;

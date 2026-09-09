import z from "zod";

import { OrderDirectionSchema } from "./OrderDirection";

// export interface OrderLimit {
//   property?: OrderDirection[];
//   limit?: number;
//   description?: string;
// }

export const OrderLimitSchema = z.strictObject({
  property: z.array(OrderDirectionSchema).optional(),
  limit: z.number().optional(),
  description: z.string().optional()
});

export type OrderLimit = z.output<typeof OrderLimitSchema>;

export function isOrderLimit(value: unknown): value is OrderLimit {
  return OrderLimitSchema.safeParse(value).success;
}

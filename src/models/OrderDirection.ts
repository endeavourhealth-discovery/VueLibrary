import z from "zod";

import { Order } from "@/enums";

import { FunctionClause, FunctionClauseSchema } from "./FunctionClause";
import { IriLD, IriLDSchema } from "./IriLD";

// export interface OrderDirection extends IriLD {
//   direction?: Order;
//   function?: FunctionClause;
//   nodeRef?: string;
//   variable?: string;
// }

export const OrderDirectionSchema = z.strictObject({
  ...IriLDSchema.shape,
  direction: z.enum(Order).optional(),
  function: FunctionClauseSchema,
  nodeRef: z.string().optional(),
  variable: z.string().optional()
});

export type OrderDirection = z.output<typeof OrderDirectionSchema>;

export function isOrderDirection(value: unknown): value is OrderDirection {
  return OrderDirectionSchema.safeParse(value).success;
}

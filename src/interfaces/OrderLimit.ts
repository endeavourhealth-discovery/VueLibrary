import { OrderDirection } from "./OrderDirection";

export interface OrderLimit {
  property?: OrderDirection[];
  limit?: number;
  description?: string;
}

import { Expression } from "./Expression";
import { Where } from "./Where";

export interface When extends Where {
  then?: Expression;
}

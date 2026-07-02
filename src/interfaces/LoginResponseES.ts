import { UserJava } from "./UserJava";

export interface LoginResponseES {
  sessionId?: string;
  user?: UserJava;
  state?: string;
}

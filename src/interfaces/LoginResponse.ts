import { UserJava } from "./UserJava";

export interface LoginResponse {
  user?: UserJava;
  state?: string;
}

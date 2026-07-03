import { UserRole } from "@/enums";

import { Task } from "./Task";

export interface RoleRequest extends Task {
  role?: UserRole;
}

import z from "zod";

import { UserRole } from "@/enums";

import { Task, TaskSchema } from "./Task";

// export interface RoleRequest extends Task {
//   role?: UserRole;
// }

export const RoleRequestSchema = TaskSchema.extend({
  role: z.enum(UserRole)
});

export type RoleRequest = z.output<typeof RoleRequestSchema>;

export function isRoleRequest(value: unknown): value is RoleRequest {
  return RoleRequestSchema.safeParse(value).success;
}

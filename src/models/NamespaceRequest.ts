import z from "zod";

import { NamespacePermissionJava, NamespacePermissionJavaSchema } from "./NamespacePermissionJava";
import { Task, TaskSchema } from "./Task";

// export interface NamespaceRequest extends Task {
//   namespacePermission?: NamespacePermissionJava;
// }

export const NamespaceRequestSchema = z.strictObject({
  ...TaskSchema.shape,
  namespacePermission: NamespacePermissionJavaSchema.optional()
});

export type NamespaceRequest = z.output<typeof NamespaceRequestSchema>;

export function isNamespaceRequest(value: unknown): value is NamespaceRequest {
  return NamespaceRequestSchema.safeParse(value).success;
}

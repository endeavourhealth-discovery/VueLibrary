import { NamespacePermissionJava } from "./NamespacePermissionJava";
import { Task } from "./Task";

export interface NamespaceRequest extends Task {
  namespacePermission?: NamespacePermissionJava;
}

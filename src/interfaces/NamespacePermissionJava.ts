import { NAMESPACE } from "@/enums";

export interface NamespacePermissionJava {
  iri?: NAMESPACE;
  read?: boolean;
  write?: boolean;
}

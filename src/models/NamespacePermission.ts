import { array, optional, date, object, enum as zenum, type output, string, boolean } from "zod/v4";
import { Namespace } from "@/interfaces/AutoGen";

export const NamespacePermissionSchema = object({
  iri: zenum(Namespace),
  read: boolean(),
  write: boolean()
});

export type NamespacePermission = output<typeof NamespacePermissionSchema>;

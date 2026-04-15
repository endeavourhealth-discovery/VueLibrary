import { array, boolean, date, object, optional, type output, string, enum as zenum } from "zod/v4";

import { NAMESPACE } from "../enums";

export const NamespacePermissionSchema = object({
  iri: zenum(NAMESPACE),
  read: boolean(),
  write: boolean()
});

export type NamespacePermission = output<typeof NamespacePermissionSchema>;

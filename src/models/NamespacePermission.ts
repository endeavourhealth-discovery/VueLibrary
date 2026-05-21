import { z } from "zod";

import { NAMESPACE } from "../enums";

export const NamespacePermissionSchema = z.object({
  iri: z.enum(NAMESPACE),
  read: z.boolean(),
  write: z.boolean()
});

export type NamespacePermission = z.output<typeof NamespacePermissionSchema>;

import { z } from "zod";

import { NAMESPACE } from "../enums";

export const NamespacePermissionSchema = z.strictObject({
  iri: z.enum(NAMESPACE),
  read: z.boolean(),
  write: z.boolean()
});

export type NamespacePermission = z.output<typeof NamespacePermissionSchema>;

export function isNamespacePermission(value: unknown): value is NamespacePermission {
  return NamespacePermissionSchema.safeParse(value).success;
}

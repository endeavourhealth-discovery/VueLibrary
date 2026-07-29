import z from "zod";

import { NAMESPACE } from "@/enums";

// export interface NamespacePermissionJava {
//   iri?: NAMESPACE;
//   read?: boolean;
//   write?: boolean;
// }

export const NamespacePermissionJavaSchema = z.strictObject({
  iri: z.enum(NAMESPACE),
  read: z.boolean().optional(),
  write: z.boolean().optional()
});

export type NamespacePermissionJava = z.output<typeof NamespacePermissionJavaSchema>;

export function isNamespacePermissionJava(value: unknown): value is NamespacePermissionJava {
  return NamespacePermissionJavaSchema.safeParse(value).success;
}

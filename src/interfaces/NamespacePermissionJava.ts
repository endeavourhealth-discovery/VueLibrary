import z from "zod";

import { NAMESPACE } from "@/enums";

// export interface NamespacePermissionJava {
//   iri?: NAMESPACE;
//   read?: boolean;
//   write?: boolean;
// }

export const NamespacePermissionJavaSchema = z.strictObject({
  iri: z.enum(NAMESPACE),
  read: z.boolean().default(false),
  write: z.boolean().default(false)
});

export type NamespacePermissionJava = z.output<typeof NamespacePermissionJavaSchema>;

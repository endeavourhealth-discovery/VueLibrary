import { z } from "zod";

import { UserRole } from "../enums";
import Resource from "../enums/Resource";
import { NamespacePermissionSchema } from "./NamespacePermission";

export const PermissionSchema = z.object({
  resource: z.enum(Resource),
  allowableRoles: z.array(z.enum(UserRole)).prefault([]),
  requiredNamespaces: z.array(NamespacePermissionSchema).prefault([])
});

export type Permission = z.output<typeof PermissionSchema>;

export function isPermission(value: unknown): value is Permission {
  return PermissionSchema.safeParse(value).success;
}

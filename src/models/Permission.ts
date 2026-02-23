import { array, optional, date, object, enum as zenum, type output, string } from "zod/v4";
import Resource from "@/enums/Resource";
import { NamespacePermissionSchema } from "./NamespacePermission";
import { UserRole } from "@/interfaces/AutoGen";

export const PermissionSchema = object({
  resource: zenum(Resource),
  allowableRoles: array(zenum(UserRole)).prefault([]),
  requiredNamespaces: array(NamespacePermissionSchema).prefault([])
});

export type Permission = output<typeof PermissionSchema>;

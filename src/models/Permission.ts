import { array, date, object, optional, type output, string, enum as zenum } from "zod/v4";

import { UserRole } from "../enums";
import Resource from "../enums/Resource";
import { NamespacePermissionSchema } from "./NamespacePermission";

export const PermissionSchema = object({
  resource: zenum(Resource),
  allowableRoles: array(zenum(UserRole)).prefault([]),
  requiredNamespaces: array(NamespacePermissionSchema).prefault([])
});

export type Permission = output<typeof PermissionSchema>;

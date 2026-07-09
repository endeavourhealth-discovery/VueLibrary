import z from "zod";

import { OrgRoleSchema } from "./OrgRole";

// export interface OrgRoles {
//   Role?: OrgRole[];
// }

export const OrgRolesSchema = z.strictObject({
  role: z.array(OrgRoleSchema).prefault([])
});

export type OrgRoles = z.output<typeof OrgRoleSchema>;

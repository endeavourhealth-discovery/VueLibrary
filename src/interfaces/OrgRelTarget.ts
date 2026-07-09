import z from "zod";

import { OrgId, OrgIdSchema } from "./OrgId";

// export interface OrgRelTarget {
//   OrgId?: OrgId;
// }

export const OrgRelTargetSchema = z.strictObject({
  orgId: OrgIdSchema.optional()
});

export type OrgRelTarget = z.output<typeof OrgRelTargetSchema>;

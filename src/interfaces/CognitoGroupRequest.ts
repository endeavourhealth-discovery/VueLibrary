import z from "zod";

import { UserRole } from "@/enums";

// export interface CognitoGroupRequest {
//   username?: string;
//   groupName?: UserRole;
// }

export const CognitoGroupRequestSchema = z.strictObject({
  username: z.string(),
  groupName: z.enum(UserRole)
});

export type CognitoGroupRequest = z.output<typeof CognitoGroupRequestSchema>;

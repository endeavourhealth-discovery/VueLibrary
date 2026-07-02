import { UserRole } from "@/enums";

export interface CognitoGroupRequest {
  username?: string;
  groupName?: UserRole;
}

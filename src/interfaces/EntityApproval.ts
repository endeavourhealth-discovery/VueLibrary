import { ApprovalType } from "@/enums";

import { TTIriRef } from "./TTIriRef";
import { Task } from "./Task";

export interface EntityApproval extends Task {
  entityIri?: TTIriRef;
  approvalType?: ApprovalType;
}

import z from "zod";

import { ApprovalType } from "@/enums";

import { TTIriRefSchema } from "./TTIriRef";
import { TaskSchema } from "./Task";

// export interface EntityApproval extends Task {
//   entityIri?: TTIriRef;
//   approvalType?: ApprovalType;
// }

export const EntityApprovalSchema = z.strictObject({
  ...TaskSchema.shape,
  entityIri: TTIriRefSchema.optional(),
  approvalType: z.enum(ApprovalType).optional()
});

export type EntityApproval = z.output<typeof EntityApprovalSchema>;

export function isEntityApproval(value: unknown): value is EntityApproval {
  return EntityApprovalSchema.safeParse(value).success;
}

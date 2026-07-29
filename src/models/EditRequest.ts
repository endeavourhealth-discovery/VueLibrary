import z from "zod";

import { NAMESPACE } from "@/enums";

import { TTEntitySchema } from "./TTEntity";

// export interface EditRequest {
//   entity?: TTEntity;
//   hostUrl?: string;
//   namespace?: NAMESPACE;
//   crud?: string;
// }

export const EditRequestSchema = z.strictObject({
  entity: TTEntitySchema.optional(),
  hostUrl: z.string().optional(),
  namespace: z.enum(NAMESPACE).optional(),
  crud: z.string().optional()
});

export type EditRequest = z.output<typeof EditRequestSchema>;

export function isEditRequest(value: unknown): value is EditRequest {
  return EditRequestSchema.safeParse(value).success;
}

import z from "zod";

import { OrgGeoLocationSchema } from "./OrgGeoLocation";
import { OrgRelationship } from "./OrgRelationship";

// export interface OrgRelationships {
//   Rel?: OrgRelationship[];
// }

export const OrgRelationshipsSchema = z.strictObject({
  rel: z.array(OrgGeoLocationSchema).prefault([])
});

export type OrgRelationships = z.output<typeof OrgRelationshipsSchema>;

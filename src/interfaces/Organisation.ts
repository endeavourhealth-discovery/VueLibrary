import { OrgGeoLocation } from "./OrgGeoLocation";
import { OrgId } from "./OrgId";
import { OrgRelationships } from "./OrgRelationships";
import { OrgRoles } from "./OrgRoles";

export interface Organisation {
  Name?: string;
  OrgId?: OrgId;
  Status?: string;
  orgRecordClass?: string;
  GeoLoc?: OrgGeoLocation;
  Roles?: OrgRoles;
  Rels?: OrgRelationships;
}

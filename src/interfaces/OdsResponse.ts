import { OrgRole } from "./OrgRole";
import { Organisation } from "./Organisation";

export interface OdsResponse {
  Organisation?: Organisation;
  Roles?: OrgRole[];
}

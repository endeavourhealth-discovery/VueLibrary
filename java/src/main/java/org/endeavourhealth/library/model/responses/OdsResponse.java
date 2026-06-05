package org.endeavourhealth.library.model.responses;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.endeavourhealth.library.model.ods.OrgRole;
import org.endeavourhealth.library.model.ods.Organisation;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class OdsResponse {
  private Organisation organisation;
  private List<OrgRole> roles;

  @JsonProperty("Organisation")
  public Organisation getOrganisation() {
    return organisation;
  }

  public OdsResponse setOrganisation(Organisation organisation) {
    this.organisation = organisation;
    return this;
  }

  @JsonProperty("Roles")
  public List<OrgRole> getRoles() {
    return roles;
  }

  public OdsResponse setRoles(List<OrgRole> roles) {
    this.roles = roles;
    return this;
  }
}

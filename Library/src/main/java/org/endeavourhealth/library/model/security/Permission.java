package org.endeavourhealth.library.model.security;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.endeavourhealth.library.model.security.NamespacePermission;
import org.endeavourhealth.library.model.security.Resource;
import org.endeavourhealth.library.model.workflow.roleRequest.UserRole;

@Getter
@Setter
@NoArgsConstructor
public class Permission {

  private Resource resource;
  private List<UserRole> allowableRoles;
  private List<NamespacePermission> requiredNamespaces;

  public Permission(Resource resource, List<UserRole> allowableRoles, List<NamespacePermission> requiredNamespaces) {
    this.resource = resource;
    this.allowableRoles = allowableRoles;
    this.requiredNamespaces = requiredNamespaces;
  }
}

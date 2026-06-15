package org.endeavourhealth.library.model.security;

import lombok.Getter;
import lombok.Setter;
import org.endeavourhealth.library.model.workflow.roleRequest.UserRole;

@Getter
@Setter
public class PolicyRequest {

  private UserRole userRole;
  private Resource resource;
  private Action action;
}

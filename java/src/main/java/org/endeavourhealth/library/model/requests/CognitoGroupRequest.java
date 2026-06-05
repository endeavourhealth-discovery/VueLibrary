package org.endeavourhealth.library.model.requests;

import lombok.Getter;
import lombok.Setter;
import org.endeavourhealth.library.model.workflow.roleRequest.UserRole;

@Getter
@Setter
public class CognitoGroupRequest {
  private String username;
  private UserRole groupName;
}

package org.endeavourhealth.library.model.workflow;

import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;
import org.endeavourhealth.library.model.tripletree.TTIriRef;
import org.endeavourhealth.library.model.workflow.roleRequest.UserRole;
import org.endeavourhealth.library.model.workflow.task.TaskHistory;
import org.endeavourhealth.library.model.workflow.task.TaskState;
import org.endeavourhealth.library.model.workflow.task.TaskType;

@Getter
public class RoleRequest extends Task {

  private UserRole role;

  public RoleRequest(
    TTIriRef id,
    TaskType type,
    String createdBy,
    String assignedTo,
    TaskState state,
    LocalDateTime dateCreated,
    List<TaskHistory> history,
    String hostUrl,
    UserRole role
  ) {
    super(id, createdBy, type, state, assignedTo, dateCreated, history, hostUrl);
    this.role = role;
  }

  public RoleRequest() {}

  public RoleRequest setRole(UserRole role) {
    this.role = role;
    return this;
  }
}

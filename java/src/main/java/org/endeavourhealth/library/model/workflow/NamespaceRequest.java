package org.endeavourhealth.library.model.workflow;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.endeavourhealth.library.model.security.NamespacePermission;
import org.endeavourhealth.library.model.tripletree.TTIriRef;
import org.endeavourhealth.library.model.workflow.task.TaskHistory;
import org.endeavourhealth.library.model.workflow.task.TaskState;
import org.endeavourhealth.library.model.workflow.task.TaskType;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor
public class NamespaceRequest extends Task {
  private NamespacePermission namespacePermission;

  public NamespaceRequest(TTIriRef id, TaskType type, String createdBy, String assignedTo, TaskState state, LocalDateTime dateCreated, List<TaskHistory> history, String hostUrl, NamespacePermission namespacePermission) {
    super(id, createdBy, type, state, assignedTo, dateCreated, history, hostUrl);
    this.namespacePermission = namespacePermission;
  }

  public NamespaceRequest setNamespacePermission(NamespacePermission namespacePermission) {
    this.namespacePermission = namespacePermission;
    return this;
  }
}

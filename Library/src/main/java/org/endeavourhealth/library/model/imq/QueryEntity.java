package org.endeavourhealth.library.model.imq;

import java.util.Set;
import org.endeavourhealth.library.model.iml.Entity;
import org.endeavourhealth.library.model.tripletree.TTEntity;

public class QueryEntity extends Entity {

  private Query definition;

  public QueryEntity setIsContainedIn(Set<TTEntity> isContainedIn) {
    super.setIsContainedIn(isContainedIn);
    return this;
  }

  public Query getDefinition() {
    return definition;
  }

  public QueryEntity setDefinition(Query definition) {
    this.definition = definition;
    return this;
  }
}

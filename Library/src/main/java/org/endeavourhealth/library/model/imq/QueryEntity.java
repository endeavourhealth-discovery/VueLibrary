package org.endeavourhealth.library.model.imq;

import org.endeavourhealth.library.model.iml.Entity;
import org.endeavourhealth.library.model.tripletree.TTEntity;

import java.util.Set;

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

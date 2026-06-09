package org.endeavourhealth.library.model.dto;

import org.endeavourhealth.library.model.tripletree.TTEntity;
import org.endeavourhealth.library.model.tripletree.TTIriRef;

import java.util.List;

public class InstanceDTO {

  private TTEntity entity;
  private List<TTIriRef> predicates;

  public TTEntity getEntity() {
    return entity;
  }

  public InstanceDTO setEntity(TTEntity entity) {
    this.entity = entity;
    return this;
  }

  public List<TTIriRef> getPredicates() {
    return predicates;
  }

  public InstanceDTO setPredicates(List<TTIriRef> predicates) {
    this.predicates = predicates;
    return this;
  }
}

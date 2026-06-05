package org.endeavourhealth.library.model.requests;

import lombok.Getter;
import org.endeavourhealth.library.model.tripletree.TTEntity;
import org.endeavourhealth.library.vocabulary.GRAPH;
import org.endeavourhealth.library.vocabulary.VALIDATION;

@Getter
public class EntityValidationRequest {
  private TTEntity entity;
  private String validationIri;
  private GRAPH graph;

  public EntityValidationRequest() {
  }

  public EntityValidationRequest setEntity(TTEntity entity) {
    this.entity = entity;
    return this;
  }

  public EntityValidationRequest setValidationIri(String validationIri) {
    this.validationIri = validationIri;
    return this;
  }

  public EntityValidationRequest setValidationIri(VALIDATION validationIri) {
    this.validationIri = validationIri.toString();
    return this;
  }

  public EntityValidationRequest setGraph(GRAPH graph) {
    this.graph = graph;
    return this;
  }
}

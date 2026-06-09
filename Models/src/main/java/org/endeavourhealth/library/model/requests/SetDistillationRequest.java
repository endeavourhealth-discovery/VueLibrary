package org.endeavourhealth.library.model.requests;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.endeavourhealth.library.model.tripletree.TTIriRef;
import org.endeavourhealth.library.vocabulary.GRAPH;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class SetDistillationRequest {
  private List<TTIriRef> conceptList;
  private GRAPH graph;

  public SetDistillationRequest setConceptList(List<TTIriRef> conceptList) {
    this.conceptList = conceptList;
    return this;
  }

  public void addToConceptList(TTIriRef concept) {
    if (null == conceptList) {
      conceptList = new ArrayList<>();
    }
    this.conceptList.add(concept);
  }

  public SetDistillationRequest setGraph(GRAPH graph) {
    this.graph = graph;
    return this;
  }
}

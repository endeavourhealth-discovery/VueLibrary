package org.endeavourhealth.library.vocabulary;

import org.eclipse.rdf4j.model.IRI;
import org.endeavourhealth.library.model.tripletree.TTIriRef;

public interface VocabEnum {
  TTIriRef asIri();

  IRI asDbIri();
}

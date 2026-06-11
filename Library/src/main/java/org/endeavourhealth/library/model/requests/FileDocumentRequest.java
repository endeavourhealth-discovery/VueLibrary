package org.endeavourhealth.library.model.requests;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.endeavourhealth.library.model.tripletree.TTDocument;
import org.endeavourhealth.library.vocabulary.NAMESPACE;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FileDocumentRequest {
  private TTDocument document;
  private NAMESPACE insertNamespace;
}

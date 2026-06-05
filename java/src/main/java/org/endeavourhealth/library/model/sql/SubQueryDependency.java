package org.endeavourhealth.library.model.sql;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SubQueryDependency {
  private String iri;
  private String label;
  private int depth;
}

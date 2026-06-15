package org.endeavourhealth.library.model.dto;

import java.util.List;
import java.util.Map;
import lombok.Data;
import org.endeavourhealth.library.model.tripletree.TTIriRef;

@Data
public class FilterOptionsDto {

  private List<TTIriRef> status;
  private List<TTIriRef> schemes;
  private List<TTIriRef> types;
  private List<TTIriRef> sortFields;
  private List<TTIriRef> sortDirections;
  private Map<String, List<TTIriRef>> typeSchemes;
}

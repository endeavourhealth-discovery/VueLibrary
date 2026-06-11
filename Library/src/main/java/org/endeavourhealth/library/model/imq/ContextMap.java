package org.endeavourhealth.library.model.imq;

import java.util.Map;

public interface ContextMap {
  Map<String, String> getContext();

  ContextMap setContext(Map<String, String> prefixMap);
}

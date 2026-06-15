package org.endeavourhealth.library.json;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import java.util.Map;
import lombok.Getter;

@Getter
public class JsonLDMapper extends ObjectMapper {

  private Map<String, String> iriPrefixMap;

  public JsonLDMapper() {
    SimpleModule module = new SimpleModule();
    module.addSerializer(Object.class, new JsonLDSerializer(Object.class));
    registerModule(module);
  }

  public JsonLDMapper setIriPrefixMap(Map<String, String> iriPrefixMap) {
    this.iriPrefixMap = iriPrefixMap;
    return this;
  }
}

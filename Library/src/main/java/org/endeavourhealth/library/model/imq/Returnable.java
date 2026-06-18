package org.endeavourhealth.library.model.imq;

import java.util.List;

public interface Returnable {
  Returnable setReturn(List<Return> returns);
  List<Return> getReturn();
}

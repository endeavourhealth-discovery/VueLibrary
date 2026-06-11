package org.endeavourhealth.library.model.imq;

public class QueryException extends Exception {
  public QueryException(String message) {
    super(message);
  }

  public QueryException(String message, Throwable exception) {
    super(message, exception);
  }
}

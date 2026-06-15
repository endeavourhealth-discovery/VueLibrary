package org.endeavourhealth.library.model.workflow.bugReport;

public enum Browser {
  CHROME("chrome"),
  FIREFOX("firefox"),
  EDGE("edge"),
  IE("internet explorer"),
  OTHER("other");

  private final String text;

  Browser(String text) {
    this.text = text;
  }

  public String getText() {
    return text;
  }
}

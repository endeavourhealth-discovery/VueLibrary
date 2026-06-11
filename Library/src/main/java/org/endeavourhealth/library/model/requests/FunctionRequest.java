package org.endeavourhealth.library.model.requests;

import lombok.Getter;
import org.endeavourhealth.library.model.iml.Page;
import org.endeavourhealth.library.model.imq.Argument;
import org.endeavourhealth.library.vocabulary.GRAPH;

import java.util.ArrayList;
import java.util.List;

@Getter
public class FunctionRequest {
  private String functionIri;
  private List<Argument> arguments;
  private Page page;
  private GRAPH graph;

  public FunctionRequest setFunctionIri(String functionIri) {
    this.functionIri = functionIri;
    return this;
  }

  public FunctionRequest setArguments(List<Argument> arguments) {
    this.arguments = arguments;
    return this;
  }

  public FunctionRequest addArgument(Argument argument) {
    if (null == argument) this.arguments = new ArrayList<>();
    this.arguments.add(argument);
    return this;
  }

  public FunctionRequest setPage(Page page) {
    this.page = page;
    return this;
  }

  public FunctionRequest setGraph(GRAPH graph) {
    this.graph = graph;
    return this;
  }
}

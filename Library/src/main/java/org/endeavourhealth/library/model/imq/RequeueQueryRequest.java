package org.endeavourhealth.library.model.imq;

import java.util.UUID;
import lombok.Getter;
import org.endeavourhealth.library.model.requests.QueryRequest;

@Getter
public class RequeueQueryRequest {

  private UUID queueId;
  private QueryRequest queryRequest;

  public RequeueQueryRequest() {
    super();
  }

  public RequeueQueryRequest setQueueId(UUID queueId) {
    this.queueId = queueId;
    return this;
  }

  public RequeueQueryRequest setQueryRequest(QueryRequest queryRequest) {
    this.queryRequest = queryRequest;
    return this;
  }
}

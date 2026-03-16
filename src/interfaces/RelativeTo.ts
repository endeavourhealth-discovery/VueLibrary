import { Path, TTIriRef } from "./AutoGen";

export interface RelativeTo {
  nodeRef?: string;
  parameter?: string;
  qualifier?: TTIriRef;
  iri?: string;
  name?: string;
}

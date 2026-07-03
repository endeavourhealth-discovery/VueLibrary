import { TTIriRef } from "./TTIriRef";

export interface TransformRequest {
  transformMap?: TTIriRef;
  sourceFormat?: string;
  targetFormat?: string;
  source?: { [index: string]: any[] };
}

import { TTIriRef } from "./TTIriRef";

export interface PropertyRange extends TTIriRef {
  pattern?: string;
  intervalUnit?: TTIriRef;
  qualifier?: PropertyRange[];
  type?: TTIriRef;
  units?: TTIriRef;
  operator?: TTIriRef;
  relativeValue?: boolean;
}

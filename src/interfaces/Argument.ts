import { Path } from "./Path";
import { TTIriRef } from "./TTIriRef";

export interface Argument {
  parameter?: string;
  valueData?: string;
  valueParameter?: string;
  valueIri?: TTIriRef;
  valueIriList?: TTIriRef[];
  valueDataList?: string[];
  valuePath?: Path;
  valueNodeRef?: string;
  dataType?: TTIriRef;
  valueObject?: any;
  valueVariable?: string;
  qualifier?: TTIriRef;
}

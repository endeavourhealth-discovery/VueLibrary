import { NAMESPACE } from "@/enums";

import { TTEntity } from "./TTEntity";

export interface EditRequest {
  entity?: TTEntity;
  hostUrl?: string;
  namespace?: NAMESPACE;
  crud?: string;
}

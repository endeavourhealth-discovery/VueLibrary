import { NAMESPACE } from "@/enums";

import { TTDocument } from "./TTDocument";

export interface FileDocumentRequest {
  document?: TTDocument;
  insertNamespace?: NAMESPACE;
}

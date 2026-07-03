import { DisplayMode } from "@/enums";

import { Query } from "./Query";
import { TTIriRef } from "./TTIriRef";

export interface QueryDisplayRequest {
  query?: Query;
  displayMode?: DisplayMode;
  graph?: TTIriRef;
}

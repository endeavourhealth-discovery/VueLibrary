import { TTIriRef } from "./TTIriRef";
import { ValueSource } from "./ValueSource";

export interface Compare {
  left?: ValueSource;
  right?: ValueSource;
  units?: TTIriRef;
}

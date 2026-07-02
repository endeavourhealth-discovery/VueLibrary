import { TTArray } from "./TTArray";
import { TTIriRef } from "./TTIriRef";

export interface EntityReferenceNode extends TTIriRef {
  parents?: EntityReferenceNode[];
  children?: EntityReferenceNode[];
  moduleId?: string;
  hasChildren?: boolean;
  hasGrandChildren?: boolean;
  type?: TTArray;
  orderNumber?: number;
}

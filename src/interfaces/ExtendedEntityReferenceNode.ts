import { EntityReferenceNode } from "./EntityReferenceNode";

export interface ExtendedEntityReferenceNode extends EntityReferenceNode {
  name: string;
  icon: string[];
  hasGrandChildren?: boolean;
}

import { EntityReferenceNode, TTEntity, SearchResultSummary } from "./AutoGen";
import { GenericObject } from "./GenericObject";

export interface ExtendedTTEntity extends TTEntity, GenericObject {}

export interface TTBundle {
  entity: ExtendedTTEntity;
  predicates: { [index: string]: string };
}

export interface ExtendedEntityReferenceNode extends EntityReferenceNode {
  name: string;
  icon: string[];
  hasGrandChildren?: boolean;
}

export interface ExtendedSearchResultSummary extends SearchResultSummary, GenericObject {}

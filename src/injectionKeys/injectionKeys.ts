import { InjectionKey } from "vue";

import { PrimeVueColors, PrimeVuePresetThemes } from "../enums";
import {
  ExtendedEntityReferenceNode,
  FiltersAsIris,
  NamespacePermissionJava,
  PageableEntityReferenceNode,
  RecentActivityItemDto,
  SearchResultSummary,
  TTIriRef,
  User
} from "../models";

const useDirectService = Symbol("useDirectService") as InjectionKey<
  () => {
    select(iri: string): Promise<void>;
    view(iri: string): Promise<void>;
  }
>;
const entityService = Symbol("entityService") as InjectionKey<{
  getEntitySummary(iri: string): Promise<SearchResultSummary>;
  getPagedChildren(
    iri: string,
    pageIndex: number,
    pageSize: number,
    filters?: FiltersAsIris,
    controller?: AbortController,
    typeFilter?: string[]
  ): Promise<PageableEntityReferenceNode>;
  getEntityAsEntityReferenceNode(iri: string): Promise<ExtendedEntityReferenceNode>;
  getPathBetweenNodes(descendant: string, ancestor: string): Promise<TTIriRef[]>;
}>;
const userService = Symbol("userService") as InjectionKey<{
  updateUserRecentActivity(recentActivity: RecentActivityItemDto[]): Promise<User>;
  updateUserFavourites(favourites: string[]): Promise<User>;
  updateUserPreset(preset: PrimeVuePresetThemes): Promise<User>;
  updateUserPrimaryColor(color: PrimeVueColors): Promise<User>;
  updateUserSurfaceColor(color: PrimeVueColors): Promise<User>;
  updateUserDarkMode(bool: boolean): Promise<User>;
  updateUserFontSize(fontSize: string): Promise<User>;
  updateUserOrganisations(organisations: string[]): Promise<User>;
  updateUserNamespaces(namespaces: NamespacePermissionJava[]): Promise<User>;
}>;

export default {
  useDirectService,
  entityService,
  userService
};

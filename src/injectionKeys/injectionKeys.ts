import { InjectionKey } from "vue";

import { OrganizationChartNode } from "primevue";
import { TreeNode } from "primevue/treenode";

import { PrimeVueColors, PrimeVuePresetThemes } from "../enums";
import { DisplayMode } from "../enums";
import { FilterOptions, FiltersAsIris, Namespace, PropertyDisplay, QueryResponse, SetDiffObject, SimpleMap, TermCode } from "../interfaces";
import {
  ConceptContextMap,
  DownloadByQueryOptions,
  ECLQueryRequest,
  EntityValidationRequest,
  IMLLanguage,
  Indicator,
  Match,
  NamespacePermissionJava,
  Node,
  NodeShape,
  Pageable,
  Query,
  QueryRequest,
  RecentActivityItemDto,
  SearchResponse,
  SearchResultSummary,
  SetExportRequest,
  TTIriRef
} from "../interfaces/AutoGen";
import { ExtendedEntityReferenceNode, ExtendedTTEntity, TTBundle } from "../interfaces/ExtendedAutoGen";
import { User } from "../models";

const conceptService = Symbol("conceptService") as InjectionKey<{
  getMatchedFrom(iri: string): Promise<SimpleMap[]>;
  getMatchedTo(iri: string): Promise<SimpleMap[]>;
  getContextMaps(conceptIri: string): Promise<ConceptContextMap[]>;
  getEntityTermCodes(iri: string, includeInactive?: boolean): Promise<TermCode[]>;
}>;
const dataModelService = Symbol("dataModelService") as InjectionKey<{
  getDataModelProperties(iri: string, pathsOnly?: boolean): Promise<NodeShape>;
  getPropertiesDisplay(iri: string): Promise<PropertyDisplay[]>;
  getDataModelsFromProperty(propIri: string): Promise<TTIriRef[]>;
}>;
const useDirectService = Symbol("useDirectService") as InjectionKey<
  () => {
    select(iri: string): Promise<void>;
    view(iri: string): Promise<void>;
    edit(iri: string, openInNewTab?: boolean): Promise<void>;
    create(typeIri?: string, propertyIri?: string, valueIri?: string): Promise<void>;
  }
>;
const eclService = Symbol("eclService") as InjectionKey<{
  ECLSearch(eclSearchRequest: ECLQueryRequest, controller?: AbortController): Promise<SearchResponse>;
  getEcl(query: Query): Promise<string>;
  validateECL(ecl: string, showNames: boolean): Promise<ECLQueryRequest>;
  getEclFromEcl(ecl: string, showNames: boolean): Promise<ECLQueryRequest>;
  getQueryFromECL(ecl: string, raw?: boolean): Promise<ECLQueryRequest>;
  getECLFromQuery(query: Query, showNames?: boolean): Promise<ECLQueryRequest>;
  validateModelFromQuery(query: Query): Promise<ECLQueryRequest>;
  getRangesForProperty(propertyIri: string, controller?: AbortController): Promise<string[]>;
}>;
const entityService = Symbol("entityService") as InjectionKey<{
  getEntitySummary(iri: string): Promise<SearchResultSummary>;
  getPartialEntity(iri: string, predicates: string[]): Promise<ExtendedTTEntity>;
  getNamespaces(): Promise<Namespace[]>;
  downloadSearchResults(downloadSettings: DownloadByQueryOptions): Promise<Blob>;
  getPagedChildren(
    iri: string,
    pageIndex: number,
    pageSize: number,
    filters?: FiltersAsIris,
    controller?: AbortController,
    typeFilter?: string[]
  ): Promise<{ totalCount: number; currentPage: number; pageSize: number; result: ExtendedTTEntity[] }>;
  getEntityAsEntityReferenceNode(iri: string): Promise<ExtendedEntityReferenceNode>;
  getPathBetweenNodes(descendant: string, ancestor: string): Promise<TTIriRef[]>;
  getAllowableChildTypes(iri: string): Promise<ExtendedTTEntity[]>;
  entityExists(iri: string): Promise<boolean>;
  getEntityChildren(iri: string, filters?: FiltersAsIris, controller?: AbortController): Promise<ExtendedEntityReferenceNode[]>;
  getAsEntityReferenceNodes(iris: string[]): Promise<ExtendedEntityReferenceNode[]>;
  downloadEntity(iri: string): Promise<Blob>;
  getEntityByPredicateExclusions(iri: string, predicates: string[]): Promise<ExtendedTTEntity>;
  getFolderPath(iri: string): Promise<TTIriRef[]>;
  getPartialEntities(typeIris: string[], predicates: string[]): Promise<ExtendedTTEntity[]>;
  getEntityGraph(iri: string): Promise<OrganizationChartNode>;
  getBundleByPredicateExclusions(iri: string, predicates: string[], graph?: string): Promise<TTBundle>;
  getPartialAndTotalCount(
    iri: string,
    predicate: string,
    pageIndex: number,
    pageSize: number,
    filters?: FiltersAsIris,
    controller?: AbortController
  ): Promise<Pageable<TTIriRef>>;
  getPartialEntityBundle(iri: string, predicates: string[]): Promise<TTBundle>;
  getEntityUsages(iri: string, pageIndex: number, pageSize: number): Promise<ExtendedTTEntity[]>;
  getUsagesTotalRecords(iri: string): Promise<number>;
  getProvHistory(iri: string): Promise<ExtendedTTEntity[]>;
  getEntityParents(iri: string, filters?: FiltersAsIris): Promise<ExtendedEntityReferenceNode[]>;
  getEntityDetailsDisplay(iri: string): Promise<TreeNode[]>;
  loadMoreDetailsDisplay(iri: string, predicate: string, pageIndex: number, pageSize: number): Promise<TreeNode[]>;
  checkValidation(validationIri: string, data: EntityValidationRequest): Promise<{ valid: boolean; message: string | undefined }>;
  getFilterOptions(): Promise<FilterOptions>;
  getFilterDefaultOptions(): Promise<FilterOptions>;
  getCoreSchemes(): Promise<string[]>;
}>;
const filerService = Symbol("filerService") as InjectionKey<{
  moveFolder(entity: string, oldFolder: string, newFolder: string): Promise<void>;
  addToFolder(entity: string, folder: string): Promise<void>;
  createFolder(container: string, name: string): Promise<string>;
}>;
const queryService = Symbol("queryService") as InjectionKey<{
  queryIMSearch(query: QueryRequest, controller?: AbortController, raw?: boolean): Promise<SearchResponse>;
  askQuery(query: QueryRequest, controller?: AbortController, raw?: boolean): Promise<boolean>;
  generateQuerySQL(queryIri: string, lang?: string): Promise<string>;
  generateQueryIML(queryIri: string): Promise<IMLLanguage>;
  getDisplayFromQueryIri(iri: string, displayMode: DisplayMode): Promise<Query>;
  getQueryDisplayFromQuery(query: Query, displayMode: DisplayMode): Promise<Query>;
  expandCohort(queryIri: string, cohortIri: string, displayMode: DisplayMode): Promise<Query>;
  getDisplayFromIndicatorIri(iri: string): Promise<Indicator>;
  flattenBooleans(query: Query | Match): Promise<Query | Match>;
  optimiseECLQuery(query: Query): Promise<Query>;
  queryIM(query: QueryRequest, controller?: AbortController, raw?: boolean): Promise<QueryResponse>;
}>;
const setService = Symbol("setService") as InjectionKey<{
  getFullExportSet(setRequest: SetExportRequest, raw?: boolean): Promise<Blob>;
  IMV1(conceptIri: string, raw?: boolean): Promise<Blob>;
  publish(conceptIri: string): Promise<void>;
  getMembers(iri: string, entailments: boolean, pageIndex: number, pageSize: number, controller?: AbortController): Promise<Pageable<Node>>;
  getMembersFromQuery(query: Query, pageIndex: number, pageSize: number): Promise<Pageable<Node>>;
  getSetComparison(iriA?: string, iriB?: string): Promise<SetDiffObject>;
  getSubsets(iri: string): Promise<TTIriRef[]>;
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
  conceptService,
  dataModelService,
  useDirectService,
  eclService,
  entityService,
  filerService,
  queryService,
  setService,
  userService
};

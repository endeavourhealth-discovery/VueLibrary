import { TagSeverity } from "@/enums";
import { FilterOptions, FiltersAsIris, Namespace, PropertyDisplay, QueryResponse, SetDiffObject, SimpleMap, TermCode } from "@/interfaces";
import {
  ConceptContextMap,
  DownloadByQueryOptions,
  ECLQueryRequest,
  IMLLanguage,
  Indicator,
  Match,
  Node,
  NodeShape,
  Pageable,
  Query,
  QueryRequest,
  SearchResponse,
  SearchResultSummary,
  SetExportRequest,
  TTIriRef
} from "@/interfaces/AutoGen";
import { DisplayMode, FontSize } from "@/enums";
import { ExtendedEntityReferenceNode, TTBundle, TTEntity } from "@/interfaces/ExtendedAutoGen";
import { NamespacePermission } from "@/models";
import { StoreGeneric } from "pinia";
import { OrganizationChartNode } from "primevue";
import { TreeNode } from "primevue/treenode";
import { ComputedRef, InjectionKey } from "vue";

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
const directService = Symbol("directService") as InjectionKey<{
  select(iri: string): Promise<void>;
  view(iri: string): Promise<void>;
  edit(iri: string, openInNewTab?: boolean): Promise<void>;
  create(typeIri?: string, propertyIri?: string, valueIri?: string): Promise<void>;
}>;
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
  getPartialEntity(iri: string, predicates: string[]): Promise<TTEntity>;
  getNamespaces(): Promise<Namespace[]>;
  downloadSearchResults(downloadSettings: DownloadByQueryOptions): Promise<Blob>;
  getPagedChildren(
    iri: string,
    pageIndex: number,
    pageSize: number,
    filters?: FiltersAsIris,
    controller?: AbortController,
    typeFilter?: string[]
  ): Promise<{ totalCount: number; currentPage: number; pageSize: number; result: TTEntity[] }>;
  getEntityAsEntityReferenceNode(iri: string): Promise<ExtendedEntityReferenceNode>;
  getPathBetweenNodes(descendant: string, ancestor: string): Promise<TTIriRef[]>;
  getAllowableChildTypes(iri: string): Promise<TTEntity[]>;
  checkExists(iri: string): Promise<boolean>;
  getEntityChildren(iri: string, filters?: FiltersAsIris, controller?: AbortController): Promise<ExtendedEntityReferenceNode[]>;
  getAsEntityReferenceNodes(iris: string[]): Promise<ExtendedEntityReferenceNode[]>;
  downloadEntity(iri: string): Promise<Blob>;
  getEntityByPredicateExclusions(iri: string, predicates: string[]): Promise<TTEntity>;
  getFolderPath(iri: string): Promise<TTIriRef[]>;
  getPartialEntities(typeIris: string[], predicates: string[]): Promise<TTEntity[]>;
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
  getEntityUsages(iri: string, pageIndex: number, pageSize: number): Promise<TTEntity[]>;
  getUsagesTotalRecords(iri: string): Promise<number>;
  getProvHistory(iri: string): Promise<TTEntity[]>;
  getEntityParents(iri: string, filters?: FiltersAsIris): Promise<ExtendedEntityReferenceNode[]>;
  getEntityDetailsDisplay(iri: string): Promise<TreeNode[]>;
  loadMoreDetailsDisplay(iri: string, predicate: string, pageIndex: number, pageSize: number): Promise<TreeNode[]>;
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
const directoryStore = Symbol("directoryStore") as InjectionKey<
  StoreGeneric & {
    updateSplitterRightSize(newSplitterRightSize: number): void;
    updateFindInTreeIri(iri: string): void;
    updateSidebarControlActivePanel(number: number): void;
  }
>;
const editorStore = Symbol("editorStore") as InjectionKey<
  StoreGeneric & {
    eclEditorSavedString: string;
    updateEclEditorSavedString(ecl: string): void;
  }
>;
const filterStore = Symbol("filterStore") as InjectionKey<
  StoreGeneric & {
    filterOptions: FilterOptions;
    defaultFilterOptions: FilterOptions;
    selectedFilterOptions: FilterOptions;
    coreSchemes: string[];
  }
>;
const loadingStore = Symbol("loadingStore") as InjectionKey<
  StoreGeneric & {
    directoryLoading: boolean;
  }
>;
const sharedStore = Symbol("sharedStore") as InjectionKey<
  StoreGeneric & {
    tagSeverityMatches: { iri: string; severity: TagSeverity }[];
  }
>;
const userStore = Symbol("userStore") as InjectionKey<
  StoreGeneric & {
    favourites: string[];
    isLoggedIn: boolean;
    namespaces: NamespacePermission[];
    updateFavourites(favourite: string): Promise<void>;
    updateCurrentFontSize(fontSize: FontSize): Promise<void>;
  }
>;

export default {
  conceptService,
  dataModelService,
  directService,
  eclService,
  entityService,
  filerService,
  queryService,
  setService,
  directoryStore,
  editorStore,
  filterStore,
  loadingStore,
  sharedStore,
  userStore
};

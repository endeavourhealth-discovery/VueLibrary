import { IMLContext, ListMode, TargetUpdateMode, Aggregate, Bool, Comparison, DatabaseOption, DisplayMode, ECLType, Entail, IMQType, Operator, Order, OrderableDate, OrderableNumber, QueryType, RuleAction, TextSearchStyle, ValidationLevel, VarType, QueryExecutorStatus, Browser, OperatingSystem, Severity, Status, TaskModule, ApprovalType, UserRole, TaskState, TaskType, BNF, CODE_TEMPLATE, COMPONENT, CONFIG, CodeTemplate, EDITOR, ENTITY_TYPE, EntityType, FHIR, GRAPH, IM, IMPORT_TYPE, IMQ, IM_FUNCTION, ImportType, MAP, NAMESPACE, ODS, OPENSEARCH, OPEN_SEARCH, ORG, OWL, PRSB, QR, QUERY, RDF, RDFS, SHACL, SNOMED, TRANSFORM_FUNCTION, TransformFunction, USER, VALIDATION, WORKFLOW, XSD, PrimeVuePresetThemes, PrimeVueColors, FontSize } from '../enums/AutoGen';

/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2026-03-04 15:55:27.

export interface ConceptContextMap {
    id?: string;
    node?: string;
    value?: string;
    regex?: string;
    property?: string;
    context?: Context[];
}

export interface DataModelProperty extends Serializable {
    property?: TTIriRef;
    type?: TTIriRef;
    minInclusive?: string;
    minExclusive?: string;
    maxInclusive?: string;
    maxExclusive?: string;
    pattern?: string;
    inheritedFrom?: TTIriRef;
    order?: number;
}

export interface DownloadEntityOptions {
    entityIri?: string;
    format?: string;
    includeHasSubtypes?: boolean;
    includeInferred?: boolean;
    includeProperties?: boolean;
    includeMembers?: boolean;
    expandMembers?: boolean;
    expandSubsets?: boolean;
    includeTerms?: boolean;
    includeIsChildOf?: boolean;
    includeHasChildren?: boolean;
    includeInactive?: boolean;
}

/**
 * Class representing an IRI
 */
export interface EntityReferenceNode extends TTIriRef, Serializable {
    parents?: EntityReferenceNode[];
    children?: EntityReferenceNode[];
    moduleId?: string;
    hasChildren?: boolean;
    hasGrandChildren?: boolean;
    type?: TTArray;
    orderNumber?: number;
}

export interface Namespace {
    iri?: string;
    prefix?: string;
    name?: string;
}

export interface Pageable<T> {
    totalCount?: number;
    currentPage?: number;
    pageSize?: number;
    result?: T[];
}

export interface CodeGenDto {
    name?: string;
    extension?: string;
    collectionWrapper?: string;
    datatypeMap?: { [index: string]: string };
    template?: string;
    complexTypes?: boolean;
}

export interface GithubAuthorDTO {
    login?: string;
}

export interface GithubDTO {
    tag_name?: string;
    name?: string;
    body?: string;
    created_at?: string;
    published_at?: string;
    author?: GithubAuthorDTO;
}

export interface GithubRelease {
    version?: string;
    title?: string;
    createdDate?: string;
    publishedDate?: string;
    releaseNotes?: string[];
    author?: string;
    url?: string;
}

export interface ArrayButtons {
    up?: boolean;
    down?: boolean;
    plus?: boolean;
    minus?: boolean;
    addOnlyIfLast?: boolean;
}

export interface Binding {
    predicateBinding?: { [index: string]: string };
    predicateObject?: { [index: string]: Binding };
}

export interface Concept extends Entity {
    subClassOf?: TTIriRef[];
    code?: string;
    im1Id?: string;
    matchedFrom?: Concept[];
    usage?: number;
    codeId?: string;
    alternativeCode?: string;
    subsumed?: boolean;
}

export interface ConceptSet extends Entity {
    definition?: Query;
    hasMember?: TTIriRef[];
    usedIn?: TTIriRef[];
    avoidReplacedBy?: boolean;
}

export interface Entity {
    iri?: string;
    type?: TTIriRef[];
    status?: TTIriRef;
    scheme?: TTIriRef;
    isContainedIn?: TTEntity[];
    name?: string;
    description?: string;
}

export interface FormGenerator {
    iri?: string;
    status?: TTIriRef;
    label?: string;
    comment?: string;
    targetShape?: TTIriRef;
    type?: TTIriRef[];
    isContainedIn?: TTEntity[];
    subClassOf?: TTIriRef[];
    scheme?: TTIriRef;
    property?: PropertyShape[];
}

export interface FunctionTemplate extends Entity {
    function?: TTIriRef;
    parameterTemplate?: ParameterTemplate[];
}

export interface IMLLanguage {
    text?: string;
    lang?: string;
    info?: { [index: string]: string };
    definitions?: { [index: string]: string };
    prefixes?: { [index: string]: string };
    keywords?: string[];
    booleans?: string[];
    alerts?: string[];
    iriVariables?: { [index: string]: string[] };
}

/**
 * Class representing an IRI
 */
export interface Indicator extends TTIriRef {
    isSubIndicatorOf?: TTIriRef[];
    numerator?: TTIriRef;
    dataset?: TTIriRef;
    actionIfFalse?: TTIriRef[];
    actionIfTrue?: TTIriRef[];
    denominator?: TTIriRef;
}

/**
 * Class representing an IRI
 */
export interface MapFunction extends TTIriRef {
    argument?: Argument[];
    conceptMap?: { [index: string]: string };
    defaultValue?: TTIriRef;
}

export interface ModelDocument {
    context?: TTContext;
    query?: QueryEntity[];
    folder?: Entity[];
    conceptSet?: ConceptSet[];
    function?: MapFunction[];
}

/**
 * Class representing an IRI
 */
export interface NodeShape extends TTIriRef {
    property?: PropertyShape[];
    subType?: TTIriRef[];
}

export interface Page {
    pageNumber?: number;
    pageSize?: number;
    offset?: number;
}

export interface ParameterShape {
    label?: string;
    type?: TTIriRef;
    parameterSubType?: TTIriRef[];
}

export interface ParameterTemplate extends Entity {
    label?: string;
    order?: number;
    valueTemplate?: ValueTemplate[];
}

/**
 * Class representing an IRI
 */
export interface PropertyRange extends TTIriRef {
    pattern?: string;
    intervalUnit?: TTIriRef;
    qualifier?: PropertyRange[];
    type?: TTIriRef;
    units?: TTIriRef;
    operator?: TTIriRef;
    relativeValue?: boolean;
}

export interface PropertyShape {
    label?: string;
    comment?: string;
    name?: string;
    order: number;
    minCount?: number;
    maxCount?: number;
    componentType: TTIriRef;
    path: TTIriRef;
    datatype?: PropertyRange;
    node?: PropertyRange;
    validation?: TTIriRef;
    search?: TTIriRef;
    select?: TTIriRef[];
    argument?: Argument[];
    valueVariable?: string;
    isIri?: TTIriRef;
    isTextValue?: string;
    isNumericValue?: string;
    forceIsValue?: boolean;
    builderChild?: boolean;
    showTitle?: boolean;
    group?: TTIriRef;
    property?: PropertyShape[];
    clazz?: PropertyRange;
    validationErrorMessage?: string;
    function?: TTIriRef;
    parameter?: ParameterShape[];
    valueIri?: TTIriRef;
    expression?: NodeShape;
    arrayButtons?: ArrayButtons;
    hasValue?: any;
    hasValueType?: TTIriRef;
    definition?: string;
    ascending?: string;
    descending?: string;
    orderable?: boolean;
    hasValueSet?: TTIriRef;
    definingProperty?: boolean;
}

export interface SetContent {
    name?: string;
    description?: string;
    status?: string;
    version?: number;
    setDefinition?: string;
    subsets?: string[];
    concepts?: Concept[];
}

export interface ValueTemplate extends Entity {
    label?: string;
    parameter?: string;
    order?: number;
    valueType?: TTIriRef;
    defaultValue?: any;
    valueOption?: any[];
}

export interface Argument {
    parameter?: string;
    valueData?: string;
    valueParameter?: string;
    valueIri?: TTIriRef;
    valueIriList?: TTIriRef[];
    valueDataList?: string[];
    valuePath?: Path;
    valueNodeRef?: string;
    dataType?: TTIriRef;
    valueObject?: any;
    valueVariable?: string;
    qualifier?: TTIriRef;
}

export interface ArgumentReference {
    parameter?: string;
    referenceIri?: TTIriRef;
    dataType?: TTIriRef;
}

export interface Assignable {
    description?: string;
    value?: string;
    function?: FunctionClause;
    invalid?: boolean;
    units?: TTIriRef;
    operator?: Operator;
    qualifier?: TTIriRef;
    valueLabel?: string;
}

export interface Case {
    when?: When[];
    else?: string;
}

export interface ContextMap {
    context?: { [index: string]: string };
}

export interface Delete {
    property?: Where;
    subject?: Node;
    inverse?: boolean;
    predicate?: Node;
    object?: Node;
    delete?: Delete[];
}

export interface ECLQueryRequest {
    ecl?: string;
    query?: Query;
    showNames?: boolean;
    status?: ECLStatus;
    includeLegacy?: boolean;
    limit?: number;
    statusFilter?: TTIriRef[];
    page?: number;
    size?: number;
}

export interface ECLStatus {
    valid?: boolean;
    line?: number;
    offset?: number;
    message?: string;
}

export interface Element extends IriLD, Entailment {
}

export interface Entailment {
    descendantsOrSelfOf?: boolean;
    ancestorsOf?: boolean;
    descendantsOf?: boolean;
    memberOf?: boolean;
}

export interface FunctionClause extends IriLD {
    argument?: Argument[];
}

export interface GroupBy extends IriLD {
    nodeRef?: string;
    valueRef?: string;
    propertyRef?: string;
}

export interface HasPaths {
    path?: Path[];
    node?: string;
}

export interface Instance extends IriLD {
    entailment?: TTIriRef;
}

export interface IriLD {
    iri?: string;
    name?: string;
    description?: string;
    uuid?: string;
}

export interface Match extends IriLD, HasPaths {
    notExists?: boolean;
    ifTrue?: RuleAction;
    ifFalse?: RuleAction;
    nodeRef?: string;
    typeOf?: Node;
    is?: Node[];
    and?: Match[];
    or?: Match[];
    where?: Where;
    return?: Return[];
    graph?: Node;
    optional?: boolean;
    aggregate?: FunctionClause;
    parameter?: string;
    function?: FunctionClause;
    entailment?: Entail;
    baseRule?: boolean;
    ruleNumber?: number;
    inverse?: boolean;
    activeOnly?: boolean;
    rule?: Match[];
    step?: Match[];
    libraryItem?: string;
    invalid?: boolean;
    groupBy?: GroupBy[];
    orderBy?: OrderLimit;
    asDescription?: string;
    union?: Match[];
    relationMessage?: string;
}

export interface Node extends Element {
    parameter?: string;
    type?: string;
    qualifier?: string;
    match?: Match;
    childOrSelfOf?: boolean;
    childOf?: boolean;
    cohort?: boolean;
    nodeRef?: string;
    invalid?: boolean;
    resultSet?: boolean;
    exclude?: boolean;
    code?: string;
    inverse?: boolean;
    node?: string;
    isCohort?: boolean;
    isResultSet?: boolean;
}

export interface OrderDirection extends RelativeTo {
    direction?: Order;
    function?: FunctionClause;
}

export interface OrderLimit {
    property?: OrderDirection[];
    limit?: number;
    description?: string;
}

export interface Path extends Element, HasPaths {
    parameter?: string;
    childOrSelfOf?: boolean;
    childOf?: boolean;
    cohort?: boolean;
    nodeRef?: string;
    invalid?: boolean;
    resultSet?: boolean;
    inverse?: boolean;
    optional?: boolean;
    pathVariable?: string;
    typeOf?: Node;
    qualifier?: TTIriRef;
    isCohort?: boolean;
    isResultSet?: boolean;
}

export interface PathDocument {
    match?: Match[];
}

/**
 * Class representing an IRI
 */
export interface PathQuery extends TTIriRef {
    source?: TTIriRef;
    target?: TTIriRef;
    depth?: number;
}

export interface Prefix {
    prefix?: string;
    namespace?: string;
}

export interface Query extends Match {
    prefixes?: Prefix[];
    columnGroup?: Match[];
    imQuery?: string;
    parentResult?: any;
    persistentIri?: TTIriRef;
    bindAs?: string;
    queryType?: IMQType;
}

export interface QueryEntity extends Entity {
    definition?: Query;
}

export interface QueryException extends Exception {
}

export interface Range {
    from: Value;
    to: Value;
}

export interface RelativeTo extends IriLD {
    qualifier?: TTIriRef;
    valueVariable?: string;
    propertyRef?: string;
    targetLabel?: string;
    parameterName?: string;
    nodeRef?: string;
    parameter?: string;
}

export interface RequeueQueryRequest {
    queueId?: string;
    queryRequest?: QueryRequest;
}

export interface Return {
    iri?: string;
    name?: string;
    function?: FunctionClause;
    as?: string;
    nodeRef?: string;
    propertyRef?: string;
    pathRef?: string;
    inverse?: boolean;
    unit?: string;
    dataType?: TTIriRef;
    description?: string;
    case?: Case;
    return?: Return[];
    value?: string;
}

/**
 * Class representing an IRI
 */
export interface Update extends TTIriRef {
    match?: Match[];
    delete?: Delete[];
}

export interface Value extends Assignable {
    valueParameter?: string;
    isInvalid?: boolean;
}

export interface When {
    where?: Where;
    then?: string;
    exists?: boolean;
    case?: Case;
}

export interface Where extends Element, Assignable {
    nodeRef?: string;
    range?: Range;
    isNull?: boolean;
    is?: Node[];
    relativeTo?: RelativeTo;
    anyRoleGroup?: boolean;
    parameter?: string;
    childOrSelfOf?: boolean;
    childOf?: boolean;
    cohort?: boolean;
    resultSet?: boolean;
    inverse?: boolean;
    typeOf?: Node;
    subjectVariable?: string;
    not?: boolean;
    roleGroup?: boolean;
    isNotNull?: boolean;
    or?: Where[];
    and?: Where[];
    propertyRef?: string;
    shortLabel?: string;
    propertyList?: Node[];
    propertyVariable?: string;
    node?: string;
    excludeProperty?: IriLD[];
    exists?: boolean;
    linked?: boolean;
    notNull?: boolean;
    isInvalid?: boolean;
    isCohort?: boolean;
    isResultSet?: boolean;
}

export interface DBEntry {
    id?: string;
    queryIri?: string;
    queryName?: string;
    queryRequest?: QueryRequest;
    userId?: string;
    userName?: string;
    queuedAt?: Date;
    startedAt?: Date;
    pid?: number;
    finishedAt?: Date;
    killedAt?: Date;
    status?: QueryExecutorStatus;
    queryResult?: string;
    error?: string;
}

export interface CognitoGroupRequest {
    username?: string;
    groupName?: UserRole;
}

export interface EditRequest {
    entity?: TTEntity;
    hostUrl?: string;
    namespace?: NAMESPACE;
    crud?: string;
}

export interface EntityValidationRequest {
    entity?: TTEntity;
    validationIri?: string;
    graph?: GRAPH;
}

export interface FileDocumentRequest {
    document?: TTDocument;
    insertNamespace?: NAMESPACE;
}

export interface FunctionRequest {
    functionIri?: string;
    arguments?: Argument[];
    page?: Page;
    graph?: GRAPH;
}

export interface MatchDisplayRequest {
    match?: Match;
    graph?: GRAPH;
}

export interface QueryDisplayRequest {
    query?: Query;
    displayMode?: DisplayMode;
    graph?: TTIriRef;
}

export interface QueryRequest extends ContextMap {
    textSearch?: string;
    argument?: Argument[];
    query: Query;
    pathQuery?: PathQuery;
    update?: Update;
    name?: string;
    page?: Page;
    queryStringDefinition?: string;
    askIri?: string;
    timings?: { [index: string]: string }[];
    cohort?: TTIriRef[];
    includeNames?: boolean;
    textSearchStyle?: TextSearchStyle;
    language?: DatabaseOption;
}

/**
 * Structure containing search request parameters and filters
 */
export interface SearchRequest {
    /**
     * Plain text, space separated list of terms
     */
    termFilter?: string;
    index?: string;
    /**
     * List of entity status IRI's
     */
    statusFilter?: string[];
    /**
     * List of entity type IRI's
     */
    typeFilter?: string[];
    /**
     * List of code scheme IRI's
     */
    schemeFilter?: string[];
    /**
     * List of binding node and path IRI's
     */
    bindingFilter?: SearchBinding[];
    /**
     * Marks the results if they are descendants of any of these entities, but does not filter by them
     */
    markIfDescendentOf?: string[];
    /**
     * List of IRIs that must be supertypes of the matches
     */
    isA?: string[];
    /**
     * List of set IRIs that the match must be a member of
     */
    memberOf?: string[];
    /**
     * The search result page number to retrieve
     */
    page?: number;
    /**
     * The number of results to retrieve per page
     */
    size?: number;
    from?: number;
    /**
     * list of fields or property paths from search result summary to return 
     */
    select?: string[];
    orderBy?: OrderBy[];
    filter?: Filter[];
    timings?: { [index: string]: string }[];
}

export interface SetDistillationRequest {
    conceptList?: TTIriRef[];
    graph?: GRAPH;
}

export interface SetExportRequest {
    ownRow?: boolean;
    format?: string;
    options?: SetOptions;
}

export interface SuperiorPropertiesBoolFocusPagedRequest {
    ecl?: string;
    page?: number;
    size?: number;
    schemeFilters?: string[];
    inactive?: boolean;
}

export interface TransformRequest {
    transformMap?: TTIriRef;
    sourceFormat?: string;
    targetFormat?: string;
    source?: { [index: string]: any[] };
}

export interface ValidatedEntitiesRequest {
    snomedCodes?: string[];
}

/**
 * Structure containing search request parameters and filters
 */
export interface WorkflowRequest {
    securityService?: SecurityService;
    page?: number;
    size?: number;
    userId?: string;
}

export interface EntityValidationResponse {
    valid?: boolean;
    message?: string;
}

export interface LoginResponse {
    user?: UserJava;
    state?: string;
}

export interface LoginResponseES {
    sessionId?: string;
    user?: UserJava;
    state?: string;
}

export interface OdsResponse {
    Organisation?: Organisation;
    Roles?: OrgRole[];
}

export interface SearchResponse {
    page?: number;
    count?: number;
    totalCount?: number;
    highestUsage?: number;
    term?: string;
    entities?: SearchResultSummary[];
    exactMatch?: boolean;
}

export interface WorkflowResponse {
    page?: number;
    count?: number;
    tasks?: Task[];
}

export interface DownloadByQueryOptions {
    queryRequest?: QueryRequest;
    eclSearchRequest?: ECLQueryRequest;
    totalCount?: number;
    format?: string;
    includeDefinition?: boolean;
    includeCore?: boolean;
    includeLegacy?: boolean;
    includeSubsets?: boolean;
    subsetsOnOwnRow?: boolean;
    im1id?: boolean;
}

export interface EntityDocument {
    id?: number;
    iri?: string;
    name?: string;
    length?: number;
    preferredName?: string;
    code?: string;
    alternativeCode?: string;
    scheme?: TTIriRef;
    type?: TTIriRef[];
    status?: TTIriRef;
    termCode?: SearchTermCode[];
    usageTotal?: number;
    match?: string;
    isA?: TTIriRef[];
    memberOf?: TTIriRef[];
    subsumptionCount?: number;
    binding?: string[];
    isDescendentOf?: TTIriRef[];
}

export interface Filter {
    field?: string;
    iriValue?: TTIriRef[];
    and?: Filter[];
    not?: boolean;
    textValue?: string[];
    startsWithTerm?: boolean;
}

export interface OrderBy {
    field?: string;
    direction?: Order;
    iriValue?: TTIriRef[];
    and?: OrderBy[];
    textValue?: string[];
    not?: boolean;
    startsWithTerm?: boolean;
}

export interface SearchBinding {
    path?: TTIriRef;
    node?: TTIriRef;
}

export interface SearchResultSummary {
    name?: string;
    code?: string;
    description?: string;
    status: TTIriRef;
    scheme: TTIriRef;
    type: TTIriRef[];
    usageTotal?: number;
    bestMatch?: string;
    preferredName?: string;
    key?: string[];
    isA?: TTIriRef[];
    termCode?: SearchTermCode[];
    unit?: TTIriRef[];
    qualifier?: TTIriRef[];
    iri: string;
}

export interface SearchTermCode extends Comparable<SearchTermCode> {
    term?: string;
    code?: string;
    status?: TTIriRef;
    length?: number;
    keyTerm?: string;
}

export interface SetOptions {
    setIri?: string;
    schemes?: string[];
    includeIM1id?: boolean;
    subsumptions?: string[];
    includeDefinition?: boolean;
    includeCore?: boolean;
    includeLegacy?: boolean;
    includeSubsets?: boolean;
}

export interface TTDocument extends TTNode {
    context?: TTContext;
    entities?: TTEntity[];
    crud?: TTIriRef;
    predicates?: { [index: string]: string };
    prefixes?: TTPrefix[];
}

export interface TTEntity extends TTNode, Serializable {
    context?: TTContext;
    crud?: TTIriRef;
    type?: TTArray;
    status?: TTIriRef;
    description?: string;
    name?: string;
    scheme?: TTIriRef;
    version?: number;
    code?: string;
    types?: TTIriRef[];
    prefixes?: TTPrefix[];
}

export interface BugReport extends Task {
    product?: string;
    version?: string;
    module?: TaskModule;
    os?: OperatingSystem;
    osOther?: string;
    browser?: Browser;
    browserOther?: string;
    severity?: Severity;
    status?: Status;
    error?: string;
    description?: string;
    reproduceSteps?: string;
    expectedResult?: string;
    actualResult?: string;
}

export interface EntityApproval extends Task {
    entityIri?: TTIriRef;
    approvalType?: ApprovalType;
}

export interface NamespaceRequest extends Task {
    namespacePermission?: NamespacePermissionJava;
}

export interface RoleRequest extends Task {
    role?: UserRole;
}

export interface Task {
    id?: TTIriRef;
    createdBy?: string;
    type?: TaskType;
    state?: TaskState;
    assignedTo?: string;
    dateCreated?: Date;
    history?: TaskHistory[];
    hostUrl?: string;
}

export interface TaskHistory {
    predicate?: string;
    originalObject?: string;
    newObject?: string;
    changeDate?: Date;
    modifiedBy?: string;
    dateTime?: Date;
}

export interface VocabEnum {
}

export interface VocabUtils {
}

export interface Context {
    publisher?: string;
    system?: string;
    schema?: string;
    table?: string;
    field?: string;
}

/**
 * Class representing an IRI
 */
export interface TTIriRef extends TTValue, Serializable {
    name?: string;
    description?: string;
    iri: string;
}

export interface Serializable {
}

export interface TTArray extends Serializable {
    elements?: TTValue[];
    list?: boolean;
}

export interface TTContext extends Serializable {
    nameSpaces?: TTPrefix[];
    prefixes?: TTPrefix[];
}

export interface Throwable extends Serializable {
    cause?: Throwable;
    stackTrace?: StackTraceElement[];
    message?: string;
    suppressed?: Throwable[];
    localizedMessage?: string;
}

export interface StackTraceElement extends Serializable {
    classLoaderName?: string;
    moduleName?: string;
    moduleVersion?: string;
    methodName?: string;
    fileName?: string;
    lineNumber?: number;
    className?: string;
    nativeMethod?: boolean;
}

export interface Exception extends Throwable {
}

export interface SecurityService {
}

export interface UserJava {
    id?: string;
    username?: string;
    email?: string;
    displayName?: string;
    password?: string;
    avatar?: string;
    roles?: UserRole[];
    organisations?: string[];
    theme?: PrimeVuePresetThemes;
    primaryColor?: PrimeVueColors;
    surfaceColor?: PrimeVueColors;
    darkMode?: boolean;
    fontSize?: FontSize;
    favourites?: string[];
    recentActivity?: RecentActivityItemDto[];
    namespaces?: NamespacePermissionJava[];
}

export interface Organisation {
    Name?: string;
    OrgId?: OrgId;
    Status?: string;
    orgRecordClass?: string;
    GeoLoc?: OrgGeoLocation;
    Roles?: OrgRoles;
    Rels?: OrgRelationships;
}

export interface OrgRole {
    id?: string;
    Status?: string;
    code?: string;
    displayName?: string;
}

export interface TTPrefix {
    iri?: string;
    prefix?: string;
    name?: string;
}

export interface TTNode extends TTValue, Serializable {
    iri?: string;
    predicateMap?: { [index: string]: TTArray };
}

export interface NamespacePermissionJava {
    iri?: NAMESPACE;
    read?: boolean;
    write?: boolean;
}

export interface TTValue extends Serializable {
}

export interface RecentActivityItemDto {
    iri?: string;
    dateTime?: Date;
    action?: string;
}

export interface OrgId {
    extension?: string;
}

export interface OrgGeoLocation {
    Location?: OrgLocation;
}

export interface OrgRoles {
    Role?: OrgRole[];
}

export interface OrgRelationships {
    Rel?: OrgRelationship[];
}

export interface Comparable<T> {
}

export interface OrgLocation {
    AddrLn1?: string;
    AddrLn2?: string;
    AddrLn3?: string;
    Town?: string;
    County?: string;
    PostCode?: string;
    Country?: string;
    UPRN?: string;
}

export interface OrgRelationship {
    Status?: string;
    Target?: OrgRelTarget;
    id?: string;
}

export interface OrgRelTarget {
    OrgId?: OrgId;
}





































































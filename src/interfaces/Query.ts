import { IMQType, RuleAction } from "@/enums";
import { Entail } from "@/enums";
import { Prefix } from "@/interfaces/Prefix";
import { TTIriRef } from "@/interfaces/TTIriRef";



import { FunctionClause } from "./FunctionClause";
import { GroupBy } from "./GroupBy";
import { Having } from "./Having";
import { IriLD } from "./IriLD";
import { Node } from "./Node";
import { OrderLimit } from "./OrderLimit";
import { Path } from "./Path";
import { Return } from "./Return";
import { Where } from "./Where";




export interface Query extends IriLD {
  notExists?: boolean;
  ifTrue?: RuleAction;
  ifFalse?: RuleAction;
  nodeRef?: string;
  typeOf?: Node;
  is?: Node;
  and?: Query[];
  or?: Query[];
  with? : Query[];
  where?: Where;
  then?: Query;
  graph?: Node;
  optional?: boolean;
  parameter?: string;
  function?: FunctionClause;
  entailment?: Entail;
  baseRule?: boolean;
  ruleNumber?: number;
  inverse?: boolean;
  activeOnly?: boolean;
  rule?: Query[];
  libraryItem?: string;
  invalid?: boolean;
  groupBy?: GroupBy[];
  orderBy?: OrderLimit;
  asDescription?: string;
  errorMessage?: string;
  draft?: boolean;
  having?: Having;
  description?: string;
  path?: Path[];
  node?: string;
  return?: Return[];
  prefixes?: Prefix[];
  columnGroup?: Query[];
  imQuery?: string;
  parentResult?: any;
  persistentIri?: TTIriRef;
  bindAs?: string;
  queryType?: IMQType;
  iri?: string;
  name?: string;
}

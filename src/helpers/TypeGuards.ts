import { BugReport, PropertyShape, TTBundle, TTIriRef, Task } from "../models";
import { isObjectHasKeys } from "./DataTypeCheckers";

export function isAliasIriRef(data: unknown): data is { iri: string; name?: string } {
  if (data && isObjectHasKeys(data as { iri: string; name?: string }, ["iri"])) return true;
  else return false;
}

export function isBoolGroup(data: unknown): data is { conjunction: string; items: any[]; type: string; ecl?: string } {
  if (data && (data as { conjunction: string; items: any[]; type: string; ecl?: string }).type === "BoolGroup") return true;
  else return false;
}

export default {
  isAliasIriRef,
  isBoolGroup
};

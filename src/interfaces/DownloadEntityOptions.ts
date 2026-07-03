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

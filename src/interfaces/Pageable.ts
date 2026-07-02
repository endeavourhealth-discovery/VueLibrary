export interface Pageable<T> {
  totalCount?: number;
  currentPage?: number;
  pageSize?: number;
  result?: T[];
}

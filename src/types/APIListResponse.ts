export type APIListResponse<T> = {
  data: T
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalResults: number
}

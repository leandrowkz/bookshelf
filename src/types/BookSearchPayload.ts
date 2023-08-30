export type BookSearchPayload = {
  title?: string
  isbn?: string[]
  categories?: string[]
  authorName?: string
  pagination?: {
    page?: number
    itemsPerPage?: number
  }
}

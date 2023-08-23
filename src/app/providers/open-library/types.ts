import type { getBookDetails } from './actions/getBookDetails'

export type OpenLibraryProvider = {
  getBookDetails: typeof getBookDetails
}

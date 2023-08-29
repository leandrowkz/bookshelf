import { searchBooks } from '@/app/providers/open-library/actions/searchBooks'
import { getBookDetails } from '@/app/providers/open-library/actions/getBookDetails'
import type { BookProvider } from '@/types/BookProvider'

export function useOpenLibraryProvider(): BookProvider {
  return {
    getBookDetails,
    searchBooks,
  }
}

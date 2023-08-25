import { searchBooks } from '@/app/providers/google-books/actions/searchBooks'
import { getBookDetails } from '@/app/providers/google-books/actions/getBookDetails'
import type { BookProvider } from '@/types/BookProvider'

export function useGoogleBooksProvider(): BookProvider {
  return {
    searchBooks,
    getBookDetails,
  }
}

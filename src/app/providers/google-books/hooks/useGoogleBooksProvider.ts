import { searchBooks } from '@/app/providers/google-books/actions/searchBooks'
import { getAuthorBooks } from '@/app/providers/google-books/actions/getAuthorBooks'
import { getAuthorDetails } from '@/app/providers/google-books/actions/getAuthorDetails'
import { getBookCovers } from '@/app/providers/google-books/actions/getBookCovers'
import { getBookDetails } from '@/app/providers/google-books/actions/getBookDetails'
import { getBooksSimilar } from '@/app/providers/google-books/actions/getBooksSimilar'
import { getCategoryBooks } from '@/app/providers/google-books/actions/getCategoryBooks'
import { getCollectionBooks } from '@/app/providers/google-books/actions/getCollectionBooks'
import { getCollections } from '@/app/providers/google-books/actions/getCollections'
import type { BookProvider } from '@/types/BookProvider'

export function useGoogleBooksProvider(): BookProvider {
  return {
    searchBooks,
    getAuthorBooks,
    getAuthorDetails,
    getBookCovers,
    getBookDetails,
    getBooksSimilar,
    getCategoryBooks,
    getCollectionBooks,
    getCollections,
  }
}

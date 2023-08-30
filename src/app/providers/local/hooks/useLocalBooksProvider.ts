import { searchBooks } from '@/app/providers/local/actions/searchBooks'
import { getAuthorBooks } from '@/app/providers/local/actions/getAuthorBooks'
import { getAuthorDetails } from '@/app/providers/local/actions/getAuthorDetails'
import { getBookCovers } from '@/app/providers/local/actions/getBookCovers'
import { getBookDetails } from '@/app/providers/local/actions/getBookDetails'
import { getBooksSimilar } from '@/app/providers/local/actions/getBooksSimilar'
import { getCategoryBooks } from '@/app/providers/local/actions/getCategoryBooks'
import { getCollectionBooks } from '@/app/providers/local/actions/getCollectionBooks'
import { getCollections } from '@/app/providers/local/actions/getCollections'
import type { BookProvider } from '@/types/BookProvider'

export function useLocalBooksProvider(): BookProvider {
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

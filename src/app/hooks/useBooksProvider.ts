import type { BookProvider } from '@/types/BookProvider'
import { useGoogleBooksProvider } from '@/app/providers/google-books'

export function useBooksProvider(provider: BooksProvider): BookProvider {
  switch (provider) {
    case 'google-books':
      return useGoogleBooksProvider()

    case 'open-library':
      throw Error('NOT IMPLEMENTED YET')

    default:
      throw Error('Provider not found')
  }
}

export const provider = useBooksProvider('google-books')

import { useGoogleBooksProvider } from '@/app/providers/google-books'
import type { BookProvider } from '@/types/BookProvider'

export function useBooksProvider(provider: BooksProvider): BookProvider {
  switch (provider) {
    case 'google-books':
      return useGoogleBooksProvider()

    case 'open-library':
      throw Error('Not implemented yet')

    default:
      throw Error('Provider not found')
  }
}

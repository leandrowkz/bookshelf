import type { BookProvider } from '@/types/BookProvider'
import { useGoogleBooksProvider } from '@/app/providers/google-books'
import { useOpenLibraryProvider } from '@/app/providers/open-library'

export function useBooksProvider(provider: BooksProvider): BookProvider {
  switch (provider) {
    case 'google-books':
      return useGoogleBooksProvider()

    case 'open-library':
      return useOpenLibraryProvider()

    default:
      throw Error('Provider not found')
  }
}

export const provider = useBooksProvider('google-books')

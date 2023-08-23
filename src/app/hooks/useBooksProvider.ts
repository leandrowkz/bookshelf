import { type GoogleBooksProvider, useGoogleBooksProvider } from '@/app/providers/google-books'
import { type OpenLibraryProvider, useOpenLibraryProvider } from '@/app/providers/open-library'

type BooksProviderHook<T extends BooksProvider> = T extends 'google-books'
  ? GoogleBooksProvider
  : T extends 'open-library'
  ? OpenLibraryProvider
  : never

export function useBooksProvider<T extends BooksProvider>(provider: T): BooksProviderHook<T> {
  switch (provider) {
    case 'google-books':
      return useGoogleBooksProvider() as BooksProviderHook<T>

    case 'open-library':
      return useOpenLibraryProvider() as BooksProviderHook<T>

    default:
      throw Error('Provider not found')
  }
}

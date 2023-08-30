import type { BookProvider } from '@/types/BookProvider'
import { useGoogleBooksProvider } from '@/app/providers/google-books'

export function useBooksProvider(provider: BookProviderType): BookProvider {
  switch (provider) {
    case 'google-books':
      return useGoogleBooksProvider()

    case 'open-library':
      throw Error('NOT IMPLEMENTED')

    default:
      throw Error('Provider not found')
  }
}

export const google = useBooksProvider('google-books')

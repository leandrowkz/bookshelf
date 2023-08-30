import type { BookProvider } from '@/types/BookProvider'
import { useGoogleBooksProvider } from '@/app/providers/google-books'
import { useLocalBooksProvider } from '@/app/providers/local'

export function useBooksProvider(provider: BookProviderType): BookProvider {
  switch (provider) {
    case 'google-books':
      return useGoogleBooksProvider()

    case 'local':
      return useLocalBooksProvider()

    case 'open-library':
      throw Error('NOT IMPLEMENTED YET')

    default:
      throw Error('Provider not found')
  }
}

export const google = useBooksProvider('google-books')
export const local = useBooksProvider('local')

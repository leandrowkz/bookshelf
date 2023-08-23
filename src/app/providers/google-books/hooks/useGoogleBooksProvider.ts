import type { GoogleBooksProvider } from '@/app/providers/google-books/types'
import { search } from '@/app/providers/google-books/actions/search'

export function useGoogleBooksProvider(): GoogleBooksProvider {
  return {
    search,
  }
}

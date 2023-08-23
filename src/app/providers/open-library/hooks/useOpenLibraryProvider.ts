import type { OpenLibraryProvider } from '../types'
import { getBookDetails } from '../actions/getBookDetails'

export function useOpenLibraryProvider(): OpenLibraryProvider {
  return {
    getBookDetails,
  }
}

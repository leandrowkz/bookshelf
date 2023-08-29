import type { Book } from '@/types/Book'
import type { BookSearchPayload } from '@/types/BookSearchPayload'
import type { OpenLibraryListResponse, Work } from '../types'
import { useOpenLibraryAPI } from '../hooks/useOpenLibraryAPI'
import { useWorkTransformer } from '../hooks/useWorkTransformer'

export async function searchBooks(payload: BookSearchPayload): Promise<Book[]> {
  const api = useOpenLibraryAPI()

  const searchPayload = {
    q: String(payload.title),
  }

  const { docs }: OpenLibraryListResponse<Work> = await api.GET('/search.json', searchPayload)

  return docs.map((work) => useWorkTransformer(work))
}

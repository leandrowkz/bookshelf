import type { Book } from '@/types/Book'
import type { BookSearchPayload } from '@/types/BookSearchPayload'
import type { GoogleBooksSearchPayload, VolumesResponse } from '../types'
import { useGoogleBooksAPI } from '../hooks/useGoogleBooksAPI'
import { useVolumeTransformer } from '../hooks/useVolumeTransformer'

export async function searchBooks(payload: BookSearchPayload): Promise<Book[]> {
  const api = useGoogleBooksAPI()

  const searchPayload: GoogleBooksSearchPayload = {
    q: String(payload.title),
  }

  const { items }: VolumesResponse = await api.GET('/volumes', searchPayload)

  return items.map((volume) => useVolumeTransformer(volume))
}

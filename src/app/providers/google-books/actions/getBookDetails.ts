import type { Book } from '@/types/Book'
import type { Volume } from '../types'
import { useGoogleBooksAPI } from '../hooks/useGoogleBooksAPI'
import { useVolumeTransformer } from '../hooks/useVolumeTransformer'

export async function getBookDetails(bookId: string): Promise<Book> {
  const api = useGoogleBooksAPI()

  const volume = await api.GET<Volume>(`/volumes/${bookId}`)

  return useVolumeTransformer(volume)
}

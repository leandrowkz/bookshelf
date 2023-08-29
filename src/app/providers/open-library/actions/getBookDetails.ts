import type { Book } from '@/types/Book'
import type { Work } from '../types'
import { useOpenLibraryAPI } from '../hooks/useOpenLibraryAPI'
import { useWorkTransformer } from '../hooks/useWorkTransformer'

export async function getBookDetails(bookId: string): Promise<Book> {
  const api = useOpenLibraryAPI()

  const volume = await api.GET<Work>(`/works/${bookId}.json`)

  return useWorkTransformer(volume)
}

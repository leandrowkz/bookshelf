import type { Book } from '@/types/Book'
import type { SearchPayload, VolumesResponse } from '../types'
import { useGoogleBooksAPI } from '../hooks/useGoogleBooksAPI'
import { useVolumeTransformer } from '../hooks/useVolumeTransformer'

export async function search(payload: SearchPayload): Promise<Book[]> {
  const api = useGoogleBooksAPI()

  const { items }: VolumesResponse = await api.GET('/volumes', payload)

  return items.map((volume) => useVolumeTransformer(volume))
}

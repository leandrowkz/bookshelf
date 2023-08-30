import type { Book } from '@/types/Book'
import type { BookSearchPayload } from '@/types/BookSearchPayload'
import type { GoogleBooksSearchPayload, VolumesResponse } from '../types'
import { useGoogleBooksAPI } from '../hooks/useGoogleBooksAPI'
import { useVolumeTransformer } from '../hooks/useVolumeTransformer'

export async function searchBooks(
  payload: BookSearchPayload,
  options?: Omit<GoogleBooksSearchPayload, 'q'>
): Promise<Book[]> {
  const api = useGoogleBooksAPI()
  const searchPayload: GoogleBooksSearchPayload = { ...options, q: '' }

  if (payload.title) {
    searchPayload.q = payload.title
  }

  if (payload.authorName) {
    searchPayload.q += `+inauthor:${payload.authorName}`
  }

  if (payload.categories) {
    searchPayload.q += `+subject:${payload.categories.join(',')}`
  }

  if (payload.isbn) {
    searchPayload.q += `+isbn:${payload.isbn.join(',')}`
  }

  const itemsPerPage: number =
    payload.pagination?.itemsPerPage ||
    Number(process.env.NEXT_PUBLIC_DEFAULT_SEARCH_ITEMS_PER_PAGE)

  if (itemsPerPage) {
    searchPayload.maxResults = itemsPerPage
  }

  if (payload.pagination?.page) {
    searchPayload.startIndex = itemsPerPage * payload.pagination?.page
  }

  try {
    const { items }: VolumesResponse = await api.GET('/volumes', searchPayload)

    return items.map((volume) => {
      const book = useVolumeTransformer(volume)

      book.description = undefined
      book.purchaseInfo = undefined

      return book
    })
  } catch (e) {
    console.error(e)
    return []
  }
}

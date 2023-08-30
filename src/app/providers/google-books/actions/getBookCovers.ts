import type { Volume } from '../types'
import { useGoogleBooksAPI } from '../hooks/useGoogleBooksAPI'

export async function getBookCovers(bookId: string): Promise<string[]> {
  const covers: string[] = []
  const api = useGoogleBooksAPI()
  const volume = await api.GET<Volume>(`/volumes/${bookId}`)

  const { volumeInfo } = volume

  const coverKeys = ['small', 'smallThumbnail', 'thumbnail', 'medium', 'large', 'extraLarge']

  coverKeys.forEach((key) => {
    if (volumeInfo.imageLinks && Object.hasOwn(volumeInfo.imageLinks, key)) {
      // @ts-expect-error image links props
      covers.push(volumeInfo.imageLinks[key])
    }
  })

  volumeInfo.industryIdentifiers?.forEach((item) => {
    item.type === 'ISBN_13'
    if (item.type.toUpperCase().startsWith('ISBN')) {
      covers.push(`https://covers.openlibrary.org/b/isbn/${item.identifier}-M.jpg`)
    }
  })

  return covers
}

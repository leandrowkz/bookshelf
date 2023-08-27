import type { Book } from '@/types/Book'
import type { Author } from '@/types/Author'
import type { Volume } from '../types'

export function useVolumeTransformer(input: Volume): Book {
  const { volumeInfo } = input

  const authors = volumeInfo.authors.map(
    (author) =>
      ({
        id: author,
        name: author,
        bio: null,
        birthdate: null,
        nationality: null,
        picture: null,
      } as Author)
  )

  const cover =
    volumeInfo.imageLinks?.small ||
    volumeInfo.imageLinks?.medium ||
    volumeInfo.imageLinks?.thumbnail ||
    volumeInfo.imageLinks?.large ||
    volumeInfo.imageLinks?.extraLarge ||
    volumeInfo.imageLinks?.smallThumbnail ||
    volumeInfo.imageLinks?.extraLarge ||
    null

  const categories = Array.from(
    new Set((volumeInfo.categories || []).map((cat) => cat.split(' / ')).flat())
  )

  const book: Book = {
    id: input.id,
    title: volumeInfo.title,
    description: volumeInfo.description,
    publisher: volumeInfo.publisher,
    publishedAt: volumeInfo.publishedDate,
    pageCount: volumeInfo.pageCount,
    cover,
    language: volumeInfo.language,
    isbn: volumeInfo.industryIdentifiers.map((item) => item.identifier),
    authors,
    categories,
    rating: null,
  }

  console.log(book)

  return book
}

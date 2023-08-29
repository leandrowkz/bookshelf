import type { Book } from '@/types/Book'
import type { Author } from '@/types/Author'
import type { Work } from '../types'

export function useWorkTransformer(input: Work): Book {
  throw Error('NOT IMPLEMENTED')
  // const authors = input.author_key.map(
  //   (key, idx) =>
  //     ({
  //       id: key,
  //       name: input.author_name[idx],
  //       bio: null,
  //       birthdate: null,
  //       nationality: null,
  //       picture: null,
  //     } as Author)
  // )

  // const book: Book = {
  //   id: input.key.replace('works/', ''),
  //   title: input.title,
  //   description: '',
  //   publisher: input.publisher[0],
  //   publishedAt: String(input.publish_year[0]),
  //   pageCount: input.number_of_pages_median,
  //   cover: `https://covers.openlibrary.org/b/olid/${input.cover_edition_key}-M.jpg`,
  //   language: input.language[0],
  //   isbn: input.isbn,
  //   authors,
  //   categories: [],
  //   rating: input.ratings_average,
  // }

  // return book
}

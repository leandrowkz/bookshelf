import type { Author } from './Author'
// import type { BookMetadata } from './BookMetadata'

export type Book = {
  id: string
  isbn: string[]
  title: string
  description: Nullable<string>
  authors: Author[]
  categories: string[]
  cover: Nullable<string>
  publisher: Nullable<string>
  publishedAt: Nullable<string>
  pageCount: Nullable<number>
  language: LanguageCode
  rating: Nullable<number>
  // metadata: BookMetadata
}

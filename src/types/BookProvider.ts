import type { Author } from '@/types/Author'
import type { Book } from '@/types/Book'
import type { BookSearchPayload } from '@/types/BookSearchPayload'

export type BookProvider = {
  searchBooks: (payload: BookSearchPayload) => Async<Book[]>
  getAuthorDetails: (authorId: string) => Async<Author>
  getAuthorBooks: (authorId: string) => Async<Book[]>
  getCategoryBooks: (categoryId: string) => Async<Book[]>
  getBookDetails: (bookId: string) => Async<Book>
  getBooksSimilar: (bookId: string) => Async<Book[]>
  getBookCovers: (bookId: string) => Async<string[]>
}

import type { Book } from '@/types/Book'
import type { BookSearchPayload } from '@/types/BookSearchPayload'

export type BookProvider = {
  searchBooks: (payload: BookSearchPayload) => Promise<Book[]> | Book[]
  getBookDetails: (bookId: string) => Promise<Book> | Book
}

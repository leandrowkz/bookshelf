/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Book } from '@/types/Book'
import type { BookSearchPayload } from '@/types/BookSearchPayload'

export async function searchBooks(payload: BookSearchPayload): Promise<Book[]> {
  throw Error('NOT IMPLEMENTED')
}

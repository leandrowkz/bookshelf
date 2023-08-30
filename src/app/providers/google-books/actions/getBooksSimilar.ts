import type { Book } from '@/types/Book'
import { searchBooks } from './searchBooks'
import { getBookDetails } from './getBookDetails'

export async function getBooksSimilar(bookId: string): Promise<Book[]> {
  const book = await getBookDetails(bookId)

  const books = await searchBooks({ title: book.title }, { projection: 'full' })

  return books.filter((item) => item.title !== book.title)
}

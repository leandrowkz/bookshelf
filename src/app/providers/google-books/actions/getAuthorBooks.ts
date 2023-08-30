import type { Book } from '@/types/Book'
import { searchBooks } from './searchBooks'

export async function getAuthorBooks(authorId: string): Promise<Book[]> {
  return searchBooks({ authorName: authorId })
}

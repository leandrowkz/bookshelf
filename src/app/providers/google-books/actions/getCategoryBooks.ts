import type { Book } from '@/types/Book'
import { searchBooks } from './searchBooks'

export async function getCategoryBooks(categoryId: string): Promise<Book[]> {
  return searchBooks({ categories: [categoryId] })
}

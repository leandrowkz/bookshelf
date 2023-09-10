import { NextResponse } from 'next/server'
import { google } from '@/app/hooks/useBooksProvider'
import type { Book } from '@/types/Book'
import { useAuthUser } from '@/app/hooks/useAuthUser'
import { useCollectionRepository } from '@/app/hooks/useCollectionRepository'

/**
 * Get all books inside a collection, for the current user.
 *
 * GET /collections/:collectionId/books
 */
export async function GET(request: Request, { params }: RequestParamsWithId) {
  try {
    const books: Book[] = []
    const user = await useAuthUser()

    if (user) {
      const repository = useCollectionRepository()

      const { data } = await repository.getCollectionBooks(params.collectionId, user.id)

      if (data) {
        await Promise.all(
          data.map(async (row) => {
            const books = await google.searchBooks({ isbn: [row.isbn] })

            if (books[0]) {
              const book = await google.getBookDetails(books[0].id)
              books.push(book)
            }
          })
        )
      }
    }

    return NextResponse.json(books)
  } catch (e) {
    console.error(e)
    return NextResponse.json([])
  }
}

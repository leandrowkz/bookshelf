import { NextResponse } from 'next/server'
import { google } from '@/app/hooks/useBooksProvider'
import type { Book } from '@/types/Book'
import { useAuthUser } from '@/app/hooks/useAuthUser'
import { useCollectionRepository } from '@/app/hooks/useCollectionRepository'

type POSTBodyRequest = {
  bookIsbn: string
}

/**
 * Get all books inside a collection, for the current user.
 *
 * GET /api/collections/:collectionId/books
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

/**
 * Adds a book to a collection.
 *
 * POST /api/collections/:collectionId/books
 * body => typeof POSTBodyRequest
 */
export async function POST(request: Request, { params }: RequestParamsWithId) {
  try {
    const user = await useAuthUser()

    if (user) {
      const repository = useCollectionRepository()
      const body = (await request.json()) as POSTBodyRequest

      const { bookIsbn } = body
      const { collectionId } = params

      switch (collectionId) {
        case 'want-read':
          await repository.addBookToWantRead(bookIsbn, user.id)
          break

        case 'currently-reading':
          await repository.addBookToCurrentlyReading(bookIsbn, user.id)
          break

        case 'completed-readings':
          await repository.addBookToCompletedReadings(bookIsbn, user.id)
          break

        case 'dropped-readings':
          await repository.addBookToDroppedReadings(bookIsbn, user.id)
          break

        default:
          throw new Error('Invalid collection')
          break
      }
    }

    return NextResponse.json({})
  } catch (e) {
    console.error(e)
    return NextResponse.json({})
  }
}

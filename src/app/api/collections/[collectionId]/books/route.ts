import { NextResponse } from 'next/server'
import { google } from '@/app/hooks/useBooksProvider'
import type { Book } from '@/types/Book'
import { useAuthUser } from '@/app/hooks/useAuthUser'
import { useCollectionRepository } from '@/app/hooks/useCollectionRepository'
import { z } from 'zod'

const PUTBodySchema = z.object({
  bookIsbn: z.string(),
  collection: z.enum(['want-read', 'currently-reading', 'completed-readings', 'dropped-readings']),
  startedReadingAt: z.string().optional(),
  droppedReadingAt: z.string().optional(),
  completedReadingAt: z.string().optional(),
})

type POSTBodyRequest = {
  bookIsbn: string
}

type PUTBodyRequest = z.infer<typeof PUTBodySchema>

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
      const userId = user.id
      const collectionKey = params.collectionId

      const { data } = await repository.getCollectionBooks({ userId, collectionKey })

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

      const userId = user.id
      const { bookIsbn } = body
      const { collectionId } = params

      switch (collectionId) {
        case 'want-read':
          await repository.addBookToWantRead({ bookIsbn, userId })
          break

        case 'currently-reading':
          await repository.addBookToCurrentlyReading({ bookIsbn, userId })
          break

        case 'completed-readings':
          await repository.addBookToCompletedReadings({ bookIsbn, userId })
          break

        case 'dropped-readings':
          await repository.addBookToDroppedReadings({ bookIsbn, userId })
          break

        default:
          throw new Error('Invalid collection')
          break
      }
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    const error = e instanceof Error ? e.message : e
    return NextResponse.json({ success: false, error })
  }
}

/**
 * Updates a book collection or book details. For updating progress, there is a specific route.
 *
 * PUT /api/collections/:collectionId/books
 * body => typeof POSTBodyRequest
 */
export async function PUT(request: Request, { params }: RequestParamsWithId) {
  try {
    const user = await useAuthUser()

    if (user) {
      const body = (await request.json()) as PUTBodyRequest
      PUTBodySchema.parse(body)

      const userId = user.id
      const { bookIsbn } = body
      const { collectionId } = params

      const repository = useCollectionRepository()

      await repository.updateBookCollectionDetails({
        bookIsbn,
        userId,
        collectionKey: collectionId,
        startedReadingAt: body.startedReadingAt || null,
        droppedReadingAt: body.startedReadingAt || null,
        completedReadingAt: body.startedReadingAt || null,
      })
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    const error = e instanceof Error ? e.message : e
    return NextResponse.json({ success: false, error })
  }
}

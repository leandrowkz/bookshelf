import { NextResponse } from 'next/server'
import { useAuthUser } from '@/app/hooks/useAuthUser'
import { useCollectionRepository } from '@/app/hooks/useCollectionRepository'

/**
 * Adds a book to a collection.
 *
 * POST /api/collections/books/add
 * body => { isbn: number }
 */
export async function POST(request: Request, { params }: RequestParamsWithId) {
  try {
    const user = await useAuthUser()

    if (user) {
      const repository = useCollectionRepository()
      const body = await request.json()
      const { collectionId } = params

      await repository.addBookToCollection(String(body.bookIsbn), collectionId, user.id)
    }

    return NextResponse.json({})
  } catch (e) {
    console.error(e)
    return NextResponse.json({})
  }
}

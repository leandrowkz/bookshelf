import { NextResponse } from 'next/server'
import { useAuthUser } from '@/app/hooks/useAuthUser'
import { useCollectionRepository } from '@/app/hooks/useCollectionRepository'

/**
 * Mark a book as favorite.
 *
 * POST /api/favorites/books/add
 * body => { bookIsbn: number }
 */
export async function POST(request: Request) {
  try {
    const user = await useAuthUser()

    if (user) {
      const repository = useCollectionRepository()
      const body = await request.json()

      await repository.addBookAsFavorite(String(body.bookIsbn), user.id)
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    const error = e instanceof Error ? e.message : e
    return NextResponse.json({ success: false, error })
  }
}

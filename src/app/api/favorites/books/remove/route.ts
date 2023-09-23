import { NextResponse } from 'next/server'
import { useAuthUser } from '@/app/hooks/useAuthUser'
import { useCollectionRepository } from '@/app/hooks/useCollectionRepository'

/**
 * Remove book as favorite.
 *
 * POST /api/favorites/books/remove
 * body => { bookIsbn: number }
 */
export async function POST(request: Request) {
  try {
    const user = await useAuthUser()

    if (user) {
      const repository = useCollectionRepository()
      const body = await request.json()

      await repository.removeBookAsFavorite({ bookIsbn: String(body.bookIsbn), userId: user.id })
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    const error = e instanceof Error ? e.message : e
    return NextResponse.json({ success: false, error })
  }
}

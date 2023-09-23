import { NextResponse } from 'next/server'
import { useAuthUser } from '@/app/hooks/useAuthUser'
import { useCollectionRepository } from '@/app/hooks/useCollectionRepository'

/**
 * Add a review for a book.
 *
 * POST /api/reviews/books/add
 * body => { bookIsbn: number, review: Review }
 */
export async function POST(request: Request) {
  try {
    const user = await useAuthUser()

    if (user) {
      const repository = useCollectionRepository()
      const body = await request.json()

      const data = {
        userId: user.id,
        bookIsbn: body.bookIsbn,
        review: {
          rating: Number(body.review.rating),
          recommend: Boolean(body.review.recommend),
          title: body.review.title,
          description: body.review.description,
        },
      }

      await repository.addBookReview(data)
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    const error = e instanceof Error ? e.message : e
    return NextResponse.json({ success: false, error })
  }
}

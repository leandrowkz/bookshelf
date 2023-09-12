import { NextResponse } from 'next/server'
import { useAuthUser } from '@/app/hooks/useAuthUser'
import { useCollectionRepository } from '@/app/hooks/useCollectionRepository'
import type { CollectionType } from '@/types/CollectionType'

/**
 * The body request expected keys.
 * The validation will be done according to the collectionKey param. For example:
 * 1) If the collectionKey === 'dropped-readings' then droppedReadingAt must be filled.
 * 2) If the collectionKey === 'completes-readings' then completedReadingAt must be filled.
 * 3) If the collectionKey === 'currently-reading' then lastProgressUpdatedAt must be filled.
 * 4) ...
 */
type BodyRequest = {
  bookIsbn: string
  collectionKey: CollectionType
  progress?: Nullable<number>
  pagesRead?: Nullable<number>
  startedReadingAt?: Nullable<string>
  droppedRadingAt?: Nullable<string>
  completedReadingAt?: Nullable<string>
  lastProgressUpdatedAt?: Nullable<string>
}

import { z } from 'zod'

const CurrentlyReadingSchema = z.object({
  bookIsbn: z.string(),
  collectionKey: z.literal('currently-reading'),
  progress: z.number(),
  pagesRead: z.number(),
  startedReadingAt: z.date(),
})

const CompletedReadingSchema = z.object({
  bookIsbn: z.string(),
  collectionKey: z.literal('completed-readings'),
  completedReadingAt: z.date(),
})

const DroppedReadingSchema = z.object({
  bookIsbn: z.string(),
  collectionKey: z.literal('dropped-readings'),
  droppedReadingAt: z.date(),
})

const WantToReadSchema = z.object({
  bookIsbn: z.string(),
  collectionKey: z.literal('want-read'),
})

/**
 * Adds a book to a collection.
 *
 * POST /api/collections/books/add
 * body => typeof BodyRequest
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

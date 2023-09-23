import { NextResponse } from 'next/server'
import type { Collection } from '@/types/Collection'
import { useAuthUser } from '@/app/hooks/useAuthUser'
import { useCollectionRepository } from '@/app/hooks/useCollectionRepository'

export async function GET() {
  const { getCountBooksInCollection } = useCollectionRepository()

  const collections: Collection[] = [
    {
      id: 'want-read',
      title: 'Want to read',
      description: 'Books I want to read.',
      countBooks: 0,
    },
    {
      id: 'currently-reading',
      title: 'Currently reading',
      description: `Books I'm currently reading.`,
      countBooks: 0,
    },
    {
      id: 'completed-readings',
      title: 'Completed readings',
      description: `Books I've already finished reading.`,
      countBooks: 0,
    },
    {
      id: 'dropped-readings',
      title: 'Dropped readings',
      description: `Books I've quit reading.`,
      countBooks: 0,
    },
  ]

  const user = await useAuthUser()

  if (user) {
    const [countWantRead, countReading, countCompleted, countDropped] = await Promise.all([
      getCountBooksInCollection({ collectionKey: 'want-read', userId: user.id }),
      getCountBooksInCollection({ collectionKey: 'currently-reading', userId: user.id }),
      getCountBooksInCollection({ collectionKey: 'completed-readings', userId: user.id }),
      getCountBooksInCollection({ collectionKey: 'dropped-readings', userId: user.id }),
    ])

    collections[0].countBooks = countWantRead
    collections[1].countBooks = countReading
    collections[2].countBooks = countCompleted
    collections[3].countBooks = countDropped
  }

  return NextResponse.json(collections)
}

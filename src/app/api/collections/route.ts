import { NextResponse } from 'next/server'
import type { Collection } from '@/types/Collection'
import { getCollectionCountBooks } from '@/app/hooks/getCollectionCountBooks'
import { useAuthUser } from '@/app/hooks/useAuthUser'

export async function GET() {
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
      getCollectionCountBooks('want-read', user.id),
      getCollectionCountBooks('currently-reading', user.id),
      getCollectionCountBooks('completed-readings', user.id),
      getCollectionCountBooks('dropped-readings', user.id),
    ])

    collections[0].countBooks = countWantRead
    collections[1].countBooks = countReading
    collections[2].countBooks = countCompleted
    collections[3].countBooks = countDropped
  }

  return NextResponse.json(collections)
}

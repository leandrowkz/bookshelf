import { NextResponse } from 'next/server'
import type { Collection } from '@/types/Collection'

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

  return NextResponse.json(collections)
}

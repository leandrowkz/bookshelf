import { NextResponse } from 'next/server'
import { useBooksProvider } from '@/app/hooks/useBooksProvider'
import type { SearchPayload } from '@/app/providers/google-books'

export async function GET(request: Request) {
  const { search } = useBooksProvider('google-books')

  const params = Object.fromEntries(new URL(request.url).searchParams)

  const results = await search(params as unknown as SearchPayload)

  return NextResponse.json(results)
}

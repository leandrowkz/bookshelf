import { NextResponse } from 'next/server'
import { provider } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = String(searchParams.get('title'))

  const results = await provider.searchBooks({ title })

  return NextResponse.json(results)
}

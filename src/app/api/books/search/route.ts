import { NextResponse } from 'next/server'
import { google } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = String(searchParams.get('title'))

  const results = await google.searchBooks({ title })

  return NextResponse.json(results)
}

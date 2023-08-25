import { NextResponse } from 'next/server'
import { useBooksProvider } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request) {
  const { searchBooks } = useBooksProvider('google-books')

  const { searchParams } = new URL(request.url)
  const search = String(searchParams.get('search'))

  const results = await searchBooks({ search })

  return NextResponse.json(results)
}

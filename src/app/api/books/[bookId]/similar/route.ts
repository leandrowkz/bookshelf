import { NextResponse } from 'next/server'
import { provider } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  console.log(provider, params)
  const books = await provider.getBooksSimilar(params.bookId)

  return NextResponse.json(books)
}

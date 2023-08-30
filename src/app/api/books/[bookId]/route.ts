import { NextResponse } from 'next/server'
import { google } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  const book = await google.getBookDetails(params.bookId)

  return NextResponse.json(book)
}

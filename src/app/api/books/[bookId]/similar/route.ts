import { NextResponse } from 'next/server'
import { google } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  const books = await google.getBooksSimilar(params.bookId)

  return NextResponse.json(books)
}

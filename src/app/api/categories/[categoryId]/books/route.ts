import { NextResponse } from 'next/server'
import { google } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  const books = await google.getCategoryBooks(params.categoryId)

  return NextResponse.json(books)
}

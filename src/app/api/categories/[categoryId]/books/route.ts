import { NextResponse } from 'next/server'
import { provider } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  const books = await provider.getCategoryBooks(params.categoryId)

  return NextResponse.json(books)
}

import { NextResponse } from 'next/server'
import { local } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  const userId = '1'
  const books = await local.getCollectionBooks(params.collectionId, userId)

  return NextResponse.json(books)
}

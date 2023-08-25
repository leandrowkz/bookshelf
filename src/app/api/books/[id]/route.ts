import { NextResponse } from 'next/server'
import { useBooksProvider } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  const { getBookDetails } = useBooksProvider('google-books')

  const book = await getBookDetails(params.id)

  return NextResponse.json(book)
}

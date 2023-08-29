import { NextResponse } from 'next/server'
import { provider } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  const book = await provider.getBookDetails(params.id)

  return NextResponse.json(book)
}

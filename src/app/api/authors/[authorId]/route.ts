import { NextResponse } from 'next/server'
import { google } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  const author = await google.getAuthorDetails(params.authorId)

  return NextResponse.json(author)
}

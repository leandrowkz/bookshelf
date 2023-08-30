import { NextResponse } from 'next/server'
import { provider } from '@/app/hooks/useBooksProvider'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  const author = await provider.getAuthorDetails(params.authorId)

  return NextResponse.json(author)
}

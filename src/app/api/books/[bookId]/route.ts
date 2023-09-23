import { NextResponse } from 'next/server'
import { google } from '@/app/hooks/useBooksProvider'
import { getUserBookInfo } from '@/app/hooks/getUserBookInfo'
import { useAuthUser } from '@/app/hooks/useAuthUser'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  const book = await google.getBookDetails(params.bookId)
  const user = await useAuthUser()

  book.userInfo = await getUserBookInfo(String(user?.id), params.bookId)

  return NextResponse.json(book)
}

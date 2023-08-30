import { NextResponse } from 'next/server'
import { getUserBookInfo } from '@/app/hooks/getUserBookInfo'
import { getLoggedUser } from '@/app/hooks/getLoggedUser'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  const user = await getLoggedUser()

  const { review } = await getUserBookInfo(String(user?.id), params.bookId)

  return NextResponse.json(review)
}

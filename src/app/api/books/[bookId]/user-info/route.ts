import { NextResponse } from 'next/server'
import { getUserBookInfo } from '@/app/hooks/getUserBookInfo'
import { useAuthUser } from '@/app/hooks/useAuthUser'

export async function GET(request: Request, { params }: RequestParamsWithId) {
  const user = await useAuthUser()

  const userBookInfo = await getUserBookInfo(String(user?.id), params.bookId)

  return NextResponse.json(userBookInfo)
}

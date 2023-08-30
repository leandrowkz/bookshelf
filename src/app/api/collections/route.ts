import { NextResponse } from 'next/server'
import { local } from '@/app/hooks/useBooksProvider'

export async function GET() {
  const collections = await local.getCollections()

  return NextResponse.json(collections)
}

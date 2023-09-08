import { NextResponse } from 'next/server'
import { google } from '@/app/hooks/useBooksProvider'
import { useSupabase } from '@/app/hooks/useSupabase'
import type { Book } from '@/types/Book'
import { useAuthUser } from '@/app/hooks/useAuthUser'

export async function POST(request: Request, { params }: RequestParamsWithId) {
  try {
    const books: Book[] = []
    const supabase = useSupabase()
    const user = await useAuthUser()

    if (user) {
      const { data } = await supabase
        .from('users_collections')
        .select('*')
        .eq('collection_key', params.collectionId)
        .eq('user_id', user.id)

      if (data) {
        await Promise.all(
          data.map(async (row) => {
            const books = await google.searchBooks({ isbn: [row.isbn] })

            if (books[0]) {
              const book = await google.getBookDetails(books[0].id)
              books.push(book)
            }
          })
        )
      }
    }

    return NextResponse.json(books)
  } catch (e) {
    console.error(e)
    return NextResponse.json([])
  }
}

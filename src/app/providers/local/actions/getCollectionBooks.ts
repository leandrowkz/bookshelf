import { useSupabase } from '@/app/hooks/useSupabase'
import { type Book } from '@/types/Book'
import { type CollectionType } from '@/types/CollectionType'
import { searchBooks } from '../../google-books/actions/searchBooks'
import { getBookDetails } from '../../google-books/actions/getBookDetails'

export async function getCollectionBooks(
  collectionId: CollectionType,
  userId: string
): Promise<Book[]> {
  try {
    const books: Book[] = []
    const supabase = useSupabase()

    const { data } = await supabase
      .from('users_collections')
      .select('*')
      .eq('collection_key', collectionId)
      .eq('user_id', userId)

    if (data) {
      await Promise.all(
        data.map(async (row) => {
          const books = await searchBooks({ isbn: [row.isbn] })

          if (books[0]) {
            const book = await getBookDetails(books[0].id)
            books.push(book)
          }
        })
      )
    }

    return books
  } catch (e) {
    console.error(e)
    return []
  }
}

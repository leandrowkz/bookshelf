import { type CollectionType } from '@/types/CollectionType'
import { useSupabase } from './useSupabase'

export async function getCollectionBookExists(
  collection: CollectionType,
  isbn: string,
  userId: string
) {
  const supabase = useSupabase()

  const { data } = await supabase
    .from('users_books')
    .select('*')
    .eq('collection_key', collection)
    .eq('book_isbn', isbn)
    .eq('user_id', userId)

  return !!data?.length
}

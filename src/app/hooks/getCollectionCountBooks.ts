import { type CollectionType } from '@/types/CollectionType'
import { useSupabase } from './useSupabase'

export async function getCollectionCountBooks(collection: CollectionType, userId: string) {
  const supabase = useSupabase()

  const { count } = await supabase
    .from('users_books')
    .select('*', { count: 'exact' })
    .eq('user_id', userId)
    .eq('collection_key', collection)

  return count || 0
}

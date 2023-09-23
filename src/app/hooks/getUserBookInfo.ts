import { useSupabase } from './useSupabase'
import { google } from './useBooksProvider'
import type { UserBookInfo } from '@/types/UserBookInfo'
import { useDBUserBookInfoTransformer } from './useDBUserBookInfoTransformer'

export async function getUserBookInfo(userId: string, bookId: string): Promise<UserBookInfo> {
  const supabase = useSupabase()
  const book = await google.getBookDetails(bookId)

  const { data } = await supabase
    .from('users_books')
    .select('*')
    .eq('user_id', Number(userId))
    .eq('book_isbn', book.isbn)

  if (data?.length) {
    return useDBUserBookInfoTransformer(data[0])
  }

  return {
    userId: null,
    bookIsbn: null,
    collectionKey: null,
    startedReadingAt: null,
    droppedReadingAt: null,
    completedReadingAt: null,
    lastProgressUpdatedAt: null,
    progress: null,
    countPagesRead: null,
    review: null,
    favorite: false,
  }
}

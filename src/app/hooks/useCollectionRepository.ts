import { useSupabase } from './useSupabase'
import type { CollectionType } from '@/types/CollectionType'
import type { UserBookInfo } from '@/types/UserBookInfo'

export type UserBookRow = {
  user_id: string
  collection_key: CollectionType
  book_isbn: string
  is_favorite: Nullable<boolean>
  progress: Nullable<number>
  pages_read: Nullable<number>
  started_reading_at: Nullable<Date>
  dropped_reading_at: Nullable<Date>
  completed_reading_at: Nullable<Date>
  last_progress_updated_at: Nullable<Date>
  review_created_at: Nullable<Date>
  review_title: Nullable<string>
  review_description: Nullable<string>
  review_recommend: Nullable<boolean>
  review_rating: Nullable<number>
}

const supabase = useSupabase()

async function getCountBooksInCollection({
  userId,
  collectionKey,
}: Pick<UserBookInfo, 'collectionKey' | 'userId'>) {
  const { count } = await supabase
    .from('users_books')
    .select('*', { count: 'exact' })
    .eq('user_id', userId)
    .eq('collection_key', collectionKey)

  return count || 0
}

async function getCollectionBooks({
  userId,
  collectionKey,
}: Pick<UserBookInfo, 'collectionKey' | 'userId'>) {
  return supabase
    .from('users_collections')
    .select('*')
    .eq('user_id', userId)
    .eq('collection_key', collectionKey)
}

async function isBookInCollection({
  userId,
  bookIsbn,
  collectionKey,
}: Pick<UserBookInfo, 'bookIsbn' | 'userId' | 'collectionKey'>) {
  const { data } = await supabase
    .from('users_books')
    .select('*')
    .eq('user_id', userId)
    .eq('book_isbn', bookIsbn)
    .eq('collection_key', collectionKey)

  return !!data?.length
}

async function addBookAsFavorite({ userId, bookIsbn }: Pick<UserBookInfo, 'bookIsbn' | 'userId'>) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    is_favorite: true,
  })
}

async function removeBookAsFavorite({
  userId,
  bookIsbn,
}: Pick<UserBookInfo, 'bookIsbn' | 'userId'>) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    is_favorite: false,
  })
}

async function addBookReview({
  bookIsbn,
  userId,
  review,
}: Pick<UserBookInfo, 'userId' | 'bookIsbn' | 'review'>) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    review_created_at: new Date(),
    review_title: review?.title,
    review_description: review?.description,
    review_recommend: review?.recommend,
    review_rating: review?.rating,
  })
}

async function removeBookReview({ bookIsbn, userId }: Pick<UserBookInfo, 'bookIsbn' | 'userId'>) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    review_created_at: null,
    review_title: null,
    review_description: null,
    review_recommend: null,
    review_rating: null,
  })
}

async function addBookToCurrentlyReading({
  bookIsbn,
  userId,
}: Pick<UserBookInfo, 'bookIsbn' | 'userId'>) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    collection_key: 'currently-reading',
    started_reading_at: new Date(),
  })
}

async function addBookToDroppedReadings({
  bookIsbn,
  userId,
}: Pick<UserBookInfo, 'bookIsbn' | 'userId'>) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    collection_key: 'dropped-readings',
    dropped_reading_at: new Date(),
  })
}

async function addBookToCompletedReadings({
  bookIsbn,
  userId,
}: Pick<UserBookInfo, 'bookIsbn' | 'userId'>) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    collection_key: 'completed-readings',
    completed_reading_at: new Date(),
  })
}

async function addBookToWantRead({ bookIsbn, userId }: Pick<UserBookInfo, 'bookIsbn' | 'userId'>) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    collection_key: 'want-read',
  })
}

async function updateBookReadingProgress({
  bookIsbn,
  userId,
  progress,
  countPagesRead,
}: Pick<UserBookInfo, 'bookIsbn' | 'userId' | 'progress' | 'countPagesRead'>) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    progress,
    pages_read: countPagesRead,
    collection_key: 'currently-reading',
    last_progress_updated_at: new Date(),
  })
}

async function updateBookCollectionDetails({
  bookIsbn,
  userId,
  collectionKey,
  startedReadingAt,
  droppedReadingAt,
  completedReadingAt,
}: Pick<
  UserBookInfo,
  | 'bookIsbn'
  | 'userId'
  | 'collectionKey'
  | 'startedReadingAt'
  | 'droppedReadingAt'
  | 'completedReadingAt'
>) {
  const data: {
    droppedReadingAt?: string
    startedReadingAt?: string
    completedReadingAt?: string
  } = {}

  if (startedReadingAt) {
    data.startedReadingAt = startedReadingAt
  }

  if (completedReadingAt) {
    data.completedReadingAt = completedReadingAt
  }

  if (droppedReadingAt) {
    data.droppedReadingAt = droppedReadingAt
  }

  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    collection_key: collectionKey,
    ...data,
  })
}

export const useCollectionRepository = () => ({
  addBookAsFavorite,
  addBookReview,
  addBookToCompletedReadings,
  addBookToCurrentlyReading,
  addBookToDroppedReadings,
  addBookToWantRead,
  getCollectionBooks,
  getCountBooksInCollection,
  isBookInCollection,
  removeBookAsFavorite,
  removeBookReview,
  updateBookReadingProgress,
  updateBookCollectionDetails,
})

import { useSupabase } from './useSupabase'
import type { CollectionType } from '@/types/CollectionType'
import type { Review } from '@/types/Review'

export type UserBookRow = {
  userId: string
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

async function getCountBooksInCollection(collectionKey: CollectionType, userId: string) {
  const { count } = await supabase
    .from('users_books')
    .select('*', { count: 'exact' })
    .eq('user_id', userId)
    .eq('collection_key', collectionKey)

  return count || 0
}

async function getCollectionBooks(collectionKey: CollectionType, userId: string) {
  return supabase
    .from('users_collections')
    .select('*')
    .eq('collection_key', collectionKey)
    .eq('user_id', userId)
}

async function isBookInCollection(bookIsbn: string, collectionKey: CollectionType, userId: string) {
  const { data } = await supabase
    .from('users_books')
    .select('*')
    .eq('collection_key', collectionKey)
    .eq('book_isbn', bookIsbn)
    .eq('user_id', userId)

  return !!data?.length
}

async function addBookToCollection(
  bookIsbn: string,
  collectionKey: CollectionType,
  userId: string
) {
  await supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    collection_key: collectionKey,
  })
}

async function addBookAsFavorite(bookIsbn: string, userId: string) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    is_favorite: true,
  })
}

async function removeBookAsFavorite(bookIsbn: string, userId: string) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    is_favorite: false,
  })
}

async function addBookReview(bookIsbn: string, userId: string, review: Review) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    review_created_at: new Date(),
    review_title: review.title,
    review_description: review.description,
    review_recommend: review.recommend,
    review_rating: review.rating,
  })
}

async function removeBookReview(bookIsbn: string, userId: string) {
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

async function setBookAsStartReading(bookIsbn: string, userId: string) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    collection_key: 'currently-reading',
    started_reading_at: new Date(),
  })
}

async function setBookReadingProgress(
  bookIsbn: string,
  userId: string,
  progress: number,
  pagesRead: number
) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    progress,
    pages_read: pagesRead,
    collection_key: 'currently-reading',
    last_progress_updated_at: new Date(),
  })
}

async function setBookAsDroppedReading(bookIsbn: string, userId: string) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    collection_key: 'dropped-readings',
    dropped_reading_at: new Date(),
  })
}

async function setBookAsCompletedReading(bookIsbn: string, userId: string) {
  return supabase.from('users_books').upsert({
    book_isbn: bookIsbn,
    user_id: userId,
    collection_key: 'completed-readings',
    completed_reading_at: new Date(),
  })
}

export const useCollectionRepository = () => ({
  addBookAsFavorite,
  addBookReview,
  addBookToCollection,
  getCollectionBooks,
  getCountBooksInCollection,
  isBookInCollection,
  removeBookAsFavorite,
  removeBookReview,
  setBookAsCompletedReading,
  setBookAsStartReading,
  setBookAsDroppedReading,
  setBookReadingProgress,
})

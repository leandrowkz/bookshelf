import { type UserBookInfo } from '@/types/UserBookInfo'
import { type UserBookRow } from './useCollectionRepository'

export function useDBUserBookInfoTransformer(row: UserBookRow): UserBookInfo {
  const bookInfo: UserBookInfo = {
    userId: row.user_id,
    bookIsbn: row.book_isbn,
    collectionKey: row.collection_key,
    startedReadingAt: String(row.started_reading_at),
    droppedReadingAt: String(row.dropped_reading_at),
    completedReadingAt: String(row.completed_reading_at),
    lastProgressUpdatedAt: String(row.last_progress_updated_at),
    progress: row.progress,
    countPagesRead: row.pages_read,
    favorite: Boolean(row.is_favorite),
    review: null,
  }

  if (row.review_created_at) {
    bookInfo.review = {
      title: String(row.review_title),
      description: String(row.review_description),
      rating: Number(row.review_rating),
      recommend: row.review_recommend,
    }
  }

  return bookInfo
}

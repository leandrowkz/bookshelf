/* eslint-disable @typescript-eslint/no-explicit-any */
import { type UserBookInfo } from '@/types/UserBookInfo'

export function useDBUserBookInfoTransformer(row: any): UserBookInfo {
  const bookInfo: UserBookInfo = {
    collection: row.collection_key,
    startedReadingAt: row.started_reading_at,
    droppedReadingAt: row.dropped_reading_at,
    completedReadingAt: row.completed_reading_at,
    lastProgressUpdatedAt: row.last_progress_updated_at,
    progress: row.progress,
    countPagesRead: row.pages_read,
    favorite: Boolean(row.is_favorite),
    review: null,
  }

  if (row.review_created_at) {
    bookInfo.review = {
      title: row.review_title,
      description: row.review_description,
      rating: row.review_rating,
      recommend: row.review_recommend,
    }
  }

  return bookInfo
}

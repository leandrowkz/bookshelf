/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BookUserInfo } from '@/types/BookUserInfo'

export function useDBUsersCollectionsTransformer(input: any): BookUserInfo {
  return {
    collection: input.collection_key,
    startedReadingAt: input.started_reading_at,
    droppedReadingAt: input.dropped_reading_at,
    completedReadingAt: input.completed_reading_at,
    lastProgressUpdatedAt: input.las_progress_updated_at,
    progress: input.progress,
    countPagesRead: input.pages_read,
    review: null,
    favorite: false,
  }
}

import { type Book } from '@/types/Book'
import { type CollectionType } from '@/types/CollectionType'

export async function getCollectionBooks(collectionId: CollectionType): Promise<Book[]> {
  throw new Error(`NOT IMPLEMENTED ${collectionId}.`)
}

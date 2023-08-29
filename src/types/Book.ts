import type { Author } from './Author'
import type { BookPurchaseInfo } from './BookPurchaseInfo'
import type { BookType } from './BookType'
import type { BookUserInfo } from './BookUserInfo'

export type Book = {
  id: string
  type: BookType[]
  isbn: string[]
  title: string
  description: Nullable<string>
  authors: Author[]
  categories: string[]
  cover: Nullable<string>
  publisher: Nullable<string>
  publishedAt: Nullable<string>
  pageCount: Nullable<number>
  language: LanguageCode
  rating: Nullable<number>
  preview: Nullable<string>
  purchaseInfo: BookPurchaseInfo[]
  userInfo?: BookUserInfo
}

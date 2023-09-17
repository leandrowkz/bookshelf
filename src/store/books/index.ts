import { apiSlice } from '@/store/api'
import type { Book } from '@/types/Book'
import type { BookSearchPayload } from '@/types/BookSearchPayload'
import type { UserBookInfo } from '@/types/UserBookInfo'

export const booksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchBooks: builder.query({
      query: (payload: BookSearchPayload) => ({
        url: '/books',
        params: payload,
        method: 'GET',
      }),
      providesTags: ['SearchBooks'],
    }),

    getBookDetails: builder.query<Book, string>({
      query: (bookId: string) => `/books/${bookId}`,
      providesTags: ['BookDetails'],
    }),

    getUserBookInfo: builder.query<UserBookInfo, string>({
      query: (bookId: string) => `/books/${bookId}/user-info`,
      providesTags: ['UserBookInfo'],
    }),
  }),
})

export const { useSearchBooksQuery, useGetBookDetailsQuery, useGetUserBookInfoQuery } =
  booksApiSlice

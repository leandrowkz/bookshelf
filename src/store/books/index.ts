import { apiSlice } from '@/store/api'
import type { Book } from '@/types/Book'
import type { BookSearchPayload } from '@/types/BookSearchPayload'

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
  }),
})

export const { useSearchBooksQuery, useGetBookDetailsQuery } = booksApiSlice

// export const selectBooksResult = booksApiSlice.endpoints.searchBooks.select({ })

import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Book } from '@/types/Book'
import { setBookDetails } from './slice'
import { useAPIClient } from '@/hooks/useAPIClient'

const client = useAPIClient('')

// control loading/error states directly from here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loadBookDetails = (bookId: string) => async (dispatch: any) => {
  const response = await client.GET<Book>('/books')
  const book = { ...response, id: bookId }

  dispatch(setBookDetails(book))
}

// need to update extraReducers according to https://redux.js.org/tutorials/essentials/part-5-async-logic#reducers-and-loading-actions
export const fetchPosts = createAsyncThunk('books/fetchBooks', async () => {
  const response = await client.GET<Book[]>('/books')

  return response
})

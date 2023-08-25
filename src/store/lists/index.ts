import { apiSlice } from '@/store/api'
import type { ListType } from '@/types/ListType'

export const listsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getListDetails: builder.query({
      query: (listId: ListType) => `/lists/${listId}`,
      providesTags: ['ListDetails'],
    }),
  }),
})

export const { useGetListDetailsQuery } = listsApiSlice

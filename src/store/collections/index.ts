import { apiSlice } from '@/store/api'
import type { BookCollectionType } from '@/types/BookCollectionType'

export const collectionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCollectionDetails: builder.query({
      query: (collectionId: BookCollectionType) => `/collections/${collectionId}`,
      providesTags: ['BookCollectionDetails'],
    }),
  }),
})

export const { useGetCollectionDetailsQuery } = collectionsApiSlice

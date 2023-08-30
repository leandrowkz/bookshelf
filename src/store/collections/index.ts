import { apiSlice } from '@/store/api'
import type { CollectionType } from '@/types/CollectionType'

export const collectionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCollectionDetails: builder.query({
      query: (collectionId: CollectionType) => `/collections/${collectionId}`,
      providesTags: ['CollectionDetails'],
    }),
  }),
})

export const { useGetCollectionDetailsQuery } = collectionsApiSlice

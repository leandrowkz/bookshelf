import { apiSlice } from '@/store/api'
import type { CollectionType } from '@/types/CollectionType'

export const collectionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCollectionDetails: builder.query({
      query: (collectionId: CollectionType) => `/collections/${collectionId}`,
      providesTags: ['CollectionDetails'],
    }),

    addBookToCollection: builder.mutation({
      query: ({ collectionId, bookIsbn }) => ({
        url: `/collections/${collectionId}/books`,
        method: 'POST',
        body: { bookIsbn },
      }),
    }),
  }),
})

export const { useGetCollectionDetailsQuery, useAddBookToCollectionMutation } = collectionsApiSlice

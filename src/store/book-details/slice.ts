import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { initialState } from './state'

// Actual Slice
export const slice = createSlice({
  name: 'book-details',
  initialState,
  reducers: {
    // Action to set the authentication status
    setBookDetails(state, action) {
      state.book = action.payload
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      }
    },
  },
})

export const { setBookDetails } = slice.actions

// export const selectAuthState = (state: AppState) => state.auth.authState

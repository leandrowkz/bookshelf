import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { apiSlice } from '@/store/api'

const makeStore = () =>
  configureStore({
    devTools: true,
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)

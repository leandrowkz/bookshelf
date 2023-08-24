import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { slice } from '@/store/book-details/slice'

const makeStore = () =>
  configureStore({
    reducer: {
      [slice.name]: slice.reducer,
    },
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)

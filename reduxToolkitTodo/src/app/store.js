import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,                    // we can add all reducers here, but i got one rn
  },
})
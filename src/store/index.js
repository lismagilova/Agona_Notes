import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import todoWrapperReducer from './slices/todoWrapperSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        todoWrapper: todoWrapperReducer
    }
})
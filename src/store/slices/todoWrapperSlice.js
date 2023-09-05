import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoWrappers: []
}

const todoWrapperSlice = createSlice({
    name: 'todoWrapper',
    initialState,
    reducers: {
        addTodoWrapper: (state, action) => {
            const newWrapper = {
                id: Date.now().toString(),
                title: action.payload,
                todos: []
            }
            state.todoWrappers.push(newWrapper)
        },
        deleteTodoWrapper: (state, action) => {
            const id = action.payload
            state.todoWrappers = state.todoWrappers.filter((wrapper) => wrapper.id !== id)
        }
    }
})

export const { addTodoWrapper, deleteTodoWrapper } = todoWrapperSlice.actions
export default todoWrapperSlice.reducer

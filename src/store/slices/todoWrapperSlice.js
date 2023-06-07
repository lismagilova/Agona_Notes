import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoWrappers: []
}

const addWrapperSlice = createSlice({
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
        }
    }
})

export const { addTodoWrapper } = addWrapperSlice.actions
export default addWrapperSlice.reducer

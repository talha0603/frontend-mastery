import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: 'Hello Redux'}]
}

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),               // generates id values randomly
                text: action.payload,       // an object to take anything user gives
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload )
        },
    },
})

export const { addTodo, removeTodo } = todoSlice.actions;

// we have to export each reducer we made to update the store
export default todoSlice.reducer
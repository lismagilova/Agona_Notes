import React, { useState, useEffect } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
uuidv4()

export const TodoWrapperLocalStorage = ({ title, id, onDelete }) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
        setTodos(savedTodos)
    }, [])

    const addTodo = (todo) => {
        const newTodos = [
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]
        setTodos(newTodos)
        localStorage.setItem('todos', JSON.stringify(newTodos))
    }

    const toggleComplete = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        setTodos(newTodos)
        localStorage.setItem('todos', JSON.stringify(newTodos))
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
        localStorage.setItem('todos', JSON.stringify(newTodos))
    }

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        )
    }

    const editTask = (task, id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        )
        setTodos(newTodos)
        localStorage.setItem('todos', JSON.stringify(newTodos))
    }

    const deleteTodoWrapper = () => {
        onDelete(id)
    }

    return (
        <div className='TodoWrapper'>
            <div className='BoardHead'>
                <div className='NameWrapper'>
                    <h1 className='Name'>{title}</h1>
                </div>
                <button className='DeleteBoardButton' onClick={deleteTodoWrapper}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>

            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) =>
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} key={index} />
                ) : (
                    <Todo
                        task={todo}
                        key={index}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            )}
        </div>
    )
}



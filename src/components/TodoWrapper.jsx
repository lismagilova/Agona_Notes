import React, { useState } from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { EditTodoForm } from './EditTodoForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const TodoWrapper = ({title, id, onDelete}) => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id))


    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        )
    }

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        )
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
                <button className="DeleteBoardButton" onClick={deleteTodoWrapper}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>

            <TodoForm addTodo={addTodo} />
            {todos.map((todo) =>
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
        </div>
    )
}


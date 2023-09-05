import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className='Todo'>
            <div className='TaskWrapper'>
                <p className={`${task.completed ? 'completed' : ''}`}
                   onClick={() => toggleComplete(task.id)}>
                    {task.task}
                </p>
            </div>
            <div>
                <FontAwesomeIcon icon={faPenToSquare}
                                 onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash}
                                 onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )
}


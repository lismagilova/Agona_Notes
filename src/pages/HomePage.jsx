import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { TodoWrapper } from '../components/TodoWrapper'
import { useAuth } from '../hooks/use-auth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/userSlice' // добавляем action
import { addTodoWrapper, deleteTodoWrapper } from '../store/slices/todoWrapperSlice'
import { useSelector } from 'react-redux'

export const HomePage = () => {
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth()
    const [newWrapperName, setNewWrapperName] = useState('')

    const createTodoWrapper = () => {
        if (newWrapperName) {
            dispatch(addTodoWrapper(newWrapperName))
            setNewWrapperName('')
        }
    }

    const todoWrappers = useSelector((state) => state.todoWrapper.todoWrappers)

    const deleteWrapper = (id) => {
        dispatch(deleteTodoWrapper(id))
    }
    return  isAuth ? (
        <div className='HomePage'>
            <div className='background'>
                <div></div>
                <div className='shape'></div>
            </div>
            <button
                onClick={() => dispatch(removeUser())}
                className='ButtonForm'>
                Выйти из {email}
            </button>
            <input
                type='text'
                value={newWrapperName}
                onChange={(e) => setNewWrapperName(e.target.value)}
                placeholder='Введите название новой доски'
                className='todo-input'
            />
            <button className='todo-btn' onClick={createTodoWrapper}>Создать доску</button>
            <div className='Tables'>
                {todoWrappers.map((wrapper) => (
                    <TodoWrapper
                        key={wrapper.id}
                        title={wrapper.title}
                        id={wrapper.id}
                        onDelete={deleteWrapper}
                    />
                ))}
            </div>
        </div>
    ) : (
        <div>
            <Navigate to='/login'/>
        </div>
    )
}



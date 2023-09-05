import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form } from './Form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../store/slices/userSlice'

export const SignUp = ({title, handleClick}) => {
    const dispatch = useDispatch() // после получения положить в приложение
    const navigate = useNavigate()
    const handleRegister = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)// запрос -> возвращает promise
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate('/')
            }) //деструктурируем данные юзера, которые пришли с бэка
            .catch(() => alert('Пользователь с такой почтой уже существует'))
    }
    return (
        <Form
            title='Зарегистрироваться'
            handleClick={handleRegister}/>
    )
}


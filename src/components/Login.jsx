import React from 'react'
import { useDispatch } from 'react-redux'
import { Form } from './Form'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../store/slices/userSlice'

export const Login = ({title, handleClick}) => {
    const dispatch = useDispatch() // после получения положить в приложение
    const navigate = useNavigate()
    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)// запрос -> возвращает promise
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate('/')
            })
            .catch(() => alert('Такого пользователя не существует'))
    }
    return (
        <Form
        title='Войти'
        handleClick={handleLogin}/>
    )
}


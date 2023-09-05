import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../components/Login'

export const LoginPage = () => {
    return (
        <div>
            <div className='background'>
                <div className='shape'></div>
                <div className='shape'></div>
            </div>
            <div className='FormPage'>
                <h1 className='FormName'>Вход</h1>
                <Login/>
                <p className='FormText'>
                    Нет аккаунта?
                    <Link to='/register' className='FormLink'>
                        Зарегистрироваться
                    </Link>
                </p>
            </div>
        </div>
    )
}



import React from 'react'
import { Link } from 'react-router-dom'
import { SignUp } from '../components/SignUp'

export const RegisterPage = () => {
    return (
        <div>
            <div className='background'>
                <div className='shape'></div>
                <div className='shape'></div>
            </div>
            <div className='FormPage'>
                <h1 className='FormName'>Регистрация</h1>
                <SignUp/>
                <p className='FormText'>
                    Уже есть аккаунт? <Link to='/login' className='FormLink'>Войти</Link>
                </p>
            </div>
        </div>
    )
}


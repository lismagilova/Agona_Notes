import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const Form = ({ title, handleClick }) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Некорректный адрес электронной почты').required('Обязательное поле'),
            password: Yup.string().required('Обязательное поле'),
        }),
        onSubmit: (values) => {
            handleClick(values.email, values.password)
        }
    })

    return (
        <div className='FormComp'>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='email' className='FormLabel'>
                    Почта
                </label>
                <input
                    type='email'
                    id='email'
                    {...formik.getFieldProps('email')}
                    placeholder='Почта'
                    className='InputForm'
                />
                {formik.touched.email && formik.errors.email &&
                    <div className='Error'>{formik.errors.email}</div>}

                <label htmlFor='password' className='FormLabel'>
                    Пароль
                </label>
                <input
                    type='password'
                    id='password'
                    {...formik.getFieldProps('password')}
                    placeholder='Пароль'
                    className='InputForm'
                />
                {formik.touched.password && formik.errors.password && (
                    <div className='Error'>{formik.errors.password}</div>
                )}

                <button type='submit' className='ButtonForm'>
                    {title}
                </button>
            </form>
        </div>
    )
}



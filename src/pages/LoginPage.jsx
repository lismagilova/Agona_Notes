import { Link } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <div>
            <h1>Войти</h1>
            <p>
                или <Link to='/register'>зарегистрироваться</Link>
            </p>
        </div>
    )
}

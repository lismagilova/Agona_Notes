import {Link} from "react-router-dom";

export const RegisterPage = () => {
    return (
        <div>
            <h1>Зарегистрироваться</h1>
            <p>
                или <Link to='/login'>войти</Link>
            </p>
        </div>
    )
}


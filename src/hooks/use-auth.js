import { useSelector } from 'react-redux'

export function useAuth() {
    const {email, token, id} = useSelector(state => state.user)
    // достаём из state юзера, у него есть email, token, id

    return {
        isAuth: !!email, //авторизован ли -> почту в булевое значение
        email,
        token,
        id
    }
}
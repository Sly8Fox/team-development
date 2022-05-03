import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

/**
 * Связка рута с методом регистрации пользователя
 * @param email - мейл юзера
 * @param password - пароль юзера
 */
export const registration = async (email:any, password:any) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}


/**
 * Все также общаемся с апишкой, на этот раз логинимся
 * @param email - мейл юзера
 * @param password - пароль юзера
 */
export const login = async (email:any, password:any) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}


/**
 * Проверка работяги
 */
export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

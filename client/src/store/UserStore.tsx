import {makeAutoObservable} from "mobx";


/**
 * Стор пользователя
 * @param _isAuth {boolean} - Авторизован ли пользователь
 * @param _user {Object} - Информация о пользователе
 */
export default class UserStore {
    _isAuth;
    _user;
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    /**
     * Сеттер авторизован ли пользователь
     * @param bool
     */
    setIsAuth(bool:boolean) {
        this._isAuth = bool
    }

    /**
     * Сеттер юзера
     * @param user
     */
    setUser(user:any) {
        this._user = user
    }

    /**
     * Геттер авторизован ли пользователь
     * @returns _isAuth
     */
    get isAuth() {
        return this._isAuth
    }

    /**
     * Геттера юзера
     * @returns _user
     */
    get user() {
        return this._user
    }
}
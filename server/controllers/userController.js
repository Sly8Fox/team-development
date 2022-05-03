const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User, Basket} = require("../models/models");
/**
 * Контроллер для пользователей
 * @module
 */

/**
 * Функция, генериррующая JWT-токен
 * @param id {number} - Идентификатор пользователя
 * @param email {string} - email пользователя
 * @param role {string} - поль пользователя
 * @returns {Any|undefined}
 */
const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: "24h"}
    );
};

/**
 * Контроллер для пользователей
 */
class UserController {
    /**
     * Регистрация пользователя
     * @param req {Object} - Express Запрос
     * @param res {Object} - Express Ответ
     * @param next {Function} - Express next middleware function
     * @returns {Object} - Express ответ в виде JSON с JWT-токеном
     */
    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest("Некорректный email или password"));
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest("Пользователь с таким email уже существует"));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword});
        await Basket.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    /**
     * Вход пользователя (проверка по почте и паролю)
     * @param req {Object} - Express Запрос
     * @param res {Object} - Express Ответ
     * @param next {Function} - Express next middleware function
     * @returns {Object} - Express ответ в виде JSON с JWT-токеном
     */
    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal("Пользователь не найден"));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal("Указан неверный пароль"));
        }
        const token = generateJwt(user.id, user.email, user.role);
        console.log("i am here");
        return res.json({token});
    }

    /**
     * Генерация токена и отправка в качестве ответа
     * @param req {Object} - Express Запрос
     * @param res {Object} - Express Ответ
     * @returns {Object} - Express ответ в виде JSON с JWT-токеном
     */
    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    }
}

module.exports = new UserController();

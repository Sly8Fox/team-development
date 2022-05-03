const jwt = require("jsonwebtoken");
/**
 * @module
 */
module.exports = {

    /**
     * @typedef {Function} myFunction
     * @param req {Object} - Express Запрос
     * @param res {Object} - Express Ответ
     * @param next {Function} - Express next middleware function
     * @returns {Object} - Express Ответ
     */

    /**
     * Функция, проверяющая, авторизован ли пользователь и его роль на доступ к тем или иным действиям
     * @param role {string} - Название роли
     * @returns {myFunction}
     */
    function(role) {
        return function (req, res, next) {
            if (req.method === "OPTIONS") {
                next();
            }
            try {
                const token = req.headers.authorization.split(" ")[1]; // Bearer asfasnfkajsfnjk
                if (!token) {
                    return res.status(401).json({message: "Не авторизован"});
                }
                const decoded = jwt.verify(token, process.env.SECRET_KEY);
                if (decoded.role !== role) {
                    return res.status(403).json({message: "Нет доступа"});
                }
                req.user = decoded;
                next();
            } catch (e) {
                res.status(401).json({message: "Не авторизован"});
            }
        };
    }
};




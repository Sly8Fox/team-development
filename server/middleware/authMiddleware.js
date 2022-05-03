const jwt = require("jsonwebtoken");
/**
 * @module
 */

module.exports = {
    /**
     * Функция, проверяющая авторизован ли пользователь
     * @param req {Object} - Express Запрос
     * @param res {Object} - Express Ответ
     * @param next {Function} - Express next middleware function
     * @returns {Object} - Express Ответ
     */
    function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            const token = req.headers.authorization.split(" ")[1]; // Bearer asfasnfkajsfnjk
            if (!token) {
                return res.status(401).json({message: "Не авторизован"});
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decoded;
            next();
        } catch (e) {
            res.status(401).json({message: "Не авторизован"});
        }
    }
};

const ApiError = require("../error/ApiError");
/**
 * @module
 */

module.exports = {
    /**
     * @param err {ApiError|Any}
     * @param req {Object} - Express Запрос
     * @param res {Object} - Express Ответ
     * @param next {Function}
     * @returns {Object} - Express Ответ
     */
    function (err, req, res, next) { // eslint-disable-line no-unused-vars
        if (err instanceof ApiError) {
            return res.status(err.status).json({message: err.message});
        }
        return res.status(500).json({message: "Непредвиденная ошибка!"});
    }
};

/**
 * Класс, предоствляющий интерфейс для вызова различных ошибок
 */
class ApiError extends Error{
    /**
     *
     * @param {number} status - Код ошибки
     * @param {string} message - Описание ошибки
     */
    constructor(status, message) {
        super();
        /**
         * @property {number} status - Код ошибки
         */
        this.status = status;
        /**
         * @property {string} status - Описание ошибки
         */
        this.message = message;
    }

    /**
     * Ошибка 404
     * @param message {string}
     * @returns {ApiError}
     */
    static badRequest(message) {
        return new ApiError(404, message);
    }

    /**
     * Ошибка 500
     * @param message - с
     * @returns {ApiError}
     */
    static internal(message) {
        return new ApiError(500, message);
    }

    /**
     * ошибка 403
     * @param message
     * @returns {ApiError}
     */
    static forbidden(message) {
        return new ApiError(403, message);
    }
}

module.exports = ApiError;

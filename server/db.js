const {Sequelize} = require("sequelize");


/**
 *
 * Модуль для подключения к БД,
 * использующий sequelize и принимающий все параметры
 * из файла .env
 * @module
 */


module.exports = new Sequelize(
    /**
     * @param {string} DB_NAME - Название БД
     */
    process.env.DB_NAME,
    /**
     * @param {string} DB_USER - Пользователь, подключающийся к БД
     */
    process.env.DB_USER,
    /**
     * @param {string} DB_PASSWORD - Пароль
     */
    process.env.DB_PASSWORD,
    {
        /**
        * @param {string} dialect - диалект БД
        */
        dialect: "postgres",
        /**
         * @param {string} DB_HOST - Адрес хоста
         */
        host: process.env.DB_HOST,
        /**
         * @param {string} DB_PORT - Номер порта
         */
        port: process.env.DB_PORT
    }
);

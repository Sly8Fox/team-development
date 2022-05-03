const {Sequelize} = require("sequelize");


/**
 *
 * Модуль для подключения к БД,
 * использующий sequelize и принимающий все параметры
 * из файла .env
 * @module
 */

/**
 *
 * @type {Sequelize}
 */
module.exports = new Sequelize(
    /**
     * @param {string} DB_NAME - Название БД
     */
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);

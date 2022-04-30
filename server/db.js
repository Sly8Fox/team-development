const {Sequelize} = require("sequelize");


/**
 *
 * Модуль для подключения к БД,
 * использующий sequelize и принимающий все параметры
 *  из файла .env
 *  @module
 */

/**
 * @param {string} DB_NAME - Название БД
 */
module.exports = new Sequelize(

    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);

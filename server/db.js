const {Sequelize} = require("sequelize");

/**
 * Модуль для подключения к БД,
 * использующий sequelize и принимающий все параметры
 *  из файла .env
 */

module.exports = new Sequelize(
    process.env.DB_NAME, // Название БД
    process.env.DB_USER, // Пользователь
    process.env.DB_PASSWORD, // ПАРОЛЬ
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);

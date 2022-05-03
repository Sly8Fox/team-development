const {Type} = require("../models/models");

/**
 * Контроллер для типов устройств
 * @module
 */

/**
 * Контроллер для типов устройств
 */
class TypeController {
    /**
     * Добавление нового типа устройств
     * @param req {Object} - Express Запрос с названием типа
     * @param res {Object} - Express Ответ
     * @returns {Object} - Express ответ в виде JSON, содержаний информацию о созданном типе
     */
    async create(req, res) {
        const {name} = req.body;
        const type = await Type.create({name});
        return res.json(type);
    }

    /**
     * Извлечение всех записей о типах устройств из БД
     * @param req {Object} - Express Запрос
     * @param res {Object} - Express Ответ
     * @returns {Object} - Express ответ в виде JSON, содержаний информацию о всех типах
     */
    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json(types);
    }

}

module.exports = new TypeController();

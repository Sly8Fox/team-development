const brandFactory = require("../factories/brandFactory");

/**
 *
 */
class BrandController {
    /**
     * Добавление нового бренда в БД
     * @param req {Object} - Express запрос с названием бренда
     * @param res {Object} - Express ответ
     * @returns {Object} - Express ответ в виде JSON, содержаний информацию о сущности бренда
     */
    async create(req, res) {
        const {name} = req.body;
        const brand = await brandFactory.getUseCase().create(name);
        return res.json(brand);
    }

    /**
     * Извлечение всех брендов из БД
     * @param req {Object} - Express Запрос
     * @param res {Object} - Express Ответ
     * @returns {Object} - Express ответ в виде JSON, содержаний информацию о всех брендах
     */
    async getAll(req, res) {
        const brands = await brandFactory.getUseCase().getAll();
        return res.json(brands);
    }

}

module.exports = new BrandController();

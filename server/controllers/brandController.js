const brandFactory = require("../factories/brandFactory");

/**
 *
 */
class BrandController {
    /**
     *
     * @param req {object} - запрос
     * @param res {object} - ответ
     * @returns {Promise<*>}
     */
    async create(req, res) {
        const {name} = req.body;
        const brand = await brandFactory.getUseCase().create(name);
        return res.json(brand);
    }

    /**
     *
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async getAll(req, res) {
        const brands = await brandFactory.getUseCase().getAll();
        return res.json(brands);
    }

}

module.exports = new BrandController();

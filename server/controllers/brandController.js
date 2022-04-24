const brandFactory = require("../factories/brandFactory");

class BrandController {
    async create(req, res) {
        const {name} = req.body;
        const brand = await brandFactory.getUseCase().create(name);
        return res.json(brand);
    }

    async getAll(req, res) {
        const brands = await brandFactory.getUseCase().getAll();
        return res.json(brands)
    }

}

module.exports = new BrandController();

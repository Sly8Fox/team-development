const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');
const brandFactory = require("../factories/brandFactory")

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await brandFactory.postUseCase(name)
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await brandFactory.getUseCase()
        return res.json(brands)
    }

}

module.exports = new BrandController()

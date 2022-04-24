// import {brandRepository} from "../repository/brandRepository";
const brandRepository = require("../repository/brandRepository")

class BrandUseCases {

    async getAll() {
        return await brandRepository.getAll()
    }

    async create(name) {
        return await brandRepository.create(name)
    }
}

module.exports = new BrandUseCases()
const {BrandEntity} = require('../entities/brand')
const {Brand} = require('../models/models')

class brandRepository {

    async getAll () {
        const brands = await Brand.findAll()
        let array = []
        brands.forEach(i => array.push(new BrandEntity(i.id, i.name)))
        return array
    }

    async create (name) {
        const sequeBrand = await Brand.create({name})
        return new BrandEntity(sequeBrand.id, sequeBrand.name)
    }

}

module.exports.brandRepository = brandRepository
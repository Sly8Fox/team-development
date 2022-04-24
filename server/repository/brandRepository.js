const {BrandEntity} = require("../entities/brand");
const {Brand} = require("../models/models");

class brandRepository {

    decode(brand) {
        return new BrandEntity(brand.id, brand.name);
    }

    async getAll () {
        // await Brand.create({"name": "test"})
        const brands = await Brand.findAll();
        // await Brand.destroy({where: {"name": "test"}})
        let array = [];
        brands.forEach(i => array.push(this.decode(i)));
        return array;
    }


    async create (name) {
        const sequeBrand = await Brand.create({name});
        return this.decode(sequeBrand);
    }

}

module.exports.brandRepository = brandRepository;
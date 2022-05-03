const {BrandEntity} = require("../entities/brand");
const {Brand} = require("../models/models");

/**
 * Служит прослойкой между ORM и системой
 */
class brandRepository {
    /**
     * Преобразование объекта ORM в объект системы
     * @param brand {Brand} - Объект из ORM
     * @returns {BrandEntity} - Сущность бренда
     */
    decode(brand) {
        return new BrandEntity(brand.id, brand.name);
    }

    /**
     * Извлечение всех записей о брендах из БД
     * @returns {BrandEntity[]}
     */
    async getAll () {
        // await Brand.create({"name": "test"})
        const brands = await Brand.findAll();
        // await Brand.destroy({where: {"name": "test"}})
        let array = [];
        brands.forEach(i => array.push(this.decode(i)));
        return array;
    }

    /**
     * Добавление нового бренда в БД
     * @param name {string} - Название бренда
     * @returns {BrandEntity}
     */
    async create (name) {
        const sequeBrand = await Brand.create({name});
        return this.decode(sequeBrand);
    }

}

module.exports.brandRepository = brandRepository;
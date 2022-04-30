/**
 * @class
 */
class BrandEntity {
    /**
     *
     * @param id {number} - идентификатор бренда для БД
     * @param name {string} - название бренда
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

module.exports.BrandEntity = BrandEntity;

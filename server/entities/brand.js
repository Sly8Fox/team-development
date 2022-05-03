/**
 *
 */
class BrandEntity {
    /**
     *
     * @param id {number} - идентификатор бренда для БД
     * @param name {string} - название бренда
     */
    constructor(id, name) {
        /**
         * @property {number} id - идентификатор бренда для БД
         */
        this.id = id;
        /**
         *
         * @property name {string} - название бренда
         */
        this.name = name;
    }
}

module.exports.BrandEntity = BrandEntity;

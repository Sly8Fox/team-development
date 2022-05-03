/**
 * Класс, реализующий логику взаимодействия с брендами
 */
class BrandUseCases {
    /**
     *
     * @param rep {brandRepository|Any} - Объект, позволяющий осуществить взаимодействие с ORM
     */
    constructor(rep) {
        this.rep = rep;
    }

    /**
     * Извлечение всех записей о брендах из БД
     * @returns {BrandEntity[]}
     */
    async getAll() {
        return await this.rep.getAll();
    }

    /**
     * Добавление нового бренда в БД
     * @param name {string} - Название бренда
     * @returns {BrandEntity}
     */
    async create(name) {
        return await this.rep.create(name);
    }
    
}

module.exports.BrandUseCases = BrandUseCases;
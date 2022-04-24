// import {brandRepository} from "../repository/brandRepository";


class BrandUseCases {

    constructor(rep) {
        this.rep = rep;
    }

    async getAll() {
        return await this.rep.getAll();
    }

    async create(name) {
        return await this.rep.create(name);
    }
    
}

module.exports.BrandUseCases = BrandUseCases;
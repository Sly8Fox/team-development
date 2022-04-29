const {BrandUseCases} = require("../useCases/brandUseCases");
const {brandRepository} = require("../repository/brandRepository");

class brandFactory {

    getUseCase() {
        return new BrandUseCases(new brandRepository());
    }

    // async postUseCase(name) {
    //     return await BrandUseCases.create(name)
    // }
}

module.exports = new brandFactory();
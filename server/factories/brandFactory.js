const {BrandUseCases} = require("../useCases/brandUseCases");
const {brandRepository} = require("../repository/brandRepository");

class brandFactory {

    getUseCase() {
        return new BrandUseCases(new brandRepository());
    }

}

module.exports = new brandFactory();
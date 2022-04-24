const BrandUseCases = require("../useCases/brandUseCases")

class brandFactory {
    async getUseCase() {
        return await BrandUseCases.getAll()
    }

    async postUseCase(name) {
        return await BrandUseCases.create(name)
    }
}

module.exports = new brandFactory()
const {BrandUseCases} = require("../useCases/brandUseCases");
const {brandRepository} = require("../repository/brandRepository");

/**
 * Фабрика для разных реализаций BrandUseCase-классов
 */
class brandFactory {
    /**
     * @returns {BrandUseCases}
     */
    getUseCase() {
        return new BrandUseCases(new brandRepository());
    }
}

module.exports = new brandFactory();
const {BrandEntity} = require("../../entities/brand");

class BrandMother {


    static one() {
        let brand = new BrandBuilder();
        brand.id = 1;
        brand.name = "check";
        return brand;
    }

    static two() {
        let brand = new BrandBuilder();
        brand.id = 2;
        brand.name = "check2";
        return brand;
    }

}

class BrandBuilder {

    constructor() {
        this.id = 0;
        this.name = "";
    }

    build() {
        return new BrandEntity(this.id, this.name);
    }

}

module.exports = new BrandMother();
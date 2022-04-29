const {BrandEntity} = require("../../entities/brand");

function createSimpleBrand() {
    return new BrandEntity(0, "test");
}

// function deleteSimpleBrand() {
//     return Brand.destroy({where: {"name": "test"}})
// }

function create20SimpleBrands() {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(new BrandEntity(i, "test" + i));
    }
    return arr;
}

// function delete20SimpleBrands() {
//     for (let i = 0; i < 20; i++) {
//         Brand.destroy({where: {"name": 'test' + i}})
//     }
// }

module.exports = {createSimpleBrand, create20SimpleBrands};
const {brandRepository} = require("../../../repository/brandRepository");
const {createSimpleBrand, create20SimpleBrands} = require("../../fixtures/brandFixture");
const {BrandUseCases} = require("../../../useCases/brandUseCases");

test("test Brand UseCase getAll method", async () => {

    const brands = create20SimpleBrands();

    const rep = new brandRepository();
    const useCase = new BrandUseCases(rep);
    jest.spyOn(rep,"getAll").mockImplementation(() => brands);
    expect(await useCase.getAll()).toBe(brands);
});


test("test Brand UseCase create method", () => {

    const brand = createSimpleBrand();
    const rep = new brandRepository();
    jest.spyOn(rep,"create").mockImplementation(() => brand);

    expect(rep.create(brand.name)).toBe(brand);
});
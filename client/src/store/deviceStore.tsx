import {makeAutoObservable} from "mobx";

/**
 * Стор для девайсов
 * @param {any} _types - типы девайсов
 * @param {any} _brands - производители девайсов
 * @param {any} _devices - сами девайсы
 * @param {any} _selectedType - выбранный пользователем тип девайса для фильтрации
 * @param {any} _selectedBrand - выбранный вользователем бренд девайса для фильтрации
 * @param {any} _page - номер отображаемой странички пагинации
 * @param {any} _totalCount - общее число девайсов
 * @param {any} _limit - ограничение количества отображаемых девайсов на странице пагинации
 */
class DeviceStore {
    _types:any
    _brands:any
    _devices:any
    _selectedType:any
    _selectedBrand:any
    _page:any
    _totalCount:any
    _limit:any
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }
    /**
     * Сеттер типа
     * @param types {Object} - тип девайса
     */
    setTypes(types:any) {
        this._types = types
    }
    /**
    * Сеттер бренда
    * @param brands {Object} - бренд девайса
    */
    setBrands(brands:any) {
        this._brands = brands
    }
    /**
     * Сеттер девайса
     * @param devices {Object} - девайсы
     */
    setDevices(devices:any) {
        this._devices = devices
    }
    /**
     * Сеттер выбранного типа
     * @param type {any} - выбранный тип девайса
     */
    setSelectedType(type:any) {
        this.setPage(1)
        this._selectedType = type
    }
    /**
     * Сеттер выбранного бренда
     * @param brand {Object} - выбранный бренд девайса
     */
    setSelectedBrand(brand:any) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    /**
     * Сеттер выбранной странички для пагинации
     * @param page {Object} - номер страницы
     */
    setPage(page:any) {
        this._page = page
    }
    /**
     * Сеттер общего количества необходимых страниц
     * @param count {any} - общее количество страниц пагинации
     */
    setTotalCount(count:any) {
        this._totalCount = count
    }
    /**
     * Геттер типов
     * @returns _types
     */
    get types() {
        return this._types
    }
    /**
     * Геттер брендов
     * @return _brands
     */
    get brands() {
        return this._brands
    }
    /**
     * Геттер девайсов
     * @returns _devices
     */
    get devices() {

        return this._devices
    }
    /**
     * Геттер выбранного типа
     *
     */
    get selectedType() {
        /**
         * @returns _selectedTypes
         */
        return this._selectedType
    }
    /**
     * Геттер выбранного бренда
     * @returns _selectedBrand
     */
    get selectedBrand() {

        return this._selectedBrand
    }
    /**
     * Геттер общего количества страниц
     * @returns _totalCount
     */
    get totalCount() {

        return this._totalCount
    }
    /**
     * Геттер номера страницы
     * @returns _page
     */
    get page() {

        return this._page
    }
    /**
     * Геттер лимита отображаемых девайсов на страничке пагинации
     * @returns _limit
     */
    get limit() {
        return this._limit
    }
};

export default DeviceStore;

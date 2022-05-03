import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


/**
 * Связка рута и метода создание типа
 * @param type - создаваемый тип
 */
export const createType = async (type:any) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

/**
 * Связка рута и вытягивания всех типов девайсов
 */
export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

/**
 * Связка рута с созданием бренда
 * @param brand - создаваемый бренд
 */
export const createBrand = async (brand:any) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}


/**
 * Свзяка рута с вытягивание всех брендов
 */
export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}


/**
 * Всё та же связка, создает новый девайс
 * @param device - создаваемый девайс
 */
export const createDevice = async (device:any) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}


/**
 * Связка рута с методом вытягивания девайса по заданным параметрам
 * @param typeId - айди типа
 * @param brandId - айди бренда
 * @param page - страница, куда отображать
 * @param limit - лимит отображаемых девайсов
 */
export const fetchDevices = async (typeId:any, brandId:any, page:any, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}


/**
 * Вытягивание одного девайса
 * @param id - айди девайса
 */
export const fetchOneDevice = async (id:any) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

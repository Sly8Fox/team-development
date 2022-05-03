const uuid = require("uuid");
const path = require("path");
const {Device, DeviceInfo} = require("../models/models");
const ApiError = require("../error/ApiError");
const fs = require("fs");

/**
 * Контроллер для устройств
 * @module
 */

/**
 * Контроллер для устройств
 */
class DeviceController {
    /**
     * Добавление нового устройства
     * @param req {Object} - Express Запрос с названием, ценой, ID бренда,
     * ID типа и массивом с информацией о характеристиках устройства
     * @param res {Object} - Express Ответ
     * @param next {Function} - Express next middleware function
     * @returns {Object} - Express ответ в виде JSON, содержаний информацию о созданном устройстве
     */
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";

            const filePath = path.resolve(__dirname, "..", "static");
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true});
            }
            fs.writeFileSync(path.join(filePath, fileName), img.data);

            // img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info);
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                );
            }

            return res.json(device);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    /**
     * Извлечение записей об устройствах из БД
     * @param req {Object} - Express Запрос с ID бренда, ID типа, номером страницы и количеством устройств на одной странице
     * @param res {Object} - Express Ответ
     * @returns {Object} - Express ответ в виде JSON, содержаний информацию о найденных устройствах
     */
    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset});
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset});
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset});
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset});
        }
        return res.json(devices);
    }

    /**
     * Извлечение одной записи об устройстве из БД
     * @param req {Object} - Express Запрос с ID устройства
     * @param res {Object} - Express Ответ
     * @returns {Object} - Express ответ в виде JSON, содержаний информацию о найденном товаре
     */
    async getOne(req, res) {
        const {id} = req.params;
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: "info"}]
            },
        );
        return res.json(device);
    }
}

module.exports = new DeviceController();

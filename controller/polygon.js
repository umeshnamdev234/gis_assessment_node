
const { polygon_data: PolygonDataModel } = require('../database');
const save = async (req, res) => {
    try {
        const { body: { name, coordinates } } = req;
        if (coordinates && name) {
            const polygon = { type: 'Polygon', coordinates };
            await PolygonDataModel.create({ name, geometry: polygon });
            return res.status(201).send("Data saved successfully")
        }
        return res.status(400).send("All (name and coordinates) fields are required")
    } catch (error) {
        return res.status(500).send()
    }
}

const getList = async (req, res) => {
    try {
        const data = await PolygonDataModel.findAll();
        return res.status(201).send(data);
    } catch (error) {
        return res.status(500).send()
    }
}

const update = async (req, res) => {
    try {
        const { params: { id }, body : { name, coordinates } } = req;
        const checkId = PolygonDataModel.findOne({
            where: { id }
        });
        if (checkId) {
            const polygon = { type: 'Polygon', coordinates };
            await PolygonDataModel.update({ name, geometry: polygon }, { where : { id }} );
            return res.status(204).send("Data update successfully");
        }
        return res.status(201).send("Invalid Data id found");
    } catch (error) {
        return res.status(500).send();
    }
}

module.exports = {
    save, update, getList
}

const { point_data: PointDataModel } = require('../database');
const save = async (req, res) => {
    try {
        const { body: { name, coordinates } } = req;
        if (coordinates && name) {
            const point = { type: 'Point', coordinates };
            await PointDataModel.create({ name, geometry: point });
            return res.status(201).send("Data saved successfully")
        }
        return res.status(400).send("All (name and coordinates) fields are required")
    } catch (error) {
        return res.status(500).send("Internal Server Error")
    }
}

const getList = async (req, res) => {
    try {
        const data = await PointDataModel.findAll();
        return res.status(201).send(data);
    } catch (error) {
        return res.status(500).send("Internal Server Error")
    }
}

const update = async (req, res) => {
    try {
        const { params: { id }, body : { name, coordinates } } = req;
        const checkId = PointDataModel.findOne({
            where: { id }
        });
        if (checkId) {
            const point = { type: 'Point', coordinates };
            await PointDataModel.update({ name, geometry: point }, { where : { id }} );
            return res.status(204).send("Data update successfully");
        }
        return res.status(201).send("Invalid Data id found");
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    save, update, getList
}
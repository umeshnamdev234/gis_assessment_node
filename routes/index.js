const express = require('express');

const router = express.Router();

const pointDataRoutes = require('./spatial/point-data');
const polygonDataRoutes = require('./spatial/polygon-data');

pointDataRoutes(router);
polygonDataRoutes(router);


module.exports = router;
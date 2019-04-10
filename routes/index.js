module.exports = app => {


    const express = require('express');
    const api_routes = express.Router();
    const joi = require('express-joi-middleware');
    const inputs = require('../utils/inputs');

    const index_controller = require('../controllers/index');

    api_routes.get('/index', index_controller.sayHello);


    app.use('/', api_routes);
};
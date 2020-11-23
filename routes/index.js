module.exports = app => {


    const express = require('express');
    const api_routes = express.Router();
    const joi = require('express-joi-middleware');
    const inputs = require('../utils/inputs');

    const controllers = require('../controllers/index');

    api_routes.get('/', controllers.main.sayHello);


    app.use('/', api_routes);
};
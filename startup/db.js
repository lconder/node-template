const mongoose = require('mongoose');
const config = ('../config/db');

module.exports = () => {
    mongoose.Promise = require('bluebird');
    mongoose.connect("mongodb://lconder:novidosN0!@ds056419.mlab.com:56419/demo");
};
const mongoose = require('mongoose');
const {
  DATABASE_DEV,
} = require('../controllers/keys');

module.exports = () => {
    mongoose.Promise = require('bluebird');
    mongoose.connect(DATABASE_DEV);
};

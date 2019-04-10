const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dummySchema = new Schema({
        created_at: {type: Date, select: false, default: Date.now},
        updated_at: {type: Date, select: false, default: Date.now}
    },
    { versionKey: false });

dummySchema .pre('save', next => {
    this.updated_at = new Date();
    next();
});

dummySchema .set('toObject', {getters: true});
dummySchema .set('toJSON', {getters: true});

module.exports = mongoose.model('Dummy', dummySchema );
const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    name: String,
    address: String
}, {
    timestamps: true
});

module.exports = mongoose.model('users', tableSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('User', userSchema);
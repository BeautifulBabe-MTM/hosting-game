const { Schema, model } = require("mongoose");

const UserScheme = new Schema({
    Login: { type: String, required: true },
    Password: { type: String, required: true },
    Root: { type: String, required: true }
});

module.exports = model('User', UserScheme);
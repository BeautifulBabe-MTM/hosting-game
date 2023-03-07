const { Schema, model } = require("mongoose");

const GameScheme = new Schema({
    Name: { type: String, required: true },
    Desc: { type: String, required: true },
    Price: { type: String, required: true },
    Img: { type: String, required: true }

});

module.exports = model('Game', GameScheme);
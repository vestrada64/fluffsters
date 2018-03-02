const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puppySchema = new Schema({
    name: String,
    breed: String,
    image_url: String,
    description: String,
});

module.exports = mongoose.model("Puppy", puppySchema);
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    Rating: {
        type: Number,
        default: 0
    },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
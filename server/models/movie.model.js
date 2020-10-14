const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
        required: false,

    },
    myRating: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    userScore: {
        type: Number,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

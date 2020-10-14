//we require the router
const router = require("express").Router();
// we require the model
let Movie = require("../models/movie.model");

// this gets and returns all the Movies from the database
router.route("/").get((req, res) => {
    Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json("Error: " + err));
});

// this adds a new Movie to the database
router.route("/add").post((req, res) => {
    const username = req.body.username;
    const comments = req.body.comments;
    const myRating = req.body.myRating;
    const title = req.body.title;
    const date = req.body.date;
    const userScore = Number(req.body.userScore);
    const overview = req.body.overview;
    const image = req.body.image;
    

    const newMovie = new Movie({
        username,
        comments,
        myRating,
        title,
        date,
        userScore,
        overview,
        image,
    });

    newMovie.save()
    .then(() => res.json("Movie added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// finds a speciifc movie from the ID created by MongoDB
router.route("/:id").get((req, res) => {
    Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => res.status(400).json("Error: " + err));
});

// finds a speciifc movie from the ID created by MongoDB and deletes it
router.route("/:id").delete((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
    .then(() => res.json("Movie deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

//finds a speciifc movie from the ID and updates it
router.route("/update/:id").post((req, res) => {
    Movie.findById(req.params.id)
    .then(movie => {
        movie.username = req.body.username;
        movie.comments = req.body.comments;
        movie.myRating = req.body.myRating;
        movie.title = req.body.title;
        movie.date = req.body.date;
        movie.userScore = Number(req.body.userScore);
        movie.overview = req.body.overview;
        movie.image = req.body.image;

        movie.save()
        .then(() => res.json("Movie updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
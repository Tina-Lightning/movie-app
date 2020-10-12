// we need the express router bc this is a route we are creating 
const router = require("express").Router();
// here we require the mongoose model 
let User = require("../model/user.model");

// this is our first route
// this is the first endpoint that handles http GET requests
router.route("/").get((req, res) => {
    // this is a mongoose method, and its going to get a list of all the Users from the MongDb database
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

// this is another route
// this is the second endpoint that handles http POST requests
router.route("/add").post((req, res) => {
    // the new username is part of the request body
    const username = req.body.username;

    const newUser = new User({username});

    // this saves the new user to the database
    newUser.save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
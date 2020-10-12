const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully")
})

const moviesRouter = require("./routes/movies");
const usersRouter = require("./routes/users");

// when anyone goes to /movies in the URL it will load everything in the moviesRouter
app.use("/movies", moviesRouter);
// when anyone goes to /users in the URL it will load everything in the usersRouter
app.use("/users", usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
const express = require("express");
const mongoose = require("mongoose");
const movieModel = require("./models/movie");
const app = express();
const path = require("path");
const PORT = 6000;

app.use(express.json());
app.use("/static", express.static("public"));

mongoose
    .connect("CONNECTION_STRING", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the DB");
    });

app.get("/movies", async (request, response) => {
    const movies = await movieModel.find({});
    try {
        response.send(movies);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/movie/:movieID", async (req, res) => {
    let movieID = req.params["movieID"];
    let movie;

    movie = await movieModel.find({ id: movieID }).exec();

    res.status(200).json(movie);
});

app.post("/movie", async (req, res) => {
    const newMovie = new movieModel(req.body);

    try {
        await newMovie.save();
        res.status(201).send(newMovie);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put("/movie", (req, res) => {
    try {
        movieModel.findOne({ _id: req.body.id }).then((movie) => {
            const newMovie = new movieModel(movie);

            if (!newMovie) {
                res.status(404).send();
                return;
            }

            newMovie.name = req.body.name;

            newMovie
                .save()
                .then(() => {
                    res.status(201).send(newMovie);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });
        return;
    } catch (error) {
        res.status(500).send(error);
        return;
    }
});

app.delete("/movie/:movieID", (req, res) => {
    let movieID = req.params["movieID"];
    let newMovieArray = {};

    for (const [key, value] of Object.entries(moviesArray)) {
        console.log(key, value, moviesArray[movieID], movieID);
        if (value !== moviesArray[movieID]) {
            newMovieArray[key] = moviesArray[key];
        }
    }

    moviesArray = newMovieArray;
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log("Server is running...");
});

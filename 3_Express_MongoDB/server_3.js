const express = require("express");
const mongoose = require("mongoose");

const movieModel = require("./models/movie");
const app = express();

const PORT = 4545;

app.use(express.json());

mongoose
    .connect("CONNECTION_STRING", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the DB");
    });

app.post("/movie", async (req, res) => {
    const newMovie = new movieModel(req.body);

    console.log(newMovie);

    try {
        await newMovie.save();
        res.status(201).send(newMovie);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.patch("/movie/:movieID", (req, res) => {
    try {
        let movieID = req.params["movieID"];

        movieModel.findOne({ _id: movieID }).then((movie) => {
            if (!movie) {
                res.status(404).send();
                return;
            }

            const newMovie = new movieModel(movie);

            if (req.body.name) {
                newMovie.name = req.body.name;
            }
            if (req.body.Rating) {
                newMovie.Rating = req.body.Rating;
            }
            if (req.body.releaseDate) {
                newMovie.releaseDate = req.body.releaseDate;
            }

            newMovie
                .save()
                .then(() => {
                    res.status(200).send(newMovie);
                })
                .catch((err) => {
                    res.status(400).send(err);
                });
        });
    } catch (err) {
        res.status(500).send(error);
        return;
    }
});

app.delete("/movie/:mID", async (req, res) => {
    const movieIDFromRequestURL = req.params["mID"];
    if (!movieIDFromRequestURL) {
        return res.status(400).send();
    }

    const value = await movieModel
        .findByIdAndDelete(movieIDFromRequestURL)
        .catch((err) => {
            console.log(err);
            res.status(500).send();
        });
    console.log(value);

    res.status(200).send();
});

app.get("/movie/:movieID", (req, res) => {
    console.log(req.params["movieID"]);
});

app.listen(PORT, () => {
    console.log("Server is running...");
});

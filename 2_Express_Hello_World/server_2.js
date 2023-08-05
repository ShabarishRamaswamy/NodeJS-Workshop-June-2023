// Source: https://expressjs.com/en/guide/routing.html

const express = require("express")
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 5000

let moviesArray = {}
let id = 0


app.get("/", (req, res) => {
    res.send("Hello World !")
})

app.get("/movies", (req, res) => {
    console.log(moviesArray)
    res.send(JSON.stringify(moviesArray))
})

app.get("/movie/:movieID", (req, res) => {
    let movieID = req.params["movieID"]
    let movie = moviesArray[movieID]

    res.send(String(movie))
})

app.post("/movie", (req, res) => {
    moviesArray[id] = req.body.movieName
    id += 1

    res.status(201).send(moviesArray[id - 1])
})

app.put("/movie/:movieID", (req, res) => {
    let movieID = req.params["movieID"]
    moviesArray[movieID] = req.body.movieName

    res.status(200).send(moviesArray[id])
})

app.delete("/movie/:movieID", (req, res) => {
    let movieID = req.params["movieID"]
    let newMovieArray = {}

    for (const [key, value] of Object.entries(moviesArray)) {
        console.log(key, value, moviesArray[movieID], movieID)
        if(value !== moviesArray[movieID]) {
            newMovieArray[key] = moviesArray[key]
        }
      }
      
    moviesArray = newMovieArray
    res.status(204).send()
})

app.listen(port, () => {
    console.log(`App is running on PORT: ${port}`)
})
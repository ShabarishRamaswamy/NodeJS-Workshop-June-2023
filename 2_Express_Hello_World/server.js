// Install Express.JS https://expressjs.com/en/starter/installing.html

const express = require("express")
const app = express()
const port = 5000

app.get("/", (req, res) => {
    res.send("Hello World !")
})

app.get("/movies", (req, res) => {
    res.send("List of all moviess")
})

app.get("/movies/:movieID", (req, res) => {
    res.send(req.params["movieID"])
})

app.post("/movies", (req, res) => {
    res.send("Hello World ! Posting now is it !")
})

app.listen(port, () => {
    console.log(`App is running on PORT: ${port}`)
})
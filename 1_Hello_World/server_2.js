// Source: https://nodejs.org/en/docs/guides/getting-started-guide

const http = require("http")

// PORT at which the server will listen to.
const port = 5000

// Gives back a HTTP server with useful methods such as interceptors and error handlers.
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    movies = ["Transformers", "Mr. Bean"]

    if(req.url == "/movies" && req.method == "GET") {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end(String(movies))
    } else if (req.url == "/movie" && req.method == "POST"){
        res.statusCode = 201
        res.setHeader('Content-Type', 'text/plain')
        res.end("Created")
    } else if (req.url == "/movie" && req.method == "PUT"){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Updated")
    } else if (req.url == "/movie" && req.method == "DELETE"){
        res.statusCode = 204
        res.setHeader('Content-Type', 'text/plain')
        res.end("Ok")
    }
})

server.listen(port, () => {
    console.log(`Server Running in PORT: http://localhost:${port}/`)
})

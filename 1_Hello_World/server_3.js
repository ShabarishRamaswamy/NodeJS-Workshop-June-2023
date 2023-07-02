// Source: https://nodejs.org/en/docs/guides/getting-started-guide

const http = require("http")

// PORT at which the server will listen to.
const port = 5000

// Gives back a HTTP server with useful methods such as interceptors and error handlers.
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    let URL = req.url.split("/")

    movies = ["Transformers", "Mr. Bean"]

    if(URL[1] == "movies" && req.method == "GET") {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end(String(movies))
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end("Not Found")
    }
})

server.listen(port, () => {
    console.log(`Server Running in PORT: http://localhost:${port}/`)
})

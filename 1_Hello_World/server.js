// Source: https://nodejs.org/en/docs/guides/getting-started-guide

const http = require("http")

const hostname = '127.0.0.1'
// PORT at which the server will listen to.
const port = 5000

// Gives back a HTTP server with useful methods such as interceptors and error handlers.
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello World")
})

server.listen(port, hostname, () => {
    console.log(`Server Running in PORT: http://${hostname}:${port}/`)
})

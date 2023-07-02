// Source: https://nodejs.org/dist/latest-v18.x/docs/api/http.html#httprequesturl-options-callback
// Read More: https://nodejs.org/en/docs/guides/getting-started-guide

const http = require("http")

// PORT at which the server will listen to.
const port = 5000

// Gives back a HTTP server with useful methods such as interceptors and error handlers.
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    let body = []
    let body_string = ""

    req.on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        body_string = Buffer.concat(body).toString()
        console.log(body_string)

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Hello World")
    })
})

server.listen(port, () => {
    console.log(`Server Running in PORT: http://localhost:${port}/`)
})

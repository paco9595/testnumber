const http = require('http')
const process = require('process');
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)

  response.end(process.hrtime().toString())
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
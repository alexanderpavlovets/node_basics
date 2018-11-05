/*
 * Primary file for the API
 *
 *
 *
 */

// Dependencies
const http = require('http')
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder


// The server should respond to all requests with a string
const server = http.createServer(function(req, res) {

  // Get the URL and parse it
  const parsedUrl = url.parse(req.url, true)

  // Get the path from URL
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g, '') // removing slashes from begin and end of the path

  // Get the query string as an object
  const queryStringObject = parsedUrl.query

  // Get the HTTP method
  const method = req.method.toLowerCase()

  // Get the headers as an object
  const headers = req.headers

  // Get the payload if any
  const decoder = new StringDecoder('utf-8') // parameter - what encoding shoul be received. This is common
  let buffer = '' // buffer - just variable name,
  req.on('data', function(data){
    buffer += decoder.write(data)
  })
  req.on('end', function(){
    buffer += decoder.end()

    // Choose the handler this request should go to, if not found - use notFound handler
    const choosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound

    // Construct the data object to send to the handler
    const data = {
      trimmedPath: trimmedPath,
      queryStringObject: queryStringObject,
      method: method,
      headers: headers,
      payload : buffer
    }

    // Route the request to the handler specified in the router
    choosenHandler(data, function(statusCode, payload) {
      // continue from here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 08:40 Lesson 18
    })

    // Send the response
    res.end('Hello World\n')

    // Log the request path
    console.log('_________')
    console.log(buffer)
    // you can test it in the chrome console:
    // fetch('http://localhost:3000/asd/qwe/zxc?somekey=value',{method: 'POST', body: 'this is a body data in the request'})
  })
})

// Start the server, and have it listen on port 3000
server.listen(3000, function(){
  console.log('The server is listening on port 3000 now')
})

// Define the handlers
const handlers = {}

// Sample handler
handlers.sample = function(data, callback) {
  // Callback a http status code, and a payload object
  callback(406, {name: 'sample handler'})
}

// Not found handler
handlers.notFound = function(data, callback) {
  callback(404)
}

// Define a request router
const router = {
  sample: handlers.sample
}
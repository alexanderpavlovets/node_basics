/*
 * Exampe TCP (Net) Server
 * Listens to 6000 and send the word 'pong' to clients
 */

// Dependencies
const net = require('net') // means TCP

// Create the server
const server = net.createServer(function(connection) {
  // Sent the word 'Pong'
  const outbountMessage = 'Pong'
  connection.write(outbountMessage)

  // When the client writes smth, log it out
  connection.on('data', function(inboundMessage) {
    const messageString = inboundMessage.toString()
    console.log('I wrote ' + outbountMessage + ' and they said ' + messageString)
  })
})

// Listen
server.listen(6000)
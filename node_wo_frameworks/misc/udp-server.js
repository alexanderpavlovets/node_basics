/*
 * Exampe UDPServer
 * creating UDP datagram server listening on 6000
 */

// Dependencies
const dgram = require('dgram')

// Creating a server
const server = dgram.createSocket('udp4')

server.on('message', function(messageBuffer, sender) {
  // Do smth with an incoming message or do smth with a sender
  const messageString = messageBuffer.toString()
  console.log(messageString)
})

// Bind to 6000
server.bind(6000)

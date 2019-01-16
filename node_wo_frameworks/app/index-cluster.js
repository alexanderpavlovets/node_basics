/*
 * Primary file for the API
 *
 *
 *
 */

// Dependencies
const server = require('./lib/server')
const workers = require('./lib/workers')
const cli = require('./lib/cli')
const os = require('os')
const cluster = require('cluster')

// Declare the app
const app = {}

// Init function
app.init = function(callback){

  // If we are on the master thread, start background workers and CLI
  if(cluster.isMaster) {
    // Start the workers
    workers.init()
    // Start the CLI, but make sure it starts last
    setTimeout(function() {
      cli.init()
      callback()
    }, 50)

    // Fork the process
    for(let i = 0; i< os.cpus().length; i++) {
      cluster.fork() // will start this entire file again for every cpu core. 8 servers are up in my current laptop case
    }

  } else {
    // I we are not on the master thread, start the server
    server.init()
  }
}

// Self invoking only if required directly
if(require.main === module) {
  app.init(function(){}) // app will start only if invoked from command line. If invoked from another file - won't run this.
}

// Export the app
module.exports = app

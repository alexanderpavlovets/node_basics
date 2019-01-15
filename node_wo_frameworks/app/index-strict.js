/*
 * Primary file for the API
 *
 * Modified to have 'use-strict' error - global variable declared.
 * to see it - run "node --use_strict index-strict.js"
 */

// Dependencies
const server = require('./lib/server')
const workers = require('./lib/workers')
const cli = require('./lib/cli')

// Declare the app
const app = {}

// Declare a global variable that strict mode should catch
foo = 'bar'


// Init function
app.init = function(){
  // Start the server
  server.init()

  // Start the workers
  workers.init()

  // Start the CLI, but make sure it starts last
  setTimeout(function() {
    cli.init()
  }, 50)
}

// Execute
app.init()


// Export the app
module.exports = app

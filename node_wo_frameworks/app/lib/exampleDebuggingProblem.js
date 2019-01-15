/*
 * library that demonstrates something throwing when it's init() is called
 *
 */

// Container fro the module
const example = {}

// Init function
example.init = function() {
  // This is an error created intentionally (bar is not defined)
  const foo = bar
}


// Export the module
module.exports = example
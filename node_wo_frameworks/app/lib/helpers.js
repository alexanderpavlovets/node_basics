/*
 * Helpers for various tasks
 *
 *
 *
 */

 // Dependencies
const crypto = require('crypto')
const config = require('./config')

 // Container for all helpers
 const helpers = {}

 // Create a SHA256 hash
 helpers.hash = function(str) {
   if (typeof(str) === 'string' && str.length > 0) {
    const hash = crypto.createHmac('sha256', config.hashingSecret).update(str).digest('hex')
    return hash
   } else {
    return false
   }
 }

 // Parse JSON string to an object without throw
 helpers.parseJsonToObject = function(str) {
   try {
    const obj = JSON.parse(str)
    return obj
   } catch (err) {
    return {}
   }
 }

 // Create a string of random alphanumeric characters, of a given length
 helpers.createRandomString = function(stringLength) {
   stringLength = typeof(stringLength) === 'number' && stringLength > 0 ? stringLength : false
   if(stringLength) {
    // Define all the possible characters that could go to the string
    const possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'

    // Start the final string
    let str = ''

    for (let i = 0; i < stringLength; i++) {
      // Get a random char from possible chars
      const randomChar = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
      // Append this char to the final string
      str += randomChar
    }

    // Return the final string
    return str
   } else {
     return false
   }
 }

 // Export the module
 module.exports = helpers
/*
 * Helpers for various tasks
 *
 *
 *
 */

// Dependencies
const crypto = require('crypto')
const config = require('./config')
const https = require('https')
const querystring = require('querystring')

// Container for all helpers
const helpers = {}

// Create a SHA256 hash
helpers.hash = function(str) {
  if(typeof (str) === 'string' && str.length > 0) {
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
  } catch(err) {
    return {}
  }
}

// Create a string of random alphanumeric characters, of a given length
helpers.createRandomString = function(stringLength) {
  stringLength = typeof (stringLength) === 'number' && stringLength > 0 ? stringLength : false
  if(stringLength) {
    // Define all the possible characters that could go to the string
    const possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'

    // Start the final string
    let str = ''

    for(let i = 0; i < stringLength; i++) {
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

// Send an SMS message via Twilio
helpers.sendTwilioSms = function(phone, msg, callback) { // this won't work, because real Twilio account is needed for it. Just "NO Error" is enough here.
  // Validate the parameters
  phone = typeof(phone) === 'string' && phone.trim().length === 10 ? phone.trim() : false
  msg = typeof(msg) === 'string' && msg.trim().length > 0 && msg.trim().length < 1600 ? msg.trim() : false
  if(phone && msg) {
    // Configure the request payload
    const payload = {
      From: config.twilio.fromPhone,
      To: '+38'+phone,
      Body: msg
    }
    // Stringify the payload
    const stringPayload = querystring.stringify(payload) // use querystring because of content type - 'application/x-www-form-urlencoded' of request

    // Configure the request details
    const requestDetails = {
      protocol: 'https:',
      hostname: 'api.twilio.com',
      method: 'POST',
      path: '/2010-04-01/Accounts/' + config.twilio.accountSid + '/Messages.json',
      auth: config.twilio.accountSid + ':' + config.twilio.authToken,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(stringPayload)
      }
    }

    // Instantiate the request
    const req = https.request(requestDetails, function(res) {
      // Grav the status of the sent request
      const status = res.statusCode
      // Callback successfully if the request went through
      if(status === 200 || status === 201) {
        callback(false)
      } else {
        callback('Status code returned was ' + status)
      }
    })

    // Bind to the error event so it doesn't get thrown
    req.on('error', function(e) {
      callback(e)
    })

    // Add the payload
    req.write(stringPayload)

    // End the request
    req.end()

  } else {
    callback('Given parameters were missing or invalid')
  }
}

// Export the module
module.exports = helpers
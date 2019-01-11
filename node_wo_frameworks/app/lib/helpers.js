/*
 * Helpers for various tasks
 *
 */

// Dependencies
const crypto = require('crypto')
const config = require('./config')
const https = require('https')
const querystring = require('querystring')
const path = require('path')
const fs = require('fs')

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

// Get the string content of a template
helpers.getTemplate = function (templateName, data, callback) {
  templateName = typeof(templateName) === 'string' && templateName.length > 0 ? templateName : false
  data = typeof(data) === 'object' && data !== null ? data : {}
  if(templateName) {
    const templatesDir = path.join(__dirname, '../templates/')
    fs.readFile(templatesDir + templateName + '.html', 'utf-8', function(err, str) {
      if(!err && str && str.length > 0) {
        // Do interpolation on the string
        const finalString = helpers.interpolate(str, data)
        callback(false, finalString)
      } else {
        callback('No template could be found')
      }
    })
  } else {
    callback('A valid template name was not specified')
  }
}

// Add the universal header and footer to a string, and pass provided data object to the header and footer for interpolation
helpers.addUniversalTemplates = function(str, data, callback) {
  str = typeof(str) === 'string' && str.length > 0 ? str : ''
  data = typeof(data) === 'object' && data !== null ? data : {}
  // Get the header
  helpers.getTemplate('_header', data, function(err, headerString){
    if(!err && headerString) {
      // Get the footer
      helpers.getTemplate('_footer', data, function(err, footerString) {
        if(!err && footerString) {
          // Add them all together
          const fullString = headerString + str + footerString
          callback(false, fullString)
        } else {
          callback('Could not find the footer template')
        }
      })
    } else {
      callback('Could not find the header template')
    }
  })
}

// Take a given string and a data object and find/replace all the keys within it
helpers.interpolate = function(str, data) {
  str = typeof(str) === 'string' && str.length > 0 ? str : ''
  data = typeof(data) === 'object' && data !== null ? data : {}

  // Add the templateGlobals to the data object, prepending their key name with "global"
  for (const keyName in config.templateGlobals) {
    if(config.templateGlobals.hasOwnProperty(keyName)) {
      data['global.' + keyName] = config.templateGlobals[keyName]
    }
  }

  // For each key in the data object, insert it's value inte the string at the coresponding placeholder
  for(const key in data) {
    if(data.hasOwnProperty(key) && typeof(data[key]) === 'string') {
      const replace = data[key]
      const find = '{' + key + '}'
      str = str.replace(find, replace) //maybe will replace only first match. Solution - str.replace(new RegExp(find, 'g'), replace))
    }
  }

  return str
}

// get the contents of a static (public) asset
helpers.getStaticAsset = function(fileName, callback) {
  fileName = typeof(fileName) === 'string' && fileName.length > 0 ? fileName : false
  if(fileName) {
    const publicDir = path.join(__dirname, '../public/')
    fs.readFile(publicDir + fileName, function(err, data) {
      if(!err && data) {
        callback(false, data)
      } else {
        callback('No file could be found')
      }
    })
  } else {
    callback('A valid file name was not specified')
  }
}

// Export the module
module.exports = helpers
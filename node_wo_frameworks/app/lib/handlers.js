/*
 * Library for request handlers
 *
 *
 *
 */

// Dependencies
const _data = require('./data')
const helpers = require('./helpers')


// Define the handlers
const handlers = {}

// Users
handlers.users = function(data, callback) {
  const acceptableMethods = ['post', 'get', 'put', 'delete']
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._users[data.method](data, callback)
  } else {
    callback(405) // method not allowed status code
  }
}

// Container for the users submethods
handlers._users = {}

// Users-post
// Required data: firstName, lastName, phone, password, tosAgreement
// Optional data: no
handlers._users.post = function(data, callback) {
  // Check that all required fields are filled out
  const firstName = typeof(data.payload.firstName) === 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false
  const lastName = typeof(data.payload.lastName) === 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false
  const phone = typeof(data.payload.phone) === 'string' && data.payload.phone.trim().length === 10 ? data.payload.phone.trim() : false
  const password = typeof(data.payload.password) === 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false
  const tosAgreement = typeof(data.payload.tosAgreement) === 'boolean' && data.payload.tosAgreement === true ? true : false

  if (firstName && lastName && phone && password && tosAgreement) {
    // Make sure that the user does not already exist
    _data.read('users', phone, function(err, data) {
      if(err) {
        // Hash the password
        const hashedPassword = helpers.hash(password)

        if (hashedPassword) {
          // Create the user object
          const userObject = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            hashedPassword: hashedPassword,
            tosAgreement: true // hardcode true because it is 'true' anyway here. Weird for me.
          }

          // Store the user
          _data.create('users', phone, userObject, function(err){
            if (!err) {
              callback(200)
            } else {
              console.log(err)
              callback(500, {Error: 'Could not create a new user'})
            }
          })
        } else {
          callback(500, {Error: 'Could not create a hash of users\'s password '})
        }
      } else {
        // User already exists
        callback(400, {Error: 'A user with that phone number is already exists'})
      }
    })
  } else {
    callback(400, {Error: 'Missing requred fields'})
  }
}

// Users-get
// Required data: phone
// Optional data: no
// @TODO Only let authenticated users access their objects, don't let accsees them to any others
handlers._users.get = function(data, callback) {
  // Check that phone number provided is valid
  const phone = typeof(data.queryStringObject.phone) === 'string' && data.queryStringObject.phone.trim().length === 10 ? data.queryStringObject.phone : false
  if (phone) {
    // Look up user
    _data.read('users', phone, function(err, data){
      if (!err && data) {
        // Remove the hashed password from user object before send it to requestor
        delete data.hashedPassword
        callback(200, data)
      } else {
        callback(404)
      }
    })
  } else {
    callback(400, {Error: 'Missing required field'})
  }
}

// Users-put
// Required data: phone
// Optional data: firstName, lastName, password, tosAgreement (at least one of these must be specified)
// @TODO Only let authenticated users update their own object, don't let it to any other
handlers._users.put = function(data, callback) {
  // Check for the reqired field
  const phone = typeof(data.payload.phone) === 'string' && data.payload.phone.trim().length === 10 ? data.payload.phone : false

  // Check for the oprional fields
  const firstName = typeof(data.payload.firstName) === 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false
  const lastName = typeof(data.payload.lastName) === 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false
  const password = typeof(data.payload.password) === 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false

  // Error is the phone is invalid
  if(phone) {
    // Error is nothing to update
    if (firstName || lastName || password) {
      // Look up the user
      _data.read('users', phone, function(err, userData){
        if (!err && userData) {
          // Update the necessary fields
          if (firstName) {
            userData.firstName = firstName
          }
          if (lastName) {
            userData.lastName = lastName
          }
          if (password) {
            userData.hashedPassword = helpers.hash(password)
          }
          // Store new user updates
          _data.update('users', phone, userData, function(err1){
            if (!err1) {
              callback(200)
            } else {
              console.log(err)
              callback(500, {Error: 'Could not update the user'})
            }
          })
        } else {
          callback(400, {Error: 'The specified user does not exist'})
        }
      })
    } else {
      callback(400, {Error: 'Missing fields to update '})
    }
  } else {
    callback(400, {Error: 'Missing required field'})
  }
}

// Users-delete
// Required data: phone
// Optional data: no
// @TODO Only let an authenticated user to delete their object, don't let any one else
// @TODO Cleanup (delete) any other data files assotiated with this user
handlers._users.delete = function(data, callback) {
  // Check that the phone number is valid
  const phone = typeof(data.queryStringObject.phone) === 'string' && data.queryStringObject.phone.trim().length === 10 ? data.queryStringObject.phone : false
  if (phone) {
    // Look up user
    _data.read('users', phone, function(err, data){
      if (!err && data) {
        _data.delete('users', phone, function(err){
          if (!err) {
            callback(200)
          } else {
            callback(500, {Error: 'Could not delete the specified user'})
          }
        })
      } else {
        callback(400, {Error: 'Could not find the specified user'})
      }
    })
  } else {
    callback(400, {Error: 'Missing required field'})
  }
}

// Ping handler
handlers.ping = function (data, callback) {
  callback(200)
}

// Not found handler
handlers.notFound = function(data, callback) {
  callback(404)
}

// Exporting the module
module.exports = handlers

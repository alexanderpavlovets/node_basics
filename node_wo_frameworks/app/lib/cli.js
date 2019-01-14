/*
 * CLI related tasks
 *
 */

// Dependencies
const readline = require('readline')
const util = require('util')
const debug = util.debuglog('cli') // for debug log. NODE_DEBUG=cli
const events = require('events')
class _events extends events{}
const e = new _events()
const os = require('os')
const v8 = require('v8')
const _data = require('./data')
const _logs = require('./logs')
const helpers = require('./helpers')


// Instantiate the CLI module
const cli = {}

// Input handlers
// Pass the str into handler onlu if flags may be included in the command
e.on('man', function(str) {
  cli.responders.help()
})

e.on('help', function(str) {
  cli.responders.help()
})

e.on('exit', function(str) {
  cli.responders.exit()
})

e.on('stats', function(str) {
  cli.responders.stats()
})

e.on('list users', function(str) {
  cli.responders.listUsers()
})

e.on('more user info', function(str) {
  cli.responders.moreUserInfo(str)
})

e.on('list checks', function(str) {
  cli.responders.listChecks(str)
})

e.on('more check info', function(str) {
  cli.responders.moreCheckInfo(str)
})

e.on('list logs', function(str) {
  cli.responders.listLogs()
})

e.on('more log info', function(str) {
  cli.responders.moreLogInfo(str)
})

// Responders object
cli.responders = {}

// Help / Man responder. 'Man' - stands for "Manual"
cli.responders.help = function() {
  const commands = {
    'exit': 'Kill the CLI (and the rest of the application)',
    'man': 'Show this "Help" page',
    'help': 'Alias to the "man" command. "man" stands for "manual"',
    'stats': 'Get statistics on the underlying operating system and resource utilization',
    'list users': 'Show a list of all the registered (indeleted) users in the system',
    'more user info --{userId}': 'Show details of a specific user',
    'list checks --up --down': 'Show a list of all the active checks in the system, including their state. The "--up" and "--down" flags are both optional',
    'more check info --{checkId}': 'Show details for specified check',
    'list logs': 'Show a list of all the log files available to be read (compressed only)',
    'more log info --{fileName}': 'Show details of a specified log file',
  }

  // Show a header for the help page that is as wide as the screen
  cli.horizontalLine()
  cli.centered('CLI MANUAL')
  cli.horizontalLine()
  cli.verticalSpace(2)

  // Show each command, followed by it's explanation in white and yellow respectively
  for(const key in commands) {
    if(commands.hasOwnProperty(key)) {
      const value = commands[key]
      let line = '\x1b[33m' + key + '\x1b[0m'
      const padding = 60 - line.length
      for(i = 0; i < padding; i++) {
        line+=' '
      }
      line+=value
      console.log(line)
      cli.verticalSpace(1)
    }
  }
  cli.verticalSpace(1)
  // End with another horizontal line
  cli.horizontalLine()
}

// Create a vertical space
cli.verticalSpace = function(lines) {
  lines = typeof(lines) === 'number' && lines > 0 ? lines : 1
  for (i = 0; i < lines; i++) {
    console.log('')
  }
}

// Create a horizontal line across the screen
cli.horizontalLine = function() {
  // Get the available screen size
  const width = process.stdout.columns

  let line = ''
  for (i = 0; i < width; i++) {
    line += '-'
  }
  console.log(line)
}

// Create centered text on the screen
cli.centered = function(str) {
  str = typeof(str) === 'string' && str.trim().length > 0 ? str.trim() : ''

  // Get the available screen size
  const width = process.stdout.columns

  // Calculate the left padding there should be
  const leftPadding = Math.floor((width - str.length) / 2)

  // Put in left padded spaces before the string itself
  let line = ''
  for (i = 0; i < leftPadding; i++) {
    line += ' '
  }
  line += str
  console.log(line)
}

// Exit
cli.responders.exit = function() {
  process.exit(0)
}

// Stats
cli.responders.stats = function() {
  // Compile an object of stats
  const stats = {
    'Load Average': os.loadavg().join(' '),
    'CPU Count': os.cpus().length,
    'Free Memory': os.freemem(),
    'Current Malloced Memory': v8.getHeapStatistics().malloced_memory,
    'Peak Malloced Memory': v8.getHeapStatistics().peak_malloced_memory,
    'Allocated Heap Used (%)': Math.round((v8.getHeapStatistics().used_heap_size / v8.getHeapStatistics().total_heap_size) * 100),
    'Available heap Allocated (%)': Math.round((v8.getHeapStatistics().total_heap_size / v8.getHeapStatistics().heap_size_limit) * 100),
    'Uptime': os.uptime() + ' Seconds'
  }

  // Create a header for the stats
  cli.horizontalLine()
  cli.centered('SYSTEM STATISTICS')
  cli.horizontalLine()
  cli.verticalSpace(2)

  // Log out each stat
  for(const key in stats) {
    if(stats.hasOwnProperty(key)) {
      const value = stats[key]
      let line = '\x1b[33m' + key + '\x1b[0m'
      const padding = 60 - line.length
      for(i = 0; i < padding; i++) {
        line+=' '
      }
      line += value
      console.log(line)
      cli.verticalSpace(1)
    }
  }
  cli.verticalSpace(1)
  // End with another horizontal line
  cli.horizontalLine()
}

// List users
cli.responders.listUsers = function() {
  _data.list('users', function(err, userIds) {
    if(!err && userIds && userIds.length > 0) {
      cli.verticalSpace()
      userIds.forEach(function(userId){
        _data.read('users', userId, function(err, userData) {
          if(!err && userData) {
            let line = 'Name: ' + userData.firstName + ' ' + userData.lastName + ' Phone: ' + userData.phone + ' Checks: '
            const numberOfChecks = typeof(userData.checks) === 'object' && userData.checks instanceof Array && userData.checks.length > 0 ? userData.checks.length : 0
            line += numberOfChecks
            console.log(line)
            cli.verticalSpace()
          }
        })
      })
    }
  })
}

// More user info
cli.responders.moreUserInfo = function(str) {
  // Get the ID from the string
  const arr = str.split('--')
  const userId = typeof(arr[1]) === 'string' && arr[1].trim().length > 0 ? arr[1].trim() : false
  if(userId) {
    // Lookup the user
    _data.read('users', userId, function(err, userData) {
      if(!err && userData) {
        // Removed the hashed password
        delete userData.hashedPassword

        // Print the JSON with text highlighting
        cli.verticalSpace()
        console.dir(userData, {colors: true})
        cli.verticalSpace()
      }
    })
  }
}

// List checks
cli.responders.listChecks = function(str) {
  _data.list('checks', function(err, checkIds) {
    if(!err && checkIds && checkIds.length > 0) {
      cli.verticalSpace()
      checkIds.forEach(function(checkId) {
        _data.read('checks', checkId, function(err, checkData) {
          let includeCheck = false
          const lowerString = str.toLowerCase()

          // Get the state, default to "down"
          const state = typeof(checkData.state) === 'string' ? checkData.state : "down"
          // Get the state default to unknown
          const stateOrUnknown = typeof(checkData.state) === 'string' ? checkData.state : "down"
          // If the user specified the state, or hasn't specified any state, include the current check accordingly
          if(lowerString.indexOf('--' + state) > -1 || (lowerString.indexOf('--down') === -1 && lowerString.indexOf('--up') === -1)) {
            const line = 'ID: ' + checkData.id + ' ' + checkData.method.toUpperCase() + ' ' + checkData.protocol + '://' + checkData.url + ' State: ' + stateOrUnknown
            console.log(line)
            cli.verticalSpace()
          }
        })
      })
    }
  })
}

// More check info
cli.responders.moreCheckInfo = function(str) {
  // Get the ID from the string
  const arr = str.split('--')
  const checkId = typeof(arr[1]) === 'string' && arr[1].trim().length > 0 ? arr[1].trim() : false
  if(checkId) {
    // Lookup the check
    _data.read('checks', checkId, function(err, checkData) {
      if(!err && checkData) {

        // Print the JSON with text highlighting
        cli.verticalSpace()
        console.dir(checkData, {colors: true})
        cli.verticalSpace()
      }
    })
  }
}

// List logs
cli.responders.listLogs = function() {
  _logs.list(true, function(err, logFileNames) {
    if(!err && logFileNames && logFileNames.length > 0) {
      cli.verticalSpace()
      logFileNames.forEach(function(logFileName) {
        if(logFileName.indexOf('-') > -1) { // only compressed logs
          console.log(logFileName)
          cli.verticalSpace()
        }
      })
    }
  })
}

// More log info
cli.responders.moreLogInfo = function(str) {
  // Get the logFileName from the string
  const arr = str.split('--')
  const logFileName = typeof(arr[1]) === 'string' && arr[1].trim().length > 0 ? arr[1].trim() : false
  if(logFileName) {
    cli.verticalSpace()
    // Decompress the log file
    _logs.decompress(logFileName, function(err, stringData) {
      if(!err && stringData) {
        // Split into lines
        const arr = stringData.split('\n')
        arr.forEach(function(jsonString) { // regular string will be returned - wondering with the naming
          const logObject = helpers.parseJsonToObject(jsonString)
          if(logObject && JSON.stringify(logObject) !== '{}') {
            console.dir(logObject, {colors: true})
            cli.verticalSpace()
          }
        })
      }
    })
  }
}

// Input processor
cli.processInput = function(str) {
  str = typeof(str) === 'string' && str.trim().length > 0 ? str : false
  // Only process the input if user wrote something. Otherwise ignore it
  if(str) {
    // Codify the unique strings that identify the unique questions allowed to be asked
    const uniqueInputs = [
      'man',
      'help',
      'exit',
      'stats',
      'list users',
      'more user info',
      'list checks',
      'more check info',
      'list logs',
      'more log info'
    ]

    // Go through the possible inputs, and emit and event when match is found
    let matchFound = false
    let counter = 0
    uniqueInputs.some(function(input) {
      if(str.toLowerCase().indexOf(input) > -1) {
        matchFound = true
        // Emit an event matching the unique input, and include the full string given by the user
        e.emit(input, str)
        return true
      }
    })

    // If no match is found, tell the user to try again
    if(!matchFound) {
      console.log('Sorry, try again')
    }
  }
}


// Init script
cli.init = function(){
  // Send the start message to the console in dark blue
  console.log('\x1b[34m%s\x1b[0m', 'The CLI is running')

  // Start the interface
  const _interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>' // can use any symbol to prompt will start with instead of '>'
  })

  // Create an initial prompt
  _interface.prompt()

  // Handle each line of input separately
  _interface.on('line', function(str) {
    // Send to the input processor
    cli.processInput(str)

    // Re-initialize the prompt afterwards
    _interface.prompt()
  })

  // If user stps the CLI, kill the assotiated process
  _interface.on('close', function() {
    process.exit(0) // 0 - status code for 'everything fine'
  })
}

// Export the module
module.exports = cli

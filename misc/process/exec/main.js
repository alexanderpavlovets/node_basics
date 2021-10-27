const {exec} = require('child_process');

const command = `node ${__dirname}/sub.js`

global.myVar = 'myVarAsStr'
console.log('************ Global of main ************')
console.log(global)

exec(command, (e, stdout) => {
  console.log(stdout)
})

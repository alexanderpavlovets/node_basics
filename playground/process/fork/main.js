const {fork} = require('child_process');

const file = `${__dirname}/sub.js`

global.myVar = 'myVarAsStr'
console.log('************ Global of main ************')
console.log(global)

const child = fork(file)
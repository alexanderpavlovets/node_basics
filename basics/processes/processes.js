const fs = require('fs')

// //argv - parameters
// console.log(process.argv)

// console.log('================')

// process.stdout.write('Console.log via process stdout write' + '\n') // same as console.log()

// // read current file and print it
// fs.createReadStream(__filename).pipe(process.stdout) // will read current file and print it out


// // process.exit()
// let count = 0
// setInterval(() => {
//   count++
//   if (count > 30){
//     process.stdout.write('I am shown after 3 seconds, and process is exited')
//     process.exit()
//   }
// }, 100)

// ______________ child Proess

// _____ exec
// const exec = require('child_process').exec
// exec('cat ./processes/some.js', (err, stdout, stderr) => {console.log('we got our catted file = ', stdout)})
// console.log(process.argv)

// // _____ spawn
// const spawn = require('child_process').spawn
// if (process.argv[2] === 'child') {
//   console.log('I am inside the child ')

// } else {
//   const child = spawn(process.execPath, [__filename, 'child']) // execPath - will give current binary that running current process
//   child.stdout.on('data', (data) => {
//     console.log('from child', data.toString())
//   })
// }

// // ____ spawn + pipe
// const spawn = require('child_process').spawn
// if (process.argv[2] === 'child') {
//   console.log('I am inside the child ')

// } else {
//   const child = spawn(process.execPath, [__filename, 'child'])
//   child.stdout.pipe(process.stdout) // pipe to the main process
// }

//_____ inherit stdout from process
const spawn = require('child_process').spawn

if (process.argv[2] === 'child') {
  console.log('I am inside the child ')

} else {
  const child = spawn(process.execPath, [__filename, 'child'], {
    stdio: 'inherit'
  })

}

console.log('___________________')
console.log(process.env)
process.env.CREDENTIALS = {login: 'login@login.com', password: '123123123'}

// Bad one - insert here only path to file with credentials, than read file with node
console.log(process.env.CREDENTIALS)
console.log(process.env.CREDENTIALS.login) // won't work ! Inly strings

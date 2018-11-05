const http = require('http')

// run this and open browser with localhost 3000 - you will se console.log 
// const server = http.createServer()  // server is EventEmitter. Inherit from net.Server, which inherit rom EventEmitter
// server.on('connection', (socket) =>{
//   console.log('New connection established')
// })
// server.listen(3000)


// run browser on localhost 3000:

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('If you see this - response is ok')
    res.end()
  }

  if (req.url === '/api/numbers') {
    res.write(JSON.stringify([1, 2, 3, 4, 5]));
    res.end()
  }
})
server.listen(3000) // order is importand: what server does - only then listen()

// further may use express.js - framework buit upon the http module, for server side 
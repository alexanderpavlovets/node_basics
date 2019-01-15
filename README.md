# Basic ReadMe file
* For usage, please run 'npm install', after downloading
* Run 'npm test' in order to start your tests


#### HTTPS support for the server
Command is:
```
openssl version
```
```
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

#### Debug logs in console
* const util = require('util')
* const debug = util.debuglog('server')

Than run NODE_DEBUG=server node index.js


#### CLI Commands:
* Just type "help" in order to see CLI commands

#### Debuger
* just read the doc
* Basically need to add "debugger" before and after actions
```
console.log('Just converted foo to string')
debugger
```
* Run Node as:
```
node inspect index-debug.ts
```

* After this in command line available sever commands:
```
cont, next, in, out, pos
```

* while debugging (ran "node inspect index-debug.ts" - several times "cont" for example ), repl is available. You can see variable values just by typing them while in repl
```
repl
```

#### Run test
While you are in "app" directory
```
node test
```
This will go to "test" folder and execute "index.js"


### Use index-cluster file to get info about usage of all CPUs available
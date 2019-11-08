# This is main repo used as code-store:
* courses
  - es5 without frameworks(own server, UI, CLI)
  - es6 good parts (nice one from Kyle Simpson)
  - rethinking async JS (doesn't complete ... as i remember)
  - design patterns examples(bad code and cource)
* code examples and hints
  - playground with interesting code samples
* Jenkins readme (small notes, and Jenkinsfile itself)
* Docker basic image. For docker-compose example - see selenoid_easy_start_linux repo
* Makefile basic usage
* protractor just because of habbit :)

# To run protractor test
Run "npm install", after downloading.

### For run in container:
This will fail because there is Chrome in container. Not the target. Just Docker demo
make test

### For run on your browsers-farm:
- npm test

### For direct-connect:
- Go to "node_modules/protractor" and run "npm i webdriver-manager@latest"
- Go back to root
- package.json -> change chrome version on desired one (take version of your browser)
- Run "npm run env-update"
- Run "npm test" in order to start your tests


# ES5 Server details: 

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


#### Use index-cluster file to get info about usage of all CPUs available

#### REPL
* REPL - Run Eval Print Loop
* to run the REPL - type "node" in the console, you will get into repl
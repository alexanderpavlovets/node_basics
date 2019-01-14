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


### CLI Commands:
* Just type "help" in order to see CLI commands

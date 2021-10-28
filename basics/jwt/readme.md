
## Just JWT 

### In order to run requests - install extension REST Client in VSCode

- It allows to have .rest files and a button to run simple requests
- you can run req as you want, this add-on just to simplify pseudo-testing


### To generate secret keys in .env:
- run node REPL
- run code:

```
  require('crypto').randomBytes(64).toString('hex')
```

### 2 servers here - Auth 4000 and Regular 3000 - run both
- auth is responsible for creating JWT (access and refresh)
- main server - only validates JWT and responsible for business logic
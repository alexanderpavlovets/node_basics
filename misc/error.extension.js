
// Custom error
class MyError extends Error{
  constructor(name) {
    const message = `"${name}" custom error is thrown.`
    super(message)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MyError)
    }
  }
}

function throwCustomError() {
  throw new MyError('My custom error')
}

throwCustomError()

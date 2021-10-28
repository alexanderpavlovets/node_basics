
// Thunk - just postpone the function call

// In react-thunk for ex. it just check typeof === function - then call it.

// Basically thunk = lazy initialization implementation in JS.

// MAIN
// Thunk is a function that run another function with all parameters, that inner function need
// just calls it later

// Sync 
function add(x, y) {
  return x + y
}

const thunk = function() {
  return add(10, 15)
}

thunk() // 25

// Async 
function addAsync(x, y, cb) {
  setTimeout(() => {
    cb(x + y)
  }, 1000)
}

const thunkAsync = function(cb) {
  addAsync(10,15, cb)
}

thunkAsync(function(sum) {
  console.log(sum)
})

// Whaaaaaaat.
function getFile(file) {
  let text, fn

  fakeAjax(file, function(response){
    if (fn) fn(response)
    else text = response
  })

  return function(cb) {
    if (text) cb(text)
    else fn = cb
  }
}

const th1 = getFile('file1')
const th2 = getFile('file2')
const th3 = getFile('file3')

th1(function(text1){
  output(text1)
  th2(function(text2){
    output(text2)
    th3(function(text3){
      output(text3)
      output('Complete!')
    })
  })
})

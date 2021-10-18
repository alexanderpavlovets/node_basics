// Module main goal - data encapsulation, avoid global scope pollution  ... bla bla as always

// Template:

const myModule = (function (){
  let privateVar = 0
  const privateVar2 = 'str'

  const myPrivateFunction = function (param) {
    console.log(param)
  }

  return {
    publicVar: 123,
    publicFunction: function (param) {
      privateVar++
      myPrivateFunction(param)
    }
  }
})()

myModule.publicFunction(123123)


// To pass some dependency, maybe some library/whatever:
const dependency = 1
const moduleWIthDependency = (function(dependency){
  console.log(`Passed in dependency is ${dependency}`)
})(dependency)


// Usage of "this" to access own public methods is possible
const moduleWithThis = (function () {
  return {
    publicMethod1() {
      console.log('from public method 1')
    },
    publicMethod2: function() {
      this.publicMethod1()
    },
    publicVar1: 123,
    publicVar2: this.publicVar1
  }
})()

moduleWithThis.publicMethod2() // from public method 1
console.log(moduleWithThis)
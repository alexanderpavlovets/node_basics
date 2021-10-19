// Singleton - one instance 

/*
  Difference between statis class and singleton:

  Singleton has delay initialization - it won't get instantiated, until you call .getInstance()

*/

/*
  GoF (GangOfFour) describe singleton:
  - There must be exactly one instance of a class, and it must be accessible to clients 
    from a well-known access point.
  - When the sole instance should be extensible by subclassing, 
    and clients should be able to use an extended instance without modifying their code.

  Second point is not really makes sence for me in JS - maybe i am too young for it.
*/

const mySingleton = (function () {
  let instance = null

  function init() {
    const privateVarFoo = 'foo'
    function privateFunctionLog() {
      console.log(`I have value ${privateVarFoo}`)
    }

    return {
      someVar: 123,
      logHiddenData: privateFunctionLog
    }
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init()
      }
      return instance
    }
  }
})()

const a = mySingleton.getInstance()
const b = mySingleton.getInstance()
console.log(a === b) // true
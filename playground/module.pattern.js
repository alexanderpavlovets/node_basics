// Module pattern:

// Closure 
function sayHi() {
  message = 'asd'
  function hi() {
    console.log(this.message)
  }
  return hi
}

const a = sayHi()
a()

// Closure with API returned
function sayHi2() {
  message = 'asd'
  function hi() {
    console.log(this.message)
  }
  return {
    say: () => hi(),
    sayAgain: () => message += 'asdasdasd'
  }
}

const b = sayHi2()
b.say()
b.sayAgain()
b.say()

// Module base logic
const modulePattern = (function(){
  value = 10
  function increase(){
    value += 1
  }
  function decrease(){
    value -= 1
  }
  function getCurrentValue(){
    return value
  }

  return {
    increase,
    decrease,
    getCurrentValue
  }
})()

console.log('Module pattern')
console.log(modulePattern.getCurrentValue()) // 10
modulePattern.increase() // 11
modulePattern.increase() // 12
modulePattern.increase() // 13
modulePattern.decrease() // 12
console.log(modulePattern.getCurrentValue()) // 12


// Module logic with chaining
const modulePatternChain = (function(){
  value = 10
  function increase(){
    value += 1
    return this
  }
  function decrease(){
    value -= 1
    return this
  }
  function getCurrentValue(){
    return value
  }

  return {
    increase,
    decrease,
    getCurrentValue
  }
})()

console.log('Module with chaining: ')
console.log(modulePatternChain.getCurrentValue()) // 10
const resultOfIncreasing = modulePatternChain.increase().increase().increase().getCurrentValue() // 13
console.log(resultOfIncreasing)

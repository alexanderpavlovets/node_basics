
// _______________________________ Recursive funtions behave like a call stack: 

function foo(i) {
  console.log(' i is ', i)
  if (i < 0)
    return;
  console.log('begin: ' + i);
  foo(i - 1);
  console.log('end: ' + i);
  console.log('whaaaaaaat')
}
foo(3);


// _______________________________ Arrow functions has no own "arguments" object
const arrow = () => {
  console.log('here')
  console.log(arguments) // prints main function args
}
arrow(1)

function outer() {
  const argsOuter = arguments;
  (() => {
    console.log(arguments)
    console.log(arguments === argsOuter) // true
  })()
}
outer(1)


// _______________________________ Funtions and this with arrow ones recall:
function thisCheck() {
  this.prop = 1
  return {
    asd() {
      console.log(this.prop) // "this" is lost, because it is a regular function. const self = this ... bla bla 
    },
    qwe: () => {
      console.log(this.prop) // "this" is not lost - because it is arrow function
    }
  }
}
const a = thisCheck()
a.asd()
a.qwe()

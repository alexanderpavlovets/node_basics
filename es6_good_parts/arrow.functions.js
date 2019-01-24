
// can't stal alone as function declaration. Arro func is always expression:

foo = () => 2
function foo() {return 2}

// If single parameter - no need for ():
foo = x => x
function foo(x) {return x}

// if no parameter - need to use placeholder. () is also placeholder:
() => 3
_ => 3
console.log((_ => 3)()); // hahaha )) Damn ! Semi-column is required ... because of TS ... what the fuck !

// if parameters are needed - need to use ():
(...x) => 3;
(x, y) => 3;

// Expressions are not valid as body of arrow function and should be wrapped with {}
x => { try {3} catch(e){} }

// in {} return is needed
x => {return 3}

// Impossible to return an object without dance
x => {return {a: 1}}
x => ({a: 1})
console.log((_ => ({a: 1}))()); // ahahahaha )))

// No way to give a name to arrow function
// name () => 3

// Anon function expression assigned to variable:
// It is possible to give a name but you won't use it like this
const foo1 = () => 3
console.log(foo1.name) // foo1
// You will use arrow funtions like:Anon
foo1( x => 3); // can't name arrow function here

// ________________ Arrow funtions and promises
// Old one Promise
p.then(function(v) {return v.id})
// Arrow promise
p.then(v => v.id) // not informative in stack trace

// Kyle recommends to name functions
p.then(function extractId(v) {return v.id}) // good in stack trace


// ____________________GOOD for arrow functions:
const obj = {
  id: 12,
  foo: function foo() {
    setTimeout(function () {
      console.log(this.id) // undefined. setTimeout uses default binding rule
    }, 100);
    setTimeout(function () {
      console.log(this.id)
    }.bind(this), 100); // bind will solve the problem
  }
}
obj.foo()

// NICE for arrow funtions
const objNice = {
  id: 21,
  foo: function foo() {
    setTimeout(() => console.log(this.id), 100);
  }
}
objNice.foo()


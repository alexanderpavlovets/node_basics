/*
  In classical object-oriented programming languages,
  a constructor is a special method used to initialize a newly created object
*/


// 3 ways of object creation is JS: 
const obj = {}
const obj1 = Object.create(Object.prototype)
const obj2 = new Object() // if no value passed in - will create empty object, if val is passed - will create object wrapper for the value


// 4 ways of adding properties:
obj.propName = 'value'
obj['propName1'] = 'value1'
Object.defineProperty(obj, 'propName2', { value: 123, writable: true, enumerable: true, configurable: true })
Object.defineProperties(obj, {
  propName3: { value: 'val', enumerable: true, writable: true },
  propName4: { value: 'vallll', enumerable: true, writable: true }
})
console.log(obj)


// Functions constructors:
// Negative - "sayHi" will be redefined for each created instance - solution - prototypes (further)
function Person(name, age) {
  this.name = name
  this.age = age

  this.sayHi = function () {
    console.log(`Hi, my name is ${this.name}, and i am ${this.age} years old`)
  }
}

const john = new Person('John', 20)
const bar = new Person('Bar', 25)
john.sayHi()
bar.sayHi()


// Function constructors with prototype:
function PersonWithMethodsInPrototype(name, age) {
  this.name = name
  this.age = age
}
PersonWithMethodsInPrototype.prototype.sayHi = function () {
  console.log(`Hi, my name is ${this.name}, and i am ${this.age} years old. I share this method via prototype`)
}

const johnPrototyped = new PersonWithMethodsInPrototype('John', 23)
johnPrototyped.sayHi()
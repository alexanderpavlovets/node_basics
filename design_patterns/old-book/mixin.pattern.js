/*
  In traditional programming languages such as C++ and Lisp, Mixins are classes 
  which offer functionality that can be easily inherited by a sub-class or group of sub-classes 
  for the purpose of function re-use.
*/

// In JS Mixins - kind of collection of functionality through extension (extension = prototypal inheritance)

/* 
  Seems really simple in JS - just object composition
  - You have a Mixin - a list of functions
  - you choose what of this functions should be applied to your class (via .prototype)

  Main advantage - reuse of some functions
  Disadvantage - direct poluting prototypes - unclear code. Here i agree, pattern can provide real mess and hard refactor
*/

const Car = function ({ color = 'no color provided', model = 'no model provided' }) {
  this.color = color
  this.model = model
}

const Mixin = function () { }
Mixin.prototype = {
  driveForward: function () {
    console.log("drive forward");
  },
  driveBackward: function () {
    console.log("drive backward");
  },
  driveSideways: function () {
    console.log("drive sideways");
  }
}

// augment = увеличивать, прибавлять 
function augment( receivingClass, givingClass, ...methodsList ) {
  // provide only listed methods
  if(methodsList.length) {
    methodsList.forEach(methodName => {
      receivingClass.prototype[methodName] = givingClass.prototype[methodName]
    })
  } else { // provide all methods
    for( const methodName in givingClass.prototype ) { // seems like "so so" solution
      if (!receivingClass.prototype.hasOwnProperty(methodName)) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName]
      }
    }
  }
}

augment(Car, Mixin, 'driveForward', 'driveBackward')
const myCarWithListedMethods = new Car({ color: 'blue', model: 'BMW' })
console.log(myCarWithListedMethods)
myCarWithListedMethods.driveForward()
myCarWithListedMethods.driveBackward()

augment(Car, Mixin)
const mySportCarWithAllMethods = new Car({ color: 'red', model: 'Ferrari' })
mySportCarWithAllMethods.driveSideways()
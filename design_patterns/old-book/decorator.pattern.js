
/* 
  Promote code re-use

  Classically, Decorators offered the ability to add behaviour to existing classes in a 
  system dynamically.

  They can be used to modify existing systems where we wish to add additional features to objects 
  without the need to heavily modify the underlying code using them.
*/

// Straitforward example - i am not sure it can be called decorator:
function Vehicle(vehicleType = 'car') {
  this.vehicleType = vehicleType
  this.model = 'default'
  this.licence = '00000-000'
}
const testInstance = new Vehicle('car')
console.log(testInstance)

// new instance to be decorated:
const truck = new Vehicle('truck')
// New functionality we are decorating vehicle with:
truck.setModel = function (modelName) { this.model = modelName }
truck.setColor = function (color) { this.color = color }
truck.setModel('CAT')
truck.setColor('Yellow')
console.log(truck)
// Demostrate that "vehicle" is still unaltered:
const secondInstance = new Vehicle('car')
console.log(secondInstance)


// _____________________ Decorating objects with multiple decorators
function MacBook() {
  this.cost = function () { return 997 }
  this.screenSize = function () { return 11.6 } 
}

// Decorator 1
function memory(macbook) {
  const v = macbook.cost()
  macbook.cost = function() { return v + 75 }
}

// Decorator 2
function engraving(macbook) {
  const v = macbook.cost()
  macbook.cost = function() { return v + 200 }
}

// Decorator 3
function insurance(macbook) {
  const v = macbook.cost()
  macbook.cost = function() { return v + 250 }
}

const mb = new MacBook()
memory(mb)
engraving(mb)
insurance(mb)

console.log(mb.cost()) // 1522
console.log(mb.screenSize()) // 11.6


// Good example is about adding some additional actions to "request" - add them to some metrics storage
// you just decorate a "request" without modifying it directly
/*
  main principle here:

  const a = prevResult()
  return a + 'some additional data'
*/

// Abstract Factory aims to encapsulate a group of individual factories with a common goal.

// It separates the details of implementation of a set of objects from their general usage.

/*
  Used when: 
  - system must be independent from the way the objects it creates are generated
  - system needs to work with multiple types of objects
*/

/*
  Abstract Factory provides kind of general interface for all objects that it will create
  it allows to use polymorphism - IMPORTANT for understanding 
  
  It checks if class has some fields, only if yes - adds it to own types, then you can create this type.
  Meanwhile abstract factory knows nothing about implementation details - only cares of types check,
  and then create object with one of the classes from types
*/

function Car ({ color, state }) {
  this.color = color
  this.state = state
}
Car.prototype.drive = function () { console.log('i am driving a car') }
Car.prototype.breakDown = function () { console.log('i am breaking down as a car') }

function Truck({ color, wheelSize }) {
  this.color = color
  this.wheelSize = wheelSize
}
Truck.prototype.drive = function () { console.log('i am driving a truck') }
Truck.prototype.breakDown = function () { console.log('i am breaking down as a truck') }

const abstractVehicleFactory = (function () {
  const allowedTypes = {}

  return {
    registerVehicle: function(type, Vehicle) {
      const proto = Vehicle.prototype

      // main part - register class in abstract factory, only if it match interface
      if (proto.drive && proto.breakDown) {
        allowedTypes[type] = Vehicle
      }
    },
    getVehicle: function (type, customizations) {
      const Vehicle = allowedTypes[type]
      return Vehicle ? new Vehicle(customizations) : null
    }
  }
})()

abstractVehicleFactory.registerVehicle('car', Car)
abstractVehicleFactory.registerVehicle('truck', Truck)

const myCar = abstractVehicleFactory.getVehicle('car', { color: 'red', state: 'new' })
const myTruck = abstractVehicleFactory.getVehicle('truck', { color: 'blue', wheelSize: 'big' })

console.log(myCar)
console.log(myCar instanceof Car) // true
console.log(myTruck)
console.log(myTruck instanceof Truck) // true

// Polymorphism is possible, because objs are created with abstract Factory:
myCar.drive()
myTruck.drive()

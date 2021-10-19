
// Factory ... is a Factory :)

// Provides generic interface for creating objects, where we can specify the type of object we wish to create
/*
  Useful when: 
  - objects setup involves high complexity 
  - we work with many small objects with same properties
  - we need to generate different instances, depending on environment where we are in
*/


function Car({ doors = 4, state = 'brand new', color = 'silver' }) {
  this.doors = doors
  this.state = state
  this.color = color
}

function Truck({ state = 'used', wheelSize = 'large', color = 'blue' }) {
  this.state = state
  this.wheelSize = wheelSize
  this.color = color
}

// A bit "area of improvement" example on my opinion - he tries to show 2 approaches, thus no one is good :)
function VehicleFactory() { }
// default vehicle class
VehicleFactory.prototype.vehicleClass = Car // why not in switch - i don't know. Just logic here.
VehicleFactory.prototype.createVehicle = function (options) {
  switch (options.vehicleType) {
    case 'car': this.vehicleClass = Car; break;
    case 'truck': this.vehicleClass = Truck; break;
    // default: // i would add default here, instead of row 27
  }
  return new this.vehicleClass(options)
}

const carFactory = new VehicleFactory()
const car = carFactory.createVehicle({ vehicleType: 'car', doors: 18 })
console.log(car instanceof Car) // true

// Option 1 of "truck" creation
const truck = carFactory.createVehicle({ vehicleType: 'truck', color: 'red' })
console.log(truck instanceof Truck) // true


// Option 2 of "truck" creation - we can create "subclass" of Vehicle Factory.
function TruckFactory() {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

const truckFactory = new TruckFactory()
const truck1 = truckFactory.createVehicle({ color: 'bad one' })
console.log(truck1 instanceof Truck) // true


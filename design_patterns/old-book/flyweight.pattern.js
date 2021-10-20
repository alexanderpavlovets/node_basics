/*
  The flyweight pattern is useful when dealing with large numbers of objects 
  with simple repeated elements that would use a large amount of memory if individually stored. 
  It is common to hold shared data in external data structures 
  and pass it to the objects temporarily when they are used.
*/

/*
  The Flyweight pattern is a classical structural solution for optimizing code that is 
  repetitive, slow and inefficiently shares data.

  Flyweight - because of weight category name in boxing :) 
  Flyweight = small weight of memory is main goal of the pattern
*/

/*
  Flyweight separates data on 2 types:
  - intrinsic state- "internal" data needed for objects - kind of common data - keep it in one place and share! 
  - extrinsic state - "external" data - kind of different data - keep it in data manager!
*/

// Okay so example here is so painfull that i can't push myself to write it
// He wants manually point to .prototype.construtor - i'll cry if write it down !

/*
  Flyweight often used via Factories - it is much easier to create objects in factories 
  In factory we just decide to create a new obj, or return already existing intrinsic obj
*/

// Another example (simple one):
class Auto {
  constructor(model) {
    this.model = model
  }
}

class AutoFactory {
  constructor() {
    this.models = {}
  }
  create(name) {
    let model = this.models[name]
    // this row basically is Flyweight - if obj exists - return it, if no - create new. We share data in this way
    if(model) return model
    this.models[name] = new Auto(name)
    return this.models[name]
  }
  getModels() {
    console.table(this.models)
  }
}

const factory = new AutoFactory()

const audi = factory.create('audi')
const bmw = factory.create('bmw')
const audiAgain = factory.create('audi')

factory.getModels() // 2 models, because "audi" already exists - flyweight 

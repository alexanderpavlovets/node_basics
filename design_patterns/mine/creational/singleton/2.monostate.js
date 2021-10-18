
// Another way of implementation of singleton

// Share data within class itself, not via instances.

class ChiefExecutiveOfficer {
  get name() {return ChiefExecutiveOfficer._name}
  set name(value) {
    ChiefExecutiveOfficer._name = value
  }
  get age() {return ChiefExecutiveOfficer._age}
  set age(value) {
    ChiefExecutiveOfficer._age = value
  }

  toString() {
    return `CEO name is ${this.name}, and age is ${this.age}`
  }
}

ChiefExecutiveOfficer._name = null
ChiefExecutiveOfficer._age = null

const ceo1 = new ChiefExecutiveOfficer()
const ceo2 = new ChiefExecutiveOfficer()

ceo1.name = 'CEO1 name'
ceo2.age = 'CEO2 age'

console.log(ceo1.toString())
console.log(ceo2.toString())
// I didn't liked this one at all

// Listen to an property chage

// Base class Event
class Event { 
  constructor() {
    this.handlers = new Map()
    this.count = 0
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler)
    return this.count
  }

  unsubscribe(ind) {
    this.handlers.delete(ind)
  }

  fire(sender, args) {
    this.handlers.forEach((value, key) => value(sender, args))
  }
}

// Just "interface"
class PropertyChangedArguments {
  constructor(nameOfTheProperty, newValue) {
    this.nameOfTheProperty = nameOfTheProperty
    this.newValue = newValue
  }
}

// Change of this class instance property will be tracked
class Person {
  constructor(age) {
    this._age = age
    this.propertyChanged = new Event()
  }

  get age() { return this._age}

  set age(value) {
    // we want notifications received only when property changes.
    if (!value || this._age === value) {
      return
    }
    this._age = value
    this.propertyChanged.fire(this, new PropertyChangedArguments('age', value))
  }
}

class RegistrationChecker {
  constructor(person) {
    this.person = person
    this.token = person.propertyChanged.subscribe(
      this.ageChanged.bind(this) // need to define context, because of using method
    )
  }

  ageChanged(sender, args) {
    if (sender === this.person && args.nameOfTheProperty === 'age') {
      if (args.newValue < 18) {
        console.log(`Sorry, you are still too young`)
      } else {
        console.log(`Ok, you can register`)
        // we need to unsubscribe, because person won't get younger
        sender.propertyChanged.unsubscribe(this.token)
      }
    }
  }
}

const person = new Person(10)
const checker = new RegistrationChecker(person)
// set age in the loop, trigger events only untill age reached 18, then - unsubscribe
for (let i = 11; i < 22; i++) {
  console.log(`Setting age to ${i}`)
  person.age = i
}


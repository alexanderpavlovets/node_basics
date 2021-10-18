
// When changing properties are related to each other

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

    let oldCanVote = this.canVote

    this._age = value
    this.propertyChanged.fire(this, new PropertyChangedArguments('age', value))

    // pay attention to line 48 = store the old value.
    // And due to "canVote" is depend on age, we fire event here, if canVote changes
    // BUT ! This approach only works for simple cases. Imagine if "canVote" would depend on country, age, sex, ...- smells.
    if (oldCanVote !== this.canVote) {
      this.propertyChanged.fire(this, new PropertyChangedArguments('canVote', this.canVote))
    }
  }

  get canVote() {
    return this._age >= 16
  }
}

class VotingChecker {
  constructor(person) {
    this.person = person
    this.person.propertyChanged.subscribe(
      this.votingChanged.bind(this)
    )
  }

  votingChanged(sender, args) {
    if (sender === this.person && args.nameOfTheProperty === 'canVote') {
      console.log(`Voting status changed to ${args.newValue}`)
    }
  }
}

const person = new Person(10)
const checker = new VotingChecker(person)
for (let i = 10; i < 20; i++) {
  console.log(`Changing age to ${i}`)
  person.age = i
}


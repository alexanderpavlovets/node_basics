
// Typically curious about events, that happening in the system:
// - Objects changed
// - Objects do somth
// - External events

// Entity that generates events - "observable"
// Entity that consume events - "observer"


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

  /* Basically we need 2 pieces of infomation:
    - who fired the event
    - additional data (event arguments)
  */
  fire(sender, args) {
    this.handlers.forEach((value, key) => value(sender, args))
  }
}

class FallsIllArgumetns {
  constructor(address) {
    this.address = address
  }
}

class Person {
  constructor(address) {
    this.address = address
    this.fallsIll = new Event()
  }

  catchCold() {
    // fire the event
    this.fallsIll.fire(
      this,
      new FallsIllArgumetns(this.address)
    )
  }
}

// whoever has acces to the person - can subscribe to it's event.
const person = new Person('123 Kyiv')
const subscriptionId = person.fallsIll.subscribe((sender, args) => {
  console.log(`Person is ill! Doctor is going to: ${args.address}`)
})

person.catchCold()
person.catchCold()

person.fallsIll.unsubscribe(subscriptionId)
person.catchCold()
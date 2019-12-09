
// Basic example of Observe pattern.
// "sender" parameter here is not used. Just to show, that it is possible to pass sender to event handler.

// Base class Event
class Event {
  constructor() {
    this.handlers = new Map()
    this.handlerId = 0
  }

  subscribe(handlerFunction) {
    this.handlers.set(++this.handlerId, handlerFunction)
    return this.handlerId
  }

  unsubscribe(handlerId) {
    this.handlers.delete(handlerId)
  }

  fire(sender, args) {
    this.handlers.forEach((handler) => {
      handler(sender, args)
    })
  }
}

// Observable
class Grebets {
  constructor(name) {
    this.name = name
    this.cameToWork = new Event()
    this.goesSmoke = new Event()
    this.leavesWork = new Event()
    this.smokePausesAmount = 0
  }

  arriveToWork(timeOfArrival) {
    console.log(`Grebets came to work at ${timeOfArrival}`)
    this.cameToWork.fire(this, {timeOfArrival})
  }

  goSmoke() {
    ++this.smokePausesAmount
    console.log(`Grebets goes smoke for the ${this.smokePausesAmount} time`)
    this.goesSmoke.fire(this, {smokePausesAmount: this.smokePausesAmount})
  }

  leaveWork(workedHours) {
    console.log(`Grebets is leaving, and worked ${workedHours} hours today`)
    this.leavesWork.fire(this, {workedHours})
  }
}

// Observer
class Lead {
  constructor(grebets) {
    this.grebets = grebets
    this.grebetsCameToWorkId = this.grebets.cameToWork.subscribe(
      this.handleGrebetsCameToWork.bind(this) // no need to bind here. But good practise - if "this" is needed inside handler itself
    )
    this.grebetsGoesSmokeId = this.grebets.goesSmoke.subscribe(
      this.handleGrebestGoesSmoke.bind(this)
    )
    this.grebetsLeaveWorkId = this.grebets.leavesWork.subscribe(
      this.handleGrebetsLeaveWork.bind(this)
    )
  }

  handleGrebetsCameToWork(sender, args) {
    const isCameInTime = args.timeOfArrival < 10

    if(isCameInTime) {
      console.log('Hi, my greatest worker')
    } else {
      console.log('Why soo late?!')
    }
  }

  handleGrebestGoesSmoke(sender, args) {
    console.log('WTF??!! Smoke is prohibited!')
    if (args.smokePausesAmount >= 3) {
      console.log(`You are fired! You've been smoking too much`)
      this.grebets.cameToWork.unsubscribe(this.grebetsCameToWorkId)
      this.grebets.goesSmoke.unsubscribe(this.grebetsGoesSmokeId)
      this.grebets.leavesWork.unsubscribe(this.grebetsLeaveWorkId)
    }
  }

  handleGrebetsLeaveWork(sender, args) {
    const isWorkedEnough = args.workedHours >= 8

    if(isWorkedEnough) {
      console.log('Farewell, greates ever grebets!')
    } else {
      console.log('Not so fast, you idiot!')
    }
  }
}


// Good grebets:
const grebets = new Grebets('Jimmy')
const lead = new Lead(grebets)

grebets.arriveToWork(6)
grebets.goSmoke()
grebets.leaveWork(12)

// Bad grebets
// const grebetsBad = new Grebets('Kenny')
// const zloyLead = new Lead(grebetsBad)

// grebetsBad.arriveToWork(12)
// grebetsBad.goSmoke()
// grebetsBad.goSmoke()
// grebetsBad.leaveWork(3)
// grebetsBad.goSmoke()    // Unsubscribe here
// grebetsBad.leaveWork(20)
// grebetsBad.goSmoke()
// grebetsBad.goSmoke()
// grebetsBad.goSmoke()
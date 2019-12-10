
const pubSub = (function pubSub() {

  const subscribers = {}

  return {
    publish(event, data) {
      console.log(subscribers)
      if (!subscribers[event]) return
      subscribers[event].forEach(subscriberCallback =>
        subscriberCallback(data))
    },

    subscribe(event, callback) {
      if (!subscribers[event]) {
        subscribers[event] = []
      }
      const index = subscribers[event].push(callback) - 1 // push returns new length of the array

      return {
        unsubscribe() {
          subscribers[event].splice(index, 1) // removing the callback from subscribers
        }
      };
    }
  }
})()

class Grebets {
  constructor(name) {
    this.name = name
    this.leadCameSubscription = pubSub.subscribe('Lead came to work', this.writeCode.bind(this))
    this.leadLeaveSubscription =  pubSub.subscribe('Lead went home', this.goSmoke.bind(this))
  }

  writeCode() {
    console.log(`I am grebets ${this.name}, and i am writing ebat' lunolikiy code`)
  }

  goSmoke() {
    console.log(`I am grebets ${this.name}, and i am smoking, while lead at home`)
  }

  iAmTooOldForThisSheet() {
    console.log(`I am ${this.name}, and i am too old for this sheet!`)
    this.leadCameSubscription.unsubscribe()
    this.leadLeaveSubscription.unsubscribe()
  }
}

class Lead {
  constructor(name) {
    this.name = name
  }

  arriveToWork() {
    console.log(`Lead arrived to work!`)
    pubSub.publish('Lead came to work')
  }

  goHome() {
    console.log(`Lead goes home`)
    pubSub.publish(`Lead went home`)
  }
}


const grebets1 = new Grebets('Vasia')
const grebets2 = new Grebets('Petia')
const grebets3 = new Grebets('Kolia')
const grebets4 = new Grebets('Aarav Rajesh Aditya Mohan')

const lead = new Lead('Reyansh Vihaan Muhammad II')

lead.arriveToWork()
lead.goHome()

// Fuck it!
grebets1.iAmTooOldForThisSheet()
grebets2.iAmTooOldForThisSheet()
// grebets3.iAmTooOldForThisSheet()
// grebets4.iAmTooOldForThisSheet()

lead.arriveToWork()
lead.goHome()

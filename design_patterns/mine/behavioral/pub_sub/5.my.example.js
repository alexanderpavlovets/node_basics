
const pubSub = (function pubSub() {

  const subscribers = {}

  return {
    publish(event, data) {
      if (!subscribers[event]) return
      subscribers[event].forEach(subscriberCallback =>
        subscriberCallback(data))
    },

    subscribe(event, callback) {
      if (!subscribers[event]) {
        subscribers[event] = new Map()
      }

      const cbStorage = subscribers[event]
      // Getting uniq key in the Map. Last key + 1
      const lastKeyInMap = cbStorage.size
        ? Array.from(cbStorage)[cbStorage.size - 1][0] 
        : 0
      const uniqMapKey = lastKeyInMap + 1
      
      cbStorage.set(uniqMapKey, callback)

      return {
        unsubscribe() {
          cbStorage.delete(uniqMapKey)
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
grebets3.iAmTooOldForThisSheet()


lead.arriveToWork()
lead.goHome()

// More cool specialists
const grebets5 = new Grebets('Raja Tihju Ajibo')
const grebets6 = new Grebets('Abi-Dhabi Akalai')

lead.arriveToWork()
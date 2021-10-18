
// Publisher/Subscriber = PubSub 
// pattern that allows to create modules, that can communicate with each orther without depending directly on each other

let subscribers = {}

module.exports = {
  // method to publish an update
  publish(event, data) {
    if (!subscribers[event]) return
    subscribers[event].forEach(subscriberCallback =>
      subscriberCallback(data))
  },

  // method to subscribe to an update
  subscribe(event, callback) {
    if (!subscribers[event]) {
      subscribers[event] = []
    }
    const index = subscribers[event].push(callback) - 1 // push returns new length of the array

    return {
      unsubscribe() {
        subscribers[event].splice(index, 1) // removing the callback 
      }
    };
  }
}

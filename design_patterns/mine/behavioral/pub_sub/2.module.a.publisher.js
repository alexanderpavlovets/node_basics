
// This module is a publisher

const pubSub = require('./1.pubsub')

module.exports = {
    publishEvent() {
        const data = {
            msg: 'TOP SECRET DATA'
        }
        
        pubSub.publish('anEvent', data)
    }
}

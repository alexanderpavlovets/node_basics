const moduleA = require('./module.a.publisher')
const moduleB = require('./module.b.subscriber')

// We use moduleA's publishEvent() method
moduleA.publishEvent()
moduleA.publishEvent()
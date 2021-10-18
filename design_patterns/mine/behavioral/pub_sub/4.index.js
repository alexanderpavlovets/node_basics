const moduleA = require('./2.module.a.publisher')
const moduleB = require('./3.module.b.subscriber')

// We use moduleA's publishEvent() method
moduleA.publishEvent()
moduleA.publishEvent()